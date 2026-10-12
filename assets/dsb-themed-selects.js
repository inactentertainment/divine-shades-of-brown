/* Keep existing select values, forms and change handlers; theme the displayed picker. */
(()=>{
'use strict';
const enhanced=new Map();let active=null,serial=0;
const dialog=document.createElement('dialog');dialog.className='dsb-select-dialog';dialog.setAttribute('aria-label','Choose an option');
const head=document.createElement('div');head.className='dsb-select-head';const title=document.createElement('h2');title.id='dsb-select-title';const close=document.createElement('button');close.type='button';close.textContent='‹ Back';head.append(title,close);dialog.append(head);dialog.setAttribute('aria-labelledby',title.id);
const filter=document.createElement('input');filter.type='search';filter.placeholder='Find an option…';filter.setAttribute('aria-label','Search options');dialog.append(filter);
const list=document.createElement('div');list.className='dsb-select-options';list.id='dsb-select-options';list.setAttribute('role','listbox');dialog.append(list);document.body.append(dialog);
function finish(){dialog.close();const previous=active;active=null;previous?.button.focus({preventScroll:true})}
close.onclick=finish;dialog.addEventListener('cancel',e=>{e.preventDefault();finish()});dialog.addEventListener('click',e=>{if(e.target===dialog)finish()});
dialog.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape'){e.preventDefault();finish()}if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)&&e.target!==filter){const buttons=[...list.querySelectorAll('button:not(:disabled)')];let i=buttons.indexOf(document.activeElement);if(e.key==='Home')i=0;else if(e.key==='End')i=buttons.length-1;else i=(i+(e.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[i]?.focus();e.preventDefault()}});
function paint(){
 if(!active)return;list.replaceChildren();const query=filter.value.trim().toLocaleLowerCase();
 for(const option of active.select.options){if(option.hidden||!option.textContent.toLocaleLowerCase().includes(query))continue;const button=document.createElement('button');button.type='button';button.setAttribute('role','option');button.setAttribute('aria-selected',String(option.selected));button.textContent=option.textContent;button.disabled=option.disabled||option.parentElement.disabled;button.onclick=()=>{const original=active.select;original.value=option.value;original.dispatchEvent(new Event('input',{bubbles:true}));original.dispatchEvent(new Event('change',{bubbles:true}));reflect(active);finish()};list.append(button)}
 if(!list.children.length){const p=document.createElement('p');p.textContent='No matching options.';list.append(p)}
}
filter.oninput=paint;
function reflect(entry){const text=entry.select.selectedOptions[0]?.textContent||'Choose an option';if(entry.button.textContent!==text)entry.button.textContent=text;entry.button.disabled=entry.select.disabled;entry.button.setAttribute('aria-label',entry.label+': '+entry.button.textContent)}
function scan(){
 for(const select of document.querySelectorAll('select')){
  if(enhanced.has(select)||select.hidden||select.multiple)continue;
  const id=select.id||'dsb-select-'+(++serial);select.id=id;const labelElement=document.querySelector('label[for="'+CSS.escape(id)+'"]')||select.closest('label');const labelClone=labelElement?.cloneNode(true);labelClone?.querySelectorAll('select,button,input').forEach(el=>el.remove());const label=select.getAttribute('aria-label')||labelClone?.textContent.trim()||'Choose an option';
  const button=document.createElement('button');button.type='button';button.className='dsb-select-trigger';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','dsb-themed-picker');button.setAttribute('aria-expanded','false');select.insertAdjacentElement('afterend',button);select.classList.add('dsb-native-select');select.tabIndex=-1;select.setAttribute('aria-hidden','true');
  const entry={select,button,label};enhanced.set(select,entry);button.onclick=()=>{active=entry;title.textContent=label;dialog.setAttribute('aria-label',label);filter.value='';filter.hidden=select.options.length<10;list.setAttribute('aria-label',label);paint();button.setAttribute('aria-expanded','true');dialog.showModal();if(!filter.hidden)filter.focus();else(list.querySelector('[aria-selected=true]')||list.querySelector('button'))?.focus()};select.addEventListener('change',()=>reflect(entry));select.addEventListener('invalid',()=>button.focus());reflect(entry);
 }
 for(const [select,entry] of enhanced){if(!select.isConnected){enhanced.delete(select);continue}reflect(entry)}
}
dialog.id='dsb-themed-picker';dialog.addEventListener('close',()=>{for(const entry of enhanced.values())entry.button.setAttribute('aria-expanded','false')});
let pending=false;new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;scan()})}).observe(document.body,{childList:true,subtree:true});scan();
})();
