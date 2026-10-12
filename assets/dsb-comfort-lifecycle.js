/* One approved bar per substantial reading view; no home/grid toolbar. */
(()=>{let cleanups=[],activeRoot=null;
 function unmount(){cleanups.reverse().forEach(fn=>fn?.());cleanups=[];if(activeRoot){activeRoot.removeAttribute('data-dsb-reader-root');activeRoot=null}document.body.dataset.reader='false';document.body.classList.remove('ie-reader','comfort-focus');delete document.body.dataset.comfortShade;}
 function mount(root,key){unmount();if(!root||!root.isConnected)return;activeRoot=root;root.setAttribute('data-dsb-reader-root','');document.body.dataset.reader='true';cleanups.push(window.DSBReaderBarInit(root),window.DSBReadAloudInit(root),window.DSBComfortInit(root,key||location.pathname+location.hash));}
 window.DSBReading={mount,unmount,stop:()=>document.getElementById('read-stop')?.click()};window.dsbReaderStop=window.DSBReading.stop;
 document.addEventListener('dsb:reading-page',e=>mount(e.detail.root,e.detail.pageId||e.detail.bookId||location.pathname+location.hash));
 document.addEventListener('dsb:reading-close',unmount);document.addEventListener('dsb:media-start',window.DSBReading.stop);document.getElementById('themeToggle')?.addEventListener('click',()=>{delete document.body.dataset.comfortShade;document.body.classList.remove('lights-on')});
 document.addEventListener('pointerover',e=>{const b=e.target.closest('#page-tools [data-tooltip]');if(b)b.title=b.dataset.tooltip});
})();
