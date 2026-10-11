/* Full content pages retain the site's actual shared header and footer. */
(() => {
 'use strict';
 const page=document.getElementById('routeLayer'),content=document.getElementById('routeContent'),footer=document.querySelector('body>footer');
 const oldOpen=openRoute,oldClose=closeRoute;
 let dock=null,root=null,paragraphs=[],current=0,generation=0,active=false,paused=false,follow=true,rate=1,voiceURI='',size='small';
 const synth=window.speechSynthesis;
 try{size=localStorage.getItem('dsb-reading-size')||'small';rate=Number(localStorage.getItem('dsb-reading-rate'))||1;}catch{}
 if(!['small','medium','large'].includes(size))size='small';
 if(![.75,1,1.25,1.5,1.75].includes(rate))rate=1;
 const escape=lbEsc;
 function stop(){generation++;active=false;paused=false;synth?.cancel();paragraphs.forEach(p=>p.classList.remove('dsb-speaking'));if(dock){dock.querySelector('[data-reading-pause]').disabled=true;dock.querySelector('[data-reading-pause]').textContent='Ⅱ';dock.querySelector('[data-reading-status]').textContent='Ready';}}
 window.dsbReaderStop=stop;
 function destroy(){stop();dock?.remove();dock=null;root=null;paragraphs=[];}
 function position(){if(!dock)return;if(document.querySelector('#modal.open,#lbModal.open,#musicPanel.open,dialog[open]')){dock.hidden=true;return;}const overlap=Math.max(0,innerHeight-footer.getBoundingClientRect().top);dock.style.bottom=overlap+'px';dock.hidden=overlap>innerHeight-60;}
 function fullPage(){document.body.classList.add('dsb-page-mode');footer.before(page);page.setAttribute('role','region');page.removeAttribute('aria-modal');document.body.style.overflow='';page.scrollTop=0;content.scrollTop=0;window.scrollTo({top:0,behavior:'instant'});content.querySelectorAll(':scope > .dsb-page-back').forEach(e=>e.remove());const a=document.createElement('a');a.className='dsb-page-back';a.href='#top';a.textContent='← Home';content.prepend(a);}
 function speak(index){
  if(!synth||index>=paragraphs.length){stop();return;}
  current=index;paragraphs.forEach(p=>p.classList.remove('dsb-speaking'));const p=paragraphs[index];p.classList.add('dsb-speaking');
  if(follow)p.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  const token=generation,u=new SpeechSynthesisUtterance(p.textContent);u.rate=rate;
  const v=synth.getVoices().find(v=>v.voiceURI===voiceURI);if(v)u.voice=v;
  u.onstart=()=>{if(token!==generation)return;dock.querySelector('[data-reading-status]').textContent=`Reading ${index+1}/${paragraphs.length}`;};
  u.onend=()=>{if(token===generation&&active)speak(index+1)};
  u.onerror=e=>{if(token!==generation)return;stop();if(e.error!=='canceled'&&e.error!=='interrupted')dock.querySelector('[data-reading-status]').textContent='Voice unavailable in this browser';};
  dock.querySelector('[data-reading-status]').textContent=`Starting ${index+1}/${paragraphs.length}`;synth.speak(u);
 }
 function start(index=0){stop();active=true;dock.querySelector('[data-reading-pause]').disabled=false;speak(index);}
 function voices(){if(!dock)return;const select=dock.querySelector('[data-reading-voice]');select.replaceChildren(new Option('Browser default',''));synth?.getVoices().forEach(v=>select.append(new Option(`${v.name} · ${v.lang}`,v.voiceURI)));select.value=voiceURI;}
 function installReading(el){
  destroy();root=el;root.dataset.textSize=size;
  paragraphs=[...root.querySelectorAll('p,h4,li')].filter(p=>p.textContent.trim()&&!p.classList.contains('section-kicker')&&!p.closest('.article-tools')&&!(p.tagName==='LI'&&p.querySelector('p')));
  if(!paragraphs.length)return;
  dock=document.createElement('nav');dock.className='dsb-reader-dock';dock.setAttribute('aria-label','Reading controls');
  dock.innerHTML='<div class="dsb-reader-controls"><button data-reading-light aria-label="Toggle reading lights">Lights on</button><button data-reading-size aria-label="Change text size" title="Text size: small, medium, large">Aa</button><button data-reading-top aria-label="Back to top" title="Back to top">↑</button><span class="reader-spacer"></span><button data-reading-start aria-label="Read aloud">▶ Read aloud</button><button data-reading-pause aria-label="Pause reading" title="Pause or resume" disabled>Ⅱ</button><button data-reading-stop aria-label="Stop reading" title="Stop">■</button><button data-reading-settings aria-label="Reading settings" aria-expanded="false" title="Reading settings">⚙</button><span class="dsb-reader-live" data-reading-status role="status" aria-live="polite">Ready</span></div><section class="dsb-reading-settings" aria-label="Reading settings" hidden><h3>Listen at your pace.</h3><label>Voice<select data-reading-voice></select></label><label>Reading speed<select data-reading-speed><option value=".75">Gentle · 0.75×</option><option value="1">Normal · 1×</option><option value="1.25">Brisk · 1.25×</option><option value="1.5">Fast · 1.5×</option><option value="1.75">Faster · 1.75×</option></select></label><label><input type="checkbox" data-reading-follow checked> Follow the reading</label><button data-reading-here>Read from where I am</button><small>Reads article text and highlights the current paragraph. Available voices depend on your browser.</small></section>';
  document.body.append(dock);voices();dock.querySelector('[data-reading-speed]').value=String(rate);
  function lightLabel(){dock.querySelector('[data-reading-light]').textContent=document.body.dataset.theme==='light'?'Lights off':'Lights on';}
  lightLabel();dock.querySelector('[data-reading-light]').onclick=()=>{setTheme(document.body.dataset.theme==='light'?'dark':'light');lightLabel();};
  dock.querySelector('[data-reading-size]').onclick=()=>{size={small:'medium',medium:'large',large:'small'}[size];root.dataset.textSize=size;try{localStorage.setItem('dsb-reading-size',size)}catch{}dock.querySelector('[data-reading-status]').textContent='Text size: '+size;dock.querySelector('[data-reading-size]').setAttribute('aria-label','Text size: '+size+'. Change text size');};
  dock.querySelector('[data-reading-top]').onclick=()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  dock.querySelector('[data-reading-start]').onclick=()=>start();dock.querySelector('[data-reading-stop]').onclick=stop;
  dock.querySelector('[data-reading-pause]').onclick=()=>{if(!active)return;if(paused){synth.resume();paused=false;}else{synth.pause();paused=true;}const b=dock.querySelector('[data-reading-pause]');b.textContent=paused?'▶':'Ⅱ';b.setAttribute('aria-label',paused?'Resume reading':'Pause reading');dock.querySelector('[data-reading-status]').textContent=paused?'Paused':`Reading ${current+1}/${paragraphs.length}`;};
  const settings=dock.querySelector('.dsb-reading-settings'),settingsButton=dock.querySelector('[data-reading-settings]');settingsButton.onclick=()=>{settings.hidden=!settings.hidden;settingsButton.setAttribute('aria-expanded',String(!settings.hidden));if(!settings.hidden)settings.querySelector('select').focus();};
  settings.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();settings.hidden=true;settingsButton.setAttribute('aria-expanded','false');settingsButton.focus();}});
  dock.querySelector('[data-reading-speed]').onchange=e=>{rate=Number(e.target.value);try{localStorage.setItem('dsb-reading-rate',rate)}catch{}if(active)start(current);};
  dock.querySelector('[data-reading-voice]').onchange=e=>{voiceURI=e.target.value;if(active)start(current);};
  dock.querySelector('[data-reading-follow]').onchange=e=>follow=e.target.checked;
  dock.querySelector('[data-reading-here]').onclick=()=>{const i=paragraphs.findIndex(p=>p.getBoundingClientRect().bottom>120);settings.hidden=true;settingsButton.setAttribute('aria-expanded','false');start(Math.max(0,i));};
  if(!synth){dock.querySelectorAll('[data-reading-start],[data-reading-pause],[data-reading-stop],[data-reading-voice],[data-reading-speed],[data-reading-here]').forEach(b=>b.disabled=true);dock.querySelector('[data-reading-status]').textContent='Read aloud unavailable';}
  position();
 }
 document.getElementById('musicToggle').addEventListener('click',stop);for(const el of document.querySelectorAll('#modal,#lbModal,#musicPanel'))new MutationObserver(position).observe(el,{attributes:true,attributeFilter:['class']});synth?.addEventListener('voiceschanged',voices);window.addEventListener('scroll',position,{passive:true});window.addEventListener('resize',position);
 new MutationObserver(()=>{if(dock)dock.querySelector('[data-reading-light]').textContent=document.body.dataset.theme==='light'?'Lights off':'Lights on';}).observe(document.body,{attributes:true,attributeFilter:['data-theme']});
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
  const story=journalPosts.find(p=>p.id===id);if(!story)return;
  destroy();closeModal();oldOpen('journal',false);content.replaceChildren();
  content.removeAttribute('data-reading-content');const article=document.createElement('article');article.className='dsb-article-page';article.innerHTML='<a class="dsb-page-back" href="#/journal">← All articles</a><p class="section-kicker">'+escape(story.cat)+' · FREE ARTICLES & IDEAS</p><h1>'+escape(story.title)+'</h1><p class="dsb-article-meta">'+escape(story.author||'Divine Shades of Brown')+' · '+escape(story.date||'Founding collection')+'</p><p class="dsb-article-deck">'+escape(story.dek)+'</p><div data-reading-content>'+story.body+'</div><div class="article-tools"><button class="save-btn" data-story-save>Save article</button><button data-story-copy>Copy article link</button></div>';
  content.append(article);fullPage();article.querySelector('[data-story-save]').onclick=e=>{toggleSaved(story.id,story.title);e.target.textContent=getSaved().some(s=>s.id===id)?'Saved':'Save article';};
  article.querySelector('[data-story-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast('Article link copied.')}catch{toast('Copy the address from your browser.')}};
  stepUp(article);conversation(article,story);installReading(article.querySelector('[data-reading-content]'));
  if(push)history.pushState({article:id},'',location.pathname+location.search+'#/journal/'+id);const h=article.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true});
 }
 openArticle=id=>article(id);
 openRoute=function(raw,push=true){
  const [name,id]=String(raw).split('/');if(name==='journal'&&id){article(id,push);return;}destroy();content.removeAttribute('data-reading-content');
  if(name==='document'&&legalDocs[id]){
   const doc=legalDocs[id];oldOpen('journal',false);content.removeAttribute('data-reading-content');content.innerHTML='<article class="dsb-article-page"><h1>'+escape(doc.title)+'</h1><div data-reading-content>'+doc.body+'</div></article>';fullPage();installReading(content.querySelector('[data-reading-content]'));if(push)history.pushState({document:id},'',location.pathname+location.search+'#/document/'+id);return;
  }
  if(name==='magazine'){
   oldOpen('journal',false);content.innerHTML='<article class="dsb-article-page"><p class="section-kicker">DSB DIGITAL MAGAZINE</p><h1>A collection worth keeping.</h1><div data-reading-content><p>The DSB digital magazine is a curated publication separate from our free articles and ideas.</p><h4>Magazine collections</h4><p>Belong includes the approved magazine starter collection and archive sampler. Build includes the full archive and standard future digital issues, alongside curated art collections.</p><p>The magazine collection is in development. Published issues and their permitted uses will be identified before delivery.</p><p>Explore our free articles while the magazine takes shape.</p></div><a class="dsb-page-back" href="#/journal">Read free articles</a></article>';fullPage();stepUp(content.querySelector('article'));installReading(content.querySelector('[data-reading-content]'));if(push)history.pushState({route:name},'',location.pathname+location.search+'#/magazine');return;
  }
  oldOpen(raw,push);if(page.classList.contains('open')){fullPage();if(['history','resources','resource-vault'].includes(name)){content.setAttribute('data-reading-content','');installReading(content);}else content.removeAttribute('data-reading-content');}
 };
 closeRoute=function(push=true){destroy();content.removeAttribute('data-reading-content');document.body.classList.remove('dsb-page-mode');oldClose(push);};
 document.getElementById('routeClose').onclick=()=>closeRoute();
 document.addEventListener('click',e=>{const legal=e.target.closest('[data-legal]');if(legal){e.preventDefault();e.stopImmediatePropagation();openRoute('document/'+legal.dataset.legal);return;}const a=e.target.closest('a');if(a?.getAttribute('href')==='#/magazine'){e.preventDefault();openRoute('magazine');}else if(a?.getAttribute('href')==='#top'&&document.body.classList.contains('dsb-page-mode'))closeRoute(false);},true);
 // Replace timed/exit membership advertising with contextual invitations.
 openFounderPopup=()=>{};founderPopup.classList.remove('open');founderPopup.setAttribute('aria-hidden','true');
 const returnStory=new URLSearchParams(location.search).get('community_story');if(returnStory&&window.DSB_COMMUNITY_CONFIG?.enabled)article(returnStory,false);else if(location.hash.startsWith('#/'))openRoute(location.hash.slice(2),false);
})();
