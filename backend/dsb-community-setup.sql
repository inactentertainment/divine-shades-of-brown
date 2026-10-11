-- Preparation only: not executed on Basketball Brilliance or Cannabis Basics.
-- Run in a dedicated DSB project, require confirmed email in Auth, then test RLS.
begin;
create table public.dsb_blog_posts (id text primary key);
create table public.dsb_blog_comments (
 id uuid primary key default gen_random_uuid(),
 post_id text not null references public.dsb_blog_posts(id),
 parent_id uuid references public.dsb_blog_comments(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 display_name text not null check(length(display_name) between 1 and 50),
 body text not null check(length(body) between 1 and 2000),
 tone text not null check(tone in ('🏻','🏼','🏽','🏾','🏿')),
 sticker text not null default '' check(sticker in ('','Well said','Keep building','Rooted in greatness')),
 status text not null default 'pending' check(status in ('pending','approved','rejected')),
 created_at timestamptz not null default now()
);
create index dsb_blog_comment_post_time on public.dsb_blog_comments(post_id,created_at);
create index dsb_blog_comment_user_time on public.dsb_blog_comments(user_id,created_at);
create table public.dsb_blog_reactions (
 post_id text not null references public.dsb_blog_posts(id),
 user_id uuid not null references auth.users(id) on delete cascade,
 reaction text not null check(reaction in ('👍','👏','🤎')),
 tone text not null check(tone in ('🏻','🏼','🏽','🏾','🏿')),
 primary key(post_id,user_id)
);
create table public.dsb_blog_reports (
 id uuid primary key default gen_random_uuid(),
 comment_id uuid not null references public.dsb_blog_comments(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 reason text not null check(length(reason) between 1 and 500),
 created_at timestamptz not null default now(),
 unique(comment_id,user_id)
);
alter table public.dsb_blog_posts enable row level security;
alter table public.dsb_blog_comments enable row level security;
alter table public.dsb_blog_reactions enable row level security;
alter table public.dsb_blog_reports enable row level security;
grant select on public.dsb_blog_posts to anon,authenticated;
grant select on public.dsb_blog_comments to anon,authenticated;
grant insert,delete on public.dsb_blog_comments to authenticated;
grant select,insert,update,delete on public.dsb_blog_reactions to authenticated;
grant insert on public.dsb_blog_reports to authenticated;
create policy dsb_public_posts on public.dsb_blog_posts for select to anon,authenticated using(true);
create policy dsb_public_approved_comments on public.dsb_blog_comments for select to anon,authenticated using(status='approved');
create policy dsb_own_pending_comments on public.dsb_blog_comments for select to authenticated using((select auth.uid())=user_id);
create policy dsb_submit_own_comments on public.dsb_blog_comments for insert to authenticated with check((select auth.uid())=user_id and status='pending' and coalesce((select auth.jwt()->>'is_anonymous'),'false')='false' and (select auth.jwt()->>'email') is not null);
create policy dsb_delete_own_comments on public.dsb_blog_comments for delete to authenticated using((select auth.uid())=user_id);
create policy dsb_own_reaction_read on public.dsb_blog_reactions for select to authenticated using((select auth.uid())=user_id);
create policy dsb_own_reaction_insert on public.dsb_blog_reactions for insert to authenticated with check((select auth.uid())=user_id and coalesce((select auth.jwt()->>'is_anonymous'),'false')='false' and (select auth.jwt()->>'email') is not null);
create policy dsb_own_reaction_update on public.dsb_blog_reactions for update to authenticated using((select auth.uid())=user_id) with check((select auth.uid())=user_id);
create policy dsb_own_reaction_delete on public.dsb_blog_reactions for delete to authenticated using((select auth.uid())=user_id);
create policy dsb_submit_report on public.dsb_blog_reports for insert to authenticated with check((select auth.uid())=user_id and exists(select 1 from public.dsb_blog_comments c where c.id=comment_id and c.status='approved'));
create function public.dsb_comment_checks() returns trigger language plpgsql security invoker set search_path='' as $$
begin
 if new.user_id is distinct from auth.uid() then raise exception 'Invalid author'; end if;
 perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(auth.uid()::text,0));
 if new.parent_id is not null and not exists(select 1 from public.dsb_blog_comments c where c.id=new.parent_id and c.post_id=new.post_id and c.status='approved') then raise exception 'Reply must reference a published comment on this article'; end if;
 if (select count(*) from public.dsb_blog_comments c where c.user_id=auth.uid() and c.created_at>now()-interval '1 minute')>=3 then raise exception 'Please wait before submitting another comment'; end if;
 new.created_at=now();return new;
end $$;
create trigger dsb_comment_checks before insert on public.dsb_blog_comments for each row execute function public.dsb_comment_checks();
revoke execute on function public.dsb_comment_checks() from public,anon,authenticated;
-- Moderation uses the Supabase dashboard or a verified server/admin role.
-- Browser users receive no UPDATE grant and cannot approve their own comments.
commit;
-- Seed dsb_blog_posts from the current article IDs before enabling the client.
