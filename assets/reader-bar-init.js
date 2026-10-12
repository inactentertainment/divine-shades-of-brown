/* Adapted from the approved i.e. Reading & Comfort Bar. */
window.DSBReaderBarInit=function(root){
 const bar=document.createElement('aside');bar.id='page-tools';bar.setAttribute('aria-label','DSB Reading & Comfort Bar');
 bar.innerHTML='<button class="light-toggle" type="button"></button><div class="reader-utilities"></div><div class="reader-right"></div>';document.body.append(bar);
 const footer=document.querySelector('body>footer'),observers=[];let frame=0;
 function place(){frame=0;const top=footer?.getBoundingClientRect().top??innerHeight,offset=Math.max(0,innerHeight-top);bar.style.setProperty('--tools-footer-offset',offset+'px');bar.hidden=top<=0;document.documentElement.style.setProperty('--reader-bottom',(offset+bar.offsetHeight+8)+'px');}
 function queue(){if(!frame)frame=requestAnimationFrame(place)}
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue);
 if(window.ResizeObserver){const observer=new ResizeObserver(queue);[footer,root,bar].filter(Boolean).forEach(el=>observer.observe(el));observers.push(observer)}place();
 return ()=>{window.removeEventListener('scroll',queue);window.removeEventListener('resize',queue);cancelAnimationFrame(frame);observers.forEach(o=>o.disconnect());bar.remove();document.documentElement.style.removeProperty('--reader-bottom')};
};
