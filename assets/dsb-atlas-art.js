const DSB_ATLAS_RECORDED_PICKS=[
 {name:'Village Books',cat:'Books',city:'Atlanta, GA',rating:5.0,reviews:581,url:'https://thevillagebooks.shop/',why:'Exceptional public rating with substantial review volume, plus a strong community-centered bookstore identity.'},
 {name:'Call & Response Books',cat:'Books',city:'Chicago, IL',rating:4.9,reviews:107,url:'https://www.callandresponsechi.com/',why:'Black woman-owned neighborhood bookstore with consistently strong feedback for selection, atmosphere and service.'},
 {name:'Sister’s Uptown Bookstore',cat:'Books',city:'New York, NY',rating:4.9,reviews:35,url:'https://www.sistersuptownbookstore.com/',why:'Long-running family-operated Black bookstore and cultural center with a deep Harlem community role.'},
 {name:'Reparations Club',cat:'Books',city:'Los Angeles, CA',rating:4.9,reviews:84,url:'https://reparations.club/',why:'Black-owned, woman-owned concept bookshop and creative space with strong feedback for curation and welcome.'},
 {name:'Kindred Stories',cat:'Books',city:'Houston, TX',rating:4.5,reviews:45,url:'https://kindredstorieshtx.com/',why:'Black-owned Third Ward bookstore that centers Black authors, community events and thoughtful literary curation.'},
 {name:'Jaliyaa Coffee',cat:'Coffee',city:'Washington, DC',rating:4.9,reviews:22,url:'https://www.jaliyaacoffee.com/',why:'Highly rated Black-owned coffee and catering company connecting African heritage, hospitality and community storytelling.'},
 {name:'South LA Cafe',cat:'Coffee',city:'Los Angeles, CA',rating:4.7,reviews:441,url:'https://www.southlacafe.com/',why:'Strong review history plus a clear neighborhood mission built around coffee, food access and community connection.'},
 {name:'The SoulFood Lounge',cat:'Food',city:'Chicago, IL',rating:4.6,reviews:460,url:'https://thesoulfoodlounge.com/',why:'Substantial review volume and repeated praise for food, service and a distinctive global-soul-food experience.'},
 {name:'ChòpnBlọk',cat:'Food',city:'Houston, TX',rating:4.5,reviews:457,url:'https://chopnblok.co/',why:'Large review base and a polished West African food concept connecting Houston with contemporary African culinary culture.'},
 {name:'Afro-Centric Network',cat:'Retail',city:'Atlanta, GA',rating:4.5,reviews:58,url:'https://iamafrocentric.com/',why:'Long-running Black-owned cultural retailer with African-centered fashion, art, beauty and educational value.'},
 {name:'OnGrounds Art Gallery',cat:'Arts',city:'Houston, TX',rating:5.0,reviews:41,url:'https://ongroundsartgallery.com/',why:'Perfect public rating snapshot with consistent praise for original art, reception and gallery experience.'},
 {name:'Solid State Books',cat:'Books',city:'Washington, DC',rating:4.7,reviews:81,url:'https://www.solidstatebooksdc.com/',why:'Black-owned independent bookstore with strong customer feedback and active literary/community programming.'}
];
/* Image-space coordinates are editorial approximations for the painted geography. */
(() => {
 'use strict';
 const map=document.getElementById('atlasMap'); if(!map)return;
 const cities=[
 ['New York','United States',34.9,42.8,0],['Washington, DC','United States',33.7,44.6,2],['Baltimore','United States',34,44.1,3],['Philadelphia','United States',34.6,43.6,3],['Boston','United States',35.6,41.5,3],['Toronto','Canada',33.4,40.1,2],['Montreal','Canada',35.2,38.8,3],['Chicago','United States',30.3,41.7,1],['Detroit','United States',31.8,41.4,3],['Atlanta','United States',31,46.8,2],['Charlotte','United States',32.5,46.4,3],['Miami','United States',32.9,52.4,1],['New Orleans','United States',29.4,49.7,3],['Houston','United States',27.7,50.3,2],['Dallas','United States',27.5,47.2,3],['Memphis','United States',29.9,45.5,3],['Denver','United States',25.3,42.9,2],['Los Angeles','United States',22.3,45.4,0],['Oakland','United States',21.2,42.3,3],['San Francisco','United States',20.9,42.8,2],['Seattle','United States',21.8,35.8,2],['Vancouver','Canada',21.5,33.9,3],['Mexico City','Mexico',27.3,54.2,2],['Havana','Cuba',32.8,55.2,2],['Kingston','Jamaica',34.3,57,1],['Santo Domingo','Dominican Republic',36.4,56.8,3],['San Juan','Puerto Rico',38,56.7,3],['Bridgetown','Barbados',39.7,60,3],['Port of Spain','Trinidad and Tobago',39.2,62,3],['Bogotá','Colombia',32.1,64,2],['Lima','Peru',32.1,74.3,2],['Salvador','Brazil',40.1,72.5,0],['Rio de Janeiro','Brazil',39,80.5,2],['São Paulo','Brazil',38.1,81.3,3],['Buenos Aires','Argentina',36.1,87.2,2],['Santiago','Chile',32.7,87,3],
 ['London','United Kingdom',42.2,35.3,0],['Paris','France',43.1,39.4,2],['Amsterdam','Netherlands',44.7,36.7,3],['Berlin','Germany',46.5,36.8,2],['Lisbon','Portugal',41.3,45.2,3],['Madrid','Spain',42.7,44.2,2],['Rome','Italy',46.1,43.6,2],['Stockholm','Sweden',47,30.4,3],['Reykjavík','Iceland',41.9,24.9,2],['Istanbul','Türkiye',51.3,43.6,2],['Marrakech','Morocco',44.1,52.4,1],['Dakar','Senegal',41.9,61.5,2],['Accra','Ghana',47,62.5,0],['Lagos','Nigeria',50.7,62.1,1],['Abidjan','Côte d’Ivoire',45.9,63.5,3],['Cairo','Egypt',51.6,51.2,2],['Addis Ababa','Ethiopia',56.2,61.7,2],['Nairobi','Kenya',56.4,66.2,1],['Kigali','Rwanda',53.8,67.3,3],['Kampala','Uganda',54.9,65.8,3],['Dar es Salaam','Tanzania',56.3,70.2,2],['Kinshasa','DR Congo',49.8,68.5,2],['Luanda','Angola',48,72.7,3],['Johannesburg','South Africa',52.2,78.8,2],['Cape Town','South Africa',50.3,81.3,0],
 ['Dubai','United Arab Emirates',61.3,53.6,2],['Mumbai','India',64.9,55.7,2],['Delhi','India',66.3,50.7,3],['Bangkok','Thailand',72.7,59.7,2],['Singapore','Singapore',73.6,66.4,2],['Jakarta','Indonesia',75.6,69.1,3],['Bali','Indonesia',79,70.4,1],['Manila','Philippines',79.4,59.2,3],['Hong Kong','China',77.5,53.4,2],['Beijing','China',76.6,39.3,2],['Seoul','South Korea',80.4,41.9,3],['Tokyo','Japan',82.4,44.6,0],['Ulaanbaatar','Mongolia',71.5,36.5,3],['Sydney','Australia',83.6,82.7,0],['Melbourne','Australia',80.8,85.6,3],['Auckland','New Zealand',87.6,85.1,2],['Perth','Australia',74.9,80.9,3]
,
 ['Kumasi','Ghana',46.8,61.2,3],['Gaborone','Botswana',51.3,77.5,3],['Lusaka','Zambia',52.0,73.2,3],['Harare','Zimbabwe',53.2,75.3,3],['Maputo','Mozambique',54.3,79.3,3],['Windhoek','Namibia',49.6,77.8,3],['Port Louis','Mauritius',59.0,78.2,3],['Freetown','Sierra Leone',43.5,62.5,3],['Charleston','United States',32.6,47.9,3],['Waldorf','United States',33.7,45.0,3],['Nassau','Bahamas',34.2,53.9,3],['Port-au-Prince','Haiti',35.4,56.8,3]
 ].map(([name,country,x,y,tier])=>({name,country,x,y,tier}));
 const viewport=map.querySelector('.atlas-art-viewport'),plane=map.querySelector('.atlas-art-plane'),layer=map.querySelector('.atlas-city-layer'),status=map.querySelector('.atlas-map-status'),select=map.querySelector('.atlas-city-select'),selection=map.querySelector('.atlas-city-selection');
 const picks=DSB_ATLAS_RECORDED_PICKS;
 let previousOverflow='',returnFocus=null;
 const toolbar=map.querySelector('.atlas-art-toolbar'),zoomLabel=document.createElement('label'),zoomControl=document.createElement('input'),zoomValue=document.createElement('output'),centerButton=document.createElement('button');
 zoomLabel.className='atlas-zoom-control';zoomLabel.append(document.createTextNode('Zoom '));zoomControl.type='range';zoomControl.min='100';zoomControl.max='900';zoomControl.step='25';zoomControl.value='100';zoomControl.setAttribute('aria-label','Zoom the illustrated map');zoomLabel.append(zoomControl,zoomValue);toolbar.append(zoomLabel);
 centerButton.type='button';centerButton.textContent='Center selected city';centerButton.disabled=true;toolbar.append(centerButton);
 map.querySelector('.atlas-art-caption').append(Object.assign(document.createElement('p'),{textContent:'Illustrated view · City positions are approximate. Zoom enlarges the painting; it does not reveal live imagery.'}));
 let scale=1,fit=1,tx=0,ty=0,selected=null,gesture=null,moved=false,expanded=false;
 const pointers=new Map(),buttons=new Map();
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function layout(){
  const w=viewport.clientWidth,h=viewport.clientHeight;if(w<=0||h<=0||!Number.isFinite(scale)||fit<=0)return;const W=1536*scale,H=865*scale;
  tx=W<w?(w-W)/2:clamp(tx,w-W,0); ty=H<h?(h-H)/2:clamp(ty,h-H,0);
  plane.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
  const tier=scale/fit>=5?3:scale/fit>=3?2:scale/fit>=1.7?1:0,occupied=[];let visible=0;
  const ordered=cities.slice().sort((a,b)=>(b.name===selected)-(a.name===selected)||a.tier-b.tier);
  for(const c of ordered){
   const b=buttons.get(c.name),x=tx+c.x/100*W,y=ty+c.y/100*H,bw=Math.max(50,c.name.length*7+24),bh=44;
   const r={l:x-bw/2,t:y-bh/2,r:x+bw/2,b:y+bh/2};
   const overlaps=occupied.some(o=>!(r.r+3<o.l||r.l-3>o.r||r.b+2<o.t||r.t-2>o.b));
   const show=(c.tier<=tier||c.name===selected)&&x>12&&x<w-12&&y>15&&y<h-15&&(!overlaps||c.name===selected);
   b.hidden=!show;b.tabIndex=show?0:-1;b.style.left=x+'px';b.style.top=y+'px';b.setAttribute('aria-pressed',String(c.name===selected));
   if(show){occupied.push(r);visible++;}
  }
  zoomControl.value=String(Math.round(scale/fit*100));zoomValue.value=Math.round(scale/fit*100)+'%';zoomValue.textContent=zoomValue.value;zoomControl.setAttribute('aria-valuetext',zoomValue.value+' of the world view');centerButton.disabled=!selected;
  status.textContent=`${Math.round(scale/fit*100)}% · ${visible} city labels · ${cities.length} cities available`;
 }
 function reset(){const nextFit=Math.min(viewport.clientWidth/1536,viewport.clientHeight/865);if(nextFit<=0)return;fit=nextFit;scale=fit;tx=0;ty=0;layout();}
 zoomControl.addEventListener('input',()=>zoom(fit*Number(zoomControl.value)/100));centerButton.onclick=()=>{const c=cities.find(c=>c.name===selected);if(c)choose(c,true)};
 function zoom(next,x=viewport.clientWidth/2,y=viewport.clientHeight/2){next=clamp(next,fit,fit*9);const f=next/scale;tx=x-(x-tx)*f;ty=y-(y-ty)*f;scale=next;layout();}
 function text(tag,value,parent){const el=document.createElement(tag);el.textContent=value;parent.append(el);return el;}
 function choose(c,center=false){
  selected=c.name;select.value=c.name;
  if(center){scale=Math.max(scale,fit*3);tx=viewport.clientWidth/2-c.x/100*1536*scale;ty=viewport.clientHeight/2-c.y/100*865*scale;}
  layout();const input=document.getElementById('atlasSearch');input.value=c.name;
  document.querySelector('#atlasChips [data-cat="All"]')?.click();input.dispatchEvent(new Event('input',{bubbles:true}));
  const routeSearch=document.getElementById('atlasRouteSearch');if(routeSearch){routeSearch.value=c.name;routeSearch.dispatchEvent(new Event('input',{bubbles:true}));}
  selection.replaceChildren();text('h4',`${c.name} · ${c.country}`,selection);
  const matching=picks.filter(b=>b.city.startsWith(c.name+',')&&b.rating>=4);
  text('p',matching.length?'Explore these existing DSB selections, then browse the directory results below.':'Explore the directory results below. DSB has not yet reviewed a rated shortlist for this city.',selection);
  if(matching.length){
   const grid=document.createElement('div');grid.className='atlas-city-picks';selection.append(grid);
   for(const b of matching){const card=document.createElement('article');grid.append(card);text('h5',b.name,card);text('small',`${b.cat} · Previously recorded rating ${b.rating.toFixed(1)}/5 · Current rating unverified`,card);text('p',b.why,card);const a=text('a','Visit official website ↗',card);a.href=b.url;a.target='_blank';a.rel='noopener noreferrer';}
  }
  const streetLink=text('a','Explore this city on OpenStreetMap ↗',selection);streetLink.href='https://www.openstreetmap.org/search?query='+encodeURIComponent(c.name+' '+c.country);streetLink.target='_blank';streetLink.rel='noopener noreferrer';
  if(new Set(['Morocco','Senegal','Ghana','Nigeria','Côte d’Ivoire','Egypt','Ethiopia','Kenya','Rwanda','Uganda','Tanzania','DR Congo','Angola','South Africa','Botswana','Zambia','Zimbabwe','Mozambique','Namibia','Mauritius','Sierra Leone']).has(c.country)){const sources=document.createElement('details');sources.className='atlas-camera-sources';text('summary','A window into African wildlife',sources);text('p','Explore the official camera collection. These are separate locations, not a live view of this city; cameras may be live, replaying highlights or offline.',sources);const link=text('a','Explore African wildlife cameras ↗',sources);link.href='https://explore.org/livecams/african-wildlife';link.target='_blank';link.rel='noopener noreferrer';selection.append(sources);}
  const query=`Black owned businesses restaurants ${c.name} ${c.country}`;
  const a=text('a','Find local businesses ↗',selection);a.href='https://www.google.com/search?q='+encodeURIComponent(query);a.target='_blank';a.rel='noopener noreferrer';
  selection.hidden=false;
 }
 cities.forEach(c=>{const b=document.createElement('button');b.type='button';b.className='atlas-city';b.textContent=c.name;b.setAttribute('aria-label',`Explore ${c.name}, ${c.country}`);b.addEventListener('click',()=>{if(!moved)choose(c)});buttons.set(c.name,b);layer.append(b);});
 cities.slice().sort((a,b)=>a.name.localeCompare(b.name)).forEach(c=>{const o=document.createElement('option');o.value=c.name;o.textContent=`${c.name} · ${c.country}`;select.append(o);});
 select.addEventListener('change',()=>{const c=cities.find(c=>c.name===select.value);if(c)choose(c,true)});
 map.querySelector('[data-map-action="in"]').onclick=()=>zoom(scale*1.5);
 map.querySelector('[data-map-action="out"]').onclick=()=>zoom(scale/1.5);
 map.querySelector('[data-map-action="reset"]').onclick=reset;
 const expand=map.querySelector('[data-map-action="expand"]');
 function toggleExpand(){expanded=!expanded;if(expanded){previousOverflow=document.body.style.overflow;returnFocus=document.activeElement;document.body.style.overflow='hidden';}else{document.body.style.overflow=previousOverflow;}map.classList.toggle('is-expanded',expanded);expand.textContent=expanded?'Close map':'Expand map';expand.setAttribute('aria-expanded',String(expanded));reset();if(expanded)viewport.focus();else{returnFocus?.focus?.();expand.focus();}}
 expand.onclick=toggleExpand;
 document.addEventListener('keydown',e=>{if(expanded&&e.key==='Tab'){const items=[...map.querySelectorAll('button,a[href],input,select,[tabindex="0"]')].filter(x=>!x.disabled&&!x.hidden&&!x.closest('[hidden]')&&x.tabIndex>=0),first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}if(expanded&&e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();toggleExpand();}},true);
 viewport.addEventListener('keydown',e=>{if(e.target!==viewport)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','0','Escape'];if(!keys.includes(e.key))return;e.preventDefault();if(e.key==='Escape'){if(expanded)toggleExpand();return}if(e.key==='+'||e.key==='=')zoom(scale*1.4);else if(e.key==='-')zoom(scale/1.4);else if(e.key==='0')reset();else{tx+=e.key==='ArrowLeft'?70:e.key==='ArrowRight'?-70:0;ty+=e.key==='ArrowUp'?70:e.key==='ArrowDown'?-70:0;layout();}});
 viewport.addEventListener('wheel',e=>{if(!e.ctrlKey&&!expanded)return;e.preventDefault();const r=viewport.getBoundingClientRect();zoom(scale*Math.exp(-e.deltaY*.002),e.clientX-r.left,e.clientY-r.top)},{passive:false});
 function beginGesture(){const ps=[...pointers.values()];gesture={tx,ty,scale,points:ps.map(p=>({...p}))};}
 viewport.addEventListener('pointerdown',e=>{if(e.button!==0)return;moved=false;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});beginGesture();if(!e.target.closest('button'))viewport.setPointerCapture(e.pointerId)});
 viewport.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId)||!gesture)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});const ps=[...pointers.values()],old=gesture.points;
  if(ps.length===2&&old.length===2){
   const dist=Math.hypot(ps[0].x-ps[1].x,ps[0].y-ps[1].y),before=Math.hypot(old[0].x-old[1].x,old[0].y-old[1].y)||1,r=viewport.getBoundingClientRect();
   const ox=(old[0].x+old[1].x)/2-r.left,oy=(old[0].y+old[1].y)/2-r.top,nx=(ps[0].x+ps[1].x)/2-r.left,ny=(ps[0].y+ps[1].y)/2-r.top;
   scale=clamp(gesture.scale*dist/before,fit,fit*9);const f=scale/gesture.scale;tx=nx-(ox-gesture.tx)*f;ty=ny-(oy-gesture.ty)*f;moved=true;layout();
  }else if(ps.length===1){const dx=ps[0].x-old[0].x,dy=ps[0].y-old[0].y;if(Math.hypot(dx,dy)>6){moved=true;tx=gesture.tx+dx;ty=gesture.ty+dy;layout();}}
 });
 function end(e){pointers.delete(e.pointerId);if(pointers.size)beginGesture();else gesture=null;}
 viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);viewport.addEventListener('lostpointercapture',end);
 function resize(){const before=fit,next=Math.min(viewport.clientWidth/1536,viewport.clientHeight/865);if(next<=0)return;fit=next;const ratio=fit/(before||fit);scale=clamp(scale*ratio,fit,fit*9);tx*=ratio;ty*=ratio;layout();}if(window.ResizeObserver)new ResizeObserver(resize).observe(viewport);else window.addEventListener('resize',resize);
 map.querySelector('img')?.addEventListener('load',resize,{once:true});window.addEventListener('pagehide',()=>{if(expanded){expanded=false;document.body.style.overflow=previousOverflow;}});
 reset();
})();

