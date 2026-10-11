# DSB blog community activation

The current account has a free organization named ie with active Basketball Brilliance and Cannabis Basics projects. No DSB project was found. Existing projects were not modified. The cost-discovery tool was unavailable, so no new project or paid service was created.

## Delivered now

Full article/section reading pages with the actual shared header and footer; slim branded reading controls; a distinct magazine page that truthfully labels the publication in development; free private comment drafts, brown-tone reactions and original animated text reactions. Drafts stay on the current browser and are not email accounts or public comments.

## Prepared, not activated

assets/dsb-community-config.js keeps shared posting disabled and contains no project URL or key. assets/dsb-community.js contains the conditional email-link, approved-comment, reply, delete, report and reaction interface. It loads a version-pinned Supabase client only when explicitly enabled. backend/dsb-community-setup.sql and dsb-community-posts.sql are setup drafts, not applied migrations. They must be reviewed and tested on the selected project before activation.

## Required before public launch

1. Select a dedicated DSB project or explicitly decide on isolated shared infrastructure. Confirm actual hosting cost before creation; no paid upgrade is authorized.
2. Apply and test the DSB tables and current article IDs. Require confirmed email accounts; disable anonymous auth for public participation.
3. Configure the site's permitted Auth redirect URL and email delivery. Supabase's default mail service is restricted; public email participation needs a properly configured sender. Do not promise unlimited free mail.
4. Verify that anonymous users read only approved comments; signed-in users can read their own pending comments; one user cannot delete another's comment or change approval status; replies stay within the same article; reports do not expose private data; rate limits reject excess posting. Run Supabase advisors on the actual project.
5. Configure only the public project URL and publishable key. Never commit service-role credentials or SMTP/Stripe secrets. Enable shared mode only after real email, moderation and cross-user checks pass.
6. Review comments in the project dashboard until an authorized moderation interface is implemented. New submissions remain pending. Public comments are free; paid membership is never required for normal discussion.

The animated reactions are original CSS text stickers, not licensed external GIFs. A third-party GIF search bank is not connected. No public comments, emails, payments, RLS execution or moderation approvals were tested because no DSB project is connected.
