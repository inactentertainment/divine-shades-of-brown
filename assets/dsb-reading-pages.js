/* Full content pages retain the site's actual shared header and footer. */
(() => {
 'use strict';
 const page=document.getElementById('routeLayer'),content=document.getElementById('routeContent'),footer=document.querySelector('body>footer');
 const oldOpen=openRoute,oldClose=closeRoute;
 function destroy(){window.DSBReading?.unmount()}
 function installReading(el,key){window.DSBReading?.mount(el,key||location.pathname+location.hash)}
 function fullPage(){document.body.classList.add('dsb-page-mode');footer.before(page);page.setAttribute('role','region');page.removeAttribute('aria-modal');document.body.style.overflow='';page.scrollTop=0;content.scrollTop=0;window.scrollTo({top:0,behavior:'instant'});content.querySelectorAll(':scope > .dsb-page-back').forEach(e=>e.remove());const a=document.createElement('a');a.className='dsb-page-back';a.href='#top';a.textContent='← Home';content.prepend(a);}
 function stepUp(parent){const aside=document.createElement('aside');aside.className='dsb-step-up';aside.innerHTML='<p>Keep exploring for free. Membership adds curated magazine collections, downloads, and deeper DSB resources.</p><a href="#/membership">Compare membership benefits →</a>';parent.append(aside);}
 function conversation(parent,story){
  const section=document.createElement('section');section.className='dsb-community';section.setAttribute('aria-label','Blog conversation');
  section.innerHTML='<h2>What is your next chapter?</h2><p>Share an idea, ask a question, or leave encouragement.</p><small>Private draft preview: public comments and verified email accounts are not connected yet. Nothing here is posted or shared.</small><div class="community-reactions" role="group" aria-label="Your reaction"><button type="button" data-reaction="👍">Helpful</button><button type="button" data-reaction="👏">Inspired</button><button type="button" data-reaction="🤎">Love this</button></div><label>Your display name<input data-draft-name maxlength="50" autocomplete="nickname" placeholder="What should we call you?"></label><label>Your comment<textarea data-draft-body maxlength="2000" placeholder="Add your thought…"></textarea></label><details><summary>Add a DSB motion reaction</summary><p>Original animated text reactions. No external GIF service needed.</p><button type="button" data-sticker="Well said">Well said</button><button type="button" data-sticker="Keep building">Keep building</button><button type="button" data-sticker="Rooted in greatness">Rooted in greatness</button><button type="button" data-sticker="No animation">No animation</button></details><button type="button" data-draft-save>Save private draft</button><button type="button" data-draft-clear>Clear draft</button><p data-draft-status role="status"></p><div class="draft-preview" hidden></div>';
  parent.append(section);window.dsbMountSharedComments?.(section,story);const key='dsb-blog-draft-'+story.id;let state={name:'',body:'',reaction:'',sticker:'',reply:''};try{Object.assign(state,JSON.parse(localStorage.getItem(key)||'{}'))}catch{}
  const name=section.querySelector('[data-draft-name]'),body=section.querySelector('[data-draft-body]'),preview=section.querySelector('.draft-preview'),status=section.querySelector('[data-draft-status]');name.value=state.name;body.value=state.body;
  function tone(){try{return localStorage.getItem('dsb-emoji-tone')||'🏽'}catch{return '🏽'}}
  function draw(){
   section.querySelectorAll('[data-reaction]').forEach(b=>{const emoji=b.dataset.reaction;b.textContent=(emoji==='🤎'?emoji:emoji+tone())+' '+{ '👍':'Helpful','👏':'Inspired','🤎':'Love this'}[emoji];b.setAttribute('aria-pressed',String(state.reaction===emoji));});
   section.querySelectorAll('[data-sticker]').forEach(b=>b.setAttribute('aria-pressed',String(state.sticker===b.dataset.sticker)));
   preview.replaceChildren();preview.hidden=!state.body&&!state.reaction&&!state.sticker;if(preview.hidden)return;
   const title=document.createElement('strong');title.textContent=(state.name||'Your private draft')+' · Only on this browser';preview.append(title);
   const p=document.createElement('p');p.textContent=state.body;preview.append(p);
   if(state.reaction){const span=document.createElement('span');span.textContent=state.reaction+(state.reaction==='🤎'?'':tone());preview.append(span);}
   if(state.sticker){const span=document.createElement('span');span.className='dsb-sticker';span.textContent=state.sticker;preview.append(span);}
  }
  section.querySelectorAll('[data-reaction]').forEach(b=>b.onclick=()=>{state.reaction=state.reaction===b.dataset.reaction?'':b.dataset.reaction;draw();status.textContent='Reaction preview · Not shared';});
  section.querySelectorAll('[data-sticker]').forEach(b=>b.onclick=()=>{state.sticker=b.dataset.sticker==='No animation'?'':b.dataset.sticker;draw();});
  section.querySelector('[data-draft-save]').onclick=()=>{state.name=name.value.trim();state.body=body.value.trim();try{localStorage.setItem(key,JSON.stringify(state));status.textContent='Private draft saved on this browser. It has not been posted.'}catch{status.textContent='Browser storage unavailable. Copy your draft before leaving.'}draw();};
  section.querySelector('[data-draft-clear]').onclick=()=>{try{localStorage.removeItem(key)}catch{}state={name:'',body:'',reaction:'',sticker:''};name.value='';body.value='';draw();status.textContent='Private draft cleared.'};draw();
 }
 function article(id,push=true){
  const story=journalPosts.find(p=>p.id===id);if(!story){oldOpen('journal',false);fullPage();toast('That article is unavailable. Choose another from the Journal.');history.replaceState({route:'journal'},'',location.pathname+location.search+'#/journal');return;}
  destroy();closeModal();oldOpen('journal',false);content.replaceChildren();
  content.removeAttribute('data-reading-content');const article=document.createElement('article');article.className='dsb-article-page';article.innerHTML='<a class="dsb-page-back" href="#/journal">← All articles</a><p class="section-kicker">'+lbEsc(story.cat)+' · FREE ARTICLES & IDEAS</p><h1>'+lbEsc(story.title)+'</h1><p class="dsb-article-meta">'+lbEsc(story.author||'Divine Shades of Brown')+' · '+lbEsc(story.date||'Founding collection')+'</p><p class="dsb-article-deck">'+lbEsc(story.dek)+'</p><div data-reading-content>'+story.body+'</div><div class="article-tools"><button class="save-btn" data-story-save>Save article</button><button data-story-copy>Copy article link</button></div>';
  content.append(article);fullPage();article.querySelector('[data-story-save]').onclick=e=>{toggleSaved(story.id,story.title);e.target.textContent=getSaved().some(s=>s.id===id)?'Saved':'Save article';};
  article.querySelector('[data-story-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast('Article link copied.')}catch{toast('Copy the address from your browser.')}};
  stepUp(article);conversation(article,story);
  if(push)history.pushState({article:id},'',location.pathname+location.search+'#/journal/'+id);else history.replaceState({article:id},'',location.pathname+location.search+'#/journal/'+id);installReading(article.querySelector('[data-reading-content]'));const h=article.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true});
 }
 openArticle=id=>article(id);
 openRoute=function(raw,push=true){
  const [name,id]=String(raw).split('/');if(name==='journal'&&id){article(id,push);return;}destroy();content.removeAttribute('data-reading-content');
  if(name==='document'&&legalDocs[id]){
   const doc=legalDocs[id];oldOpen('journal',false);content.removeAttribute('data-reading-content');content.innerHTML='<article class="dsb-article-page"><h1>'+lbEsc(doc.title)+'</h1><div data-reading-content>'+doc.body+'</div></article>';fullPage();installReading(content.querySelector('[data-reading-content]'),'document/'+id);if(push)history.pushState({document:id},'',location.pathname+location.search+'#/document/'+id);return;
  }
  if(name==='magazine'){
   oldOpen('journal',false);content.innerHTML='<article class="dsb-article-page"><p class="section-kicker">DSB DIGITAL MAGAZINE</p><h1>A collection worth keeping.</h1><div data-reading-content><p>The DSB digital magazine is a curated publication separate from our free articles and ideas.</p><h4>Magazine collections</h4><p>Belong includes the approved magazine starter collection and archive sampler. Build includes the full archive and standard future digital issues, alongside curated art collections.</p><p>The magazine collection is in development. Published issues and their permitted uses will be identified before delivery.</p><p>Explore our free articles while the magazine takes shape.</p></div><a class="dsb-page-back" href="#/journal">Read free articles</a></article>';fullPage();stepUp(content.querySelector('article'));if(push)history.pushState({route:name},'',location.pathname+location.search+'#/magazine');return;
  }
  oldOpen(raw,push);if(page.classList.contains('open')){fullPage();if(['history','resources','resource-vault'].includes(name)){content.setAttribute('data-reading-content','');installReading(content,name);}else content.removeAttribute('data-reading-content');}
 };
 closeRoute=function(push=true){destroy();content.removeAttribute('data-reading-content');document.body.classList.remove('dsb-page-mode');oldClose(push);};
 document.getElementById('routeClose').onclick=()=>closeRoute();
 document.addEventListener('click',e=>{const legal=e.target.closest('[data-legal]');if(legal){e.preventDefault();e.stopImmediatePropagation();openRoute('document/'+legal.dataset.legal);return;}const a=e.target.closest('a');if(a?.getAttribute('href')==='#/magazine'){e.preventDefault();openRoute('magazine');}else if(a?.getAttribute('href')==='#top'&&document.body.classList.contains('dsb-page-mode'))closeRoute(false);},true);
 // Replace timed/exit membership advertising with contextual invitations.
 openFounderPopup=()=>{};founderPopup.classList.remove('open');founderPopup.setAttribute('aria-hidden','true');
 const returnStory=new URLSearchParams(location.search).get('community_story');if(returnStory&&window.DSB_COMMUNITY_CONFIG?.enabled)article(returnStory,false);else if(location.hash.startsWith('#/'))openRoute(location.hash.slice(2),false);
})();


