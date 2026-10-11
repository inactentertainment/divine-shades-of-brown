/* Shared posting is fail-closed until a DSB project has been selected and verified. */
(() => {
 'use strict';
 let clientPromise;
 const tones=new Set(['🏻','🏼','🏽','🏾','🏿']);
 async function client(){
  const c=window.DSB_COMMUNITY_CONFIG;
  if(!c?.enabled||!/^https:\/\/[a-z0-9]+\.supabase\.co$/.test(c.url)||!c.publishableKey)return null;
  clientPromise??=import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm').then(({createClient})=>createClient(c.url,c.publishableKey,{auth:{flowType:'pkce',persistSession:true,autoRefreshToken:true}}));
  return clientPromise;
 }
 window.dsbMountSharedComments=async(section,story)=>{
  if(!window.DSB_COMMUNITY_CONFIG?.enabled)return;
  const note=section.querySelector('small'),status=section.querySelector('[data-draft-status]'),name=section.querySelector('[data-draft-name]'),body=section.querySelector('[data-draft-body]');
  let sb,user=null,parent=null;
  try{sb=await client();if(!sb)throw Error('Community configuration incomplete');}catch{note.textContent='Shared comments are unavailable. You can still keep a private draft.';return;}
  note.textContent='Free verified-email participation. New comments and replies are reviewed before publication. Your email is never displayed.';
  const auth=document.createElement('form');auth.innerHTML='<label>Email<input type="email" autocomplete="email" required></label><button type="submit">Email me a sign-in link</button><button type="button" data-signout hidden>Sign out</button>';section.querySelector('.community-reactions').before(auth);
  const submit=document.createElement('button');submit.type='button';submit.textContent='Submit comment for review';submit.disabled=true;section.querySelector('[data-draft-save]').after(submit);
  const list=document.createElement('div');list.className='community-comments';section.append(list);
  function element(tag,value,parentEl){const el=document.createElement(tag);el.textContent=value;parentEl.append(el);return el;}
  async function session(){const r=await sb.auth.getUser();user=r.data.user;if(user&&!user.email_confirmed_at)user=null;submit.disabled=!user;auth.querySelector('[data-signout]').hidden=!user;}
  async function draw(){
   const r=await sb.from('dsb_blog_comments').select('id,post_id,parent_id,user_id,display_name,body,tone,sticker,status,created_at').eq('post_id',story.id).order('created_at',{ascending:true}).limit(100);
   if(r.error){status.textContent='Comments could not load. Your private draft is still available.';return;}
   list.replaceChildren();element('h3','Conversation',list);if(!r.data.length)element('p','No published comments yet. Add a thoughtful first contribution.',list);
   for(const row of r.data){const card=document.createElement('article');card.className='draft-preview';list.append(card);element('strong',row.display_name+(row.status==='pending'?' · Awaiting review':''),card);if(row.parent_id)element('small','Reply to an earlier comment',card);element('p',row.body,card);if(row.sticker){const s=element('span',row.sticker,card);s.className='dsb-sticker';}
    if(user&&row.status==='approved'){const reply=element('button','Reply',card);reply.type='button';reply.onclick=()=>{parent=row.id;status.textContent='Replying to '+row.display_name;body.focus();};const report=element('button','Report',card);report.type='button';report.onclick=async()=>{const reason=prompt('Briefly explain what should be reviewed.');if(!reason?.trim())return;const r=await sb.from('dsb_blog_reports').insert({comment_id:row.id,user_id:user.id,reason:reason.trim().slice(0,500)});status.textContent=r.error?'Report could not be submitted.':'Report sent for review.';};}
    if(user&&row.user_id===user.id){const remove=element('button','Delete my comment',card);remove.type='button';remove.onclick=async()=>{const r=await sb.from('dsb_blog_comments').delete().eq('id',row.id);status.textContent=r.error?'Comment could not be deleted.':'Comment removed.';await draw();};}
   }
  }
  auth.onsubmit=async e=>{e.preventDefault();const b=auth.querySelector('[type=submit]');b.disabled=true;const redirect=new URL(location.href);redirect.hash='';redirect.searchParams.set('community_story',story.id);const r=await sb.auth.signInWithOtp({email:auth.querySelector('[type=email]').value.trim(),options:{emailRedirectTo:redirect.href}});status.textContent=r.error?r.error.message:'Check your email for the sign-in link. Keep this browser available.';setTimeout(()=>b.disabled=false,60000);};
  auth.querySelector('[data-signout]').onclick=async()=>{await sb.auth.signOut();user=null;submit.disabled=true;status.textContent='Signed out.';await session();await draw();};
  submit.onclick=async()=>{await session();if(!user)return;const value=body.value.trim(),display=name.value.trim();if(!value||!display){status.textContent='Add a display name and your comment.';return;}submit.disabled=true;const tone=document.getElementById('dsbEmojiTone').value;const sticker=section.querySelector('[data-sticker][aria-pressed=true]')?.dataset.sticker||'';const r=await sb.from('dsb_blog_comments').insert({post_id:story.id,parent_id:parent,user_id:user.id,display_name:display,body:value,tone:tones.has(tone)?tone:'🏽',sticker:sticker==='No animation'?'':sticker,status:'pending'});status.textContent=r.error?'Comment could not be submitted. Your draft remains here.':'Submitted for review. Your comment will appear publicly after approval.';if(!r.error){body.value='';parent=null;}submit.disabled=!user;await draw();};
  section.querySelectorAll('[data-reaction]').forEach(b=>b.addEventListener('click',async()=>{await session();if(!user){status.textContent='Sign in with your verified email to share a reaction.';return;}const reaction=b.dataset.reaction;const on=b.getAttribute('aria-pressed')==='true';let r;if(on)r=await sb.from('dsb_blog_reactions').upsert({post_id:story.id,user_id:user.id,reaction,tone:document.getElementById('dsbEmojiTone').value},{onConflict:'post_id,user_id'});else r=await sb.from('dsb_blog_reactions').delete().eq('post_id',story.id).eq('user_id',user.id);status.textContent=r.error?'Reaction could not be saved.':'Your reaction was saved.';}));
  await session();await draw();
 };
})();
