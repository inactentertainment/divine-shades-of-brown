/* DSB destinations: preserve existing live sections, events, and personal data. */
(() => {
  'use strict';
  const baseOpen = openRoute, baseClose = closeRoute;
  const sections = {'dsb-select':['dsb-select'],essentials:['essentials'],history:['history'],travel:['beyond-horizon','travel','unexpected-america'],resources:['resources','resource-vault'],'resource-vault':['resource-vault'],shop:['shop'],membership:['membership','member-value'],'unexpected-america':['unexpected-america']};
  const labels = {'dsb-select':'DSB SELECT',essentials:'BLACK LIFE ESSENTIALS',history:'HISTORY',travel:'TRAVEL',resources:'RESOURCES & VAULT','resource-vault':'RESOURCE VAULT',shop:'SHOP',membership:'MEMBERSHIP','unexpected-america':'UNEXPECTED AMERICA'};
  const supported = new Set(['atlas','opportunities','pulse','journal','help','dashboard',...Object.keys(sections),'lifebook','calendar']);
  let parked = [], originScroll=0, active='';
  const menu = document.getElementById('mobileMenu');
  function hideMenu(){ menu.classList.remove('open');menu.setAttribute('aria-hidden','true');document.getElementById('menuBtn').setAttribute('aria-expanded','false'); }
  function restore(){for(const [node,marker] of parked){marker.replaceWith(node);}parked=[];}
  function hideBook(){lbModal.classList.remove('open');lbModal.setAttribute('aria-hidden','true');}
  function activate(name,push){active=name;routeLayer.scrollTop=0;routeContent.scrollTop=0;if(push)history.pushState({route:name},'',location.pathname+location.search+'#/'+name);}
  function show(){routeLayer.classList.add('open');routeLayer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  function headingFocus(){const h=routeContent.querySelector('h2,h3');if(h){h.tabIndex=-1;h.focus({preventScroll:true});}}
  openRoute = function(raw,push=true){
    const [name,article]=String(raw).split('/');
    if(name==='membership'){if(document.getElementById('musicPanel')?.classList.contains('open'))document.getElementById('musicClose')?.click();const popup=document.getElementById('founderPopup');popup?.classList.remove('open');popup?.setAttribute('aria-hidden','true');}
    if(name==='entertainment'){location.href='entertainment.html';return;}
    if(!supported.has(name))return;
    if(!active)originScroll=window.scrollY;
    hideMenu();hideBook();restore();closeArticle();memberHub.classList.remove('open');memberHub.setAttribute('aria-hidden','true');
    if(name==='lifebook'||name==='calendar'){
      baseClose(false);lbModal.classList.add('open');lbModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';lbRenderAll();lbGo(name==='calendar'?'calendar':'home');activate(name,push);document.getElementById('lifeBookClose').focus();return;
    }
    if(sections[name]){
      routeContent.replaceChildren();routeLabel.textContent=labels[name];
      for(const id of sections[name]){const node=document.getElementById(id);if(!node)continue;const marker=document.createComment('DSB destination '+id);node.before(marker);parked.push([node,marker]);routeContent.append(node);node.classList.add('visible');}
      show();activate(name,push);headingFocus();return;
    }
    if(name==='journal'){renderBlog();show();activate(name,push);headingFocus();if(article)openArticle(article);return;}
    baseOpen(name,false);activate(name,push);
    if(name==='dashboard'){
      const nav=document.createElement('div');nav.className='route-tools';nav.innerHTML='<a class="shine-btn" href="#/lifebook">LifeBook & personal journal →</a><a class="shine-btn" href="#/calendar">My calendar →</a><a class="text-link" href="#/journal">Browse articles →</a>';
      routeContent.querySelector('.dashboard-grid')?.before(nav);
      routeContent.querySelectorAll('[data-remove-save]').forEach(b=>{const row=b.closest('.dash-row'),saved=getSaved().find(x=>x.id===b.dataset.removeSave);if(saved&&journalPosts.some(x=>x.id===saved.id)){const a=document.createElement('a');a.href='#/journal/'+saved.id;a.textContent=saved.label;row.querySelector('span').replaceWith(a);}});
    }
    headingFocus();
  };
  closeRoute = function(push=true){restore();hideBook();baseClose(push);active='';window.scrollTo({top:originScroll,behavior:'instant'});};
  document.getElementById('lifeBookClose').onclick=()=>closeRoute();
  function renderBlog(){
    routeLabel.textContent='DSB JOURNAL';
    routeContent.innerHTML=routeHero('OUR NEXT CHAPTER','Our lives. Our ideas. <em>Our next chapter.</em>','Clear articles about the issues that shape Black life today and tomorrow. Learn from Black voices, explore the sources, and choose one useful next step.')+'<div class="blog-tools"><label>Search articles<input type="search" id="dsbBlogSearch" placeholder="Try business, family, AI, or rest"></label><label>Topic<select id="dsbBlogCategory"><option value="">All topics</option>'+[...new Set(journalPosts.map(x=>x.cat))].sort().map(c=>'<option>'+lbEsc(c)+'</option>').join('')+'</select></label><label>Order<select id="dsbBlogOrder"><option value="new">Newest first</option><option value="title">Title A–Z</option></select></label><label class="blog-saved"><input type="checkbox" id="dsbBlogSaved"> Saved articles only</label></div><p id="dsbBlogCount" role="status" aria-live="polite"></p><div class="route-grid" id="dsbBlogGrid"></div>';
    const draw=()=>{
      const q=document.getElementById('dsbBlogSearch').value.trim().toLowerCase(),cat=document.getElementById('dsbBlogCategory').value,savedOnly=document.getElementById('dsbBlogSaved').checked,ids=new Set(getSaved().map(x=>x.id));
      let list=journalPosts.filter(x=>(!cat||x.cat===cat)&&(!savedOnly||ids.has(x.id))&&[x.title,x.dek,x.cat,x.body.replace(/<[^>]*>/g,' ')].join(' ').toLowerCase().includes(q));
      if(document.getElementById('dsbBlogOrder').value==='title')list=list.slice().sort((a,b)=>a.title.localeCompare(b.title));
      document.getElementById('dsbBlogCount').textContent=list.length+' article'+(list.length===1?'':'s')+' · '+window.DSB_JOURNAL.length+' in Our Next Chapter';
      document.getElementById('dsbBlogGrid').innerHTML=list.length?list.map(x=>routeCard(lbEsc(x.title),lbEsc(x.cat.toUpperCase()),lbEsc(x.dek),'<a class="text-link" href="#/journal/'+x.id+'">READ ARTICLE →</a><button class="save-btn '+(ids.has(x.id)?'saved':'')+'" data-blog-save="'+x.id+'">'+(ids.has(x.id)?'SAVED':'SAVE')+'</button>')).join(''):'<p class="blog-empty">No articles match yet. Try another topic or clear your search.</p>';
      routeContent.querySelectorAll('[data-blog-save]').forEach(b=>b.onclick=()=>{const x=journalPosts.find(x=>x.id===b.dataset.blogSave);toggleSaved(x.id,x.title);draw();});
    };
    ['dsbBlogSearch','dsbBlogCategory','dsbBlogOrder','dsbBlogSaved'].forEach(id=>document.getElementById(id).addEventListener('input',draw));draw();
  }
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-travel-route],[data-travel-explore]'))return;
    const el=e.target.closest('a,[data-route],[data-scroll],.action-card,[data-commerce-target],[data-go]');if(!el)return;
    let raw=el.dataset.route||el.dataset.scroll||el.dataset.target||el.dataset.commerceTarget||el.dataset.go||el.getAttribute('href');
    if(!raw||!raw.startsWith('#')&&!el.dataset.route)return;
    raw=raw.replace(/^#\/?/,'');const [name,article]=raw.split('/');if(!supported.has(name)&&name!=='entertainment')return;
    e.preventDefault();e.stopImmediatePropagation();suggestions.classList.remove('show');
    if(name==='journal'&&article&&active==='journal'){openArticle(article);history.pushState({article},'',location.pathname+location.search+'#/journal/'+article);return;}
    openRoute(raw);
  },true);
  const closeArticle=closeModal;
  closeModal=function(){closeArticle();if(location.hash.startsWith('#/journal/'))history.replaceState({route:'journal'},'',location.pathname+location.search+'#/journal');};
  document.getElementById('modalClose').onclick=()=>closeModal();
  searchIndex.push(['My calendar','LifeBook dates, events and milestones','#calendar'],['My DSB','Saved businesses and articles, Black Receipt','#dashboard'],['Personal journal','LifeBook reflection entries and family stories','#lifebook']);
  const tone=document.getElementById('dsbEmojiTone'),key='dsb-emoji-tone';
  const tones=new Set(['🏻','🏼','🏽','🏾','🏿']);
  let choice='🏽';try{choice=localStorage.getItem(key)||'🏽';}catch{}if(!tones.has(choice))choice='🏽';tone.value=choice;try{localStorage.setItem(key,choice);}catch{}
  function applyTone(){document.querySelectorAll('[data-dsb-person-emoji]').forEach(el=>{el.textContent=el.dataset.dsbPersonEmoji+choice;});}
  tone.onchange=()=>{choice=tone.value;try{localStorage.setItem(key,choice);}catch{}applyTone();};applyTone();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')&&!document.getElementById('dsbTravelDialog')?.open){e.preventDefault();e.stopImmediatePropagation();closeModal();}},true);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.classList.contains('open')&&(routeLayer.classList.contains('open')||lbModal.classList.contains('open'))&&!menu.classList.contains('open'))closeRoute();});
  if(location.hash.startsWith('#/'))openRoute(location.hash.slice(2),false);
})();
