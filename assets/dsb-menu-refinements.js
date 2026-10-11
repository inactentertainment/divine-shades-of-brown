/* The shade preference persists locally; these trial reactions are deliberately in memory. */
(() => {
  'use strict';
  const tone = document.getElementById('dsbEmojiTone');
  if (!tone) return;
  const names = new Map([['🏻','Light'],['🏼','Medium light'],['🏽','Medium'],['🏾','Medium dark'],['🏿','Dark']]);
  function reflectShade() {
    const shade = names.has(tone.value) ? tone.value : '🏽';
    document.querySelectorAll('[data-shade-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.shadeChoice === shade)));
    document.querySelectorAll('[data-dsb-person-emoji]').forEach(el => { el.textContent = el.dataset.dsbPersonEmoji + shade; });
    document.getElementById('dsbShadeStatus').textContent = names.get(shade) + ' selected';
  }
  document.querySelectorAll('[data-shade-choice]').forEach(button => button.addEventListener('click', () => {
    tone.value = button.dataset.shadeChoice;
    tone.dispatchEvent(new Event('change', {bubbles:true}));
  }));
  tone.addEventListener('change', reflectShade);
  reflectShade();
  const passport = document.getElementById('passportPanel');
  if (passport) {
    const reflectPassport = () => {
      const open = passport.classList.contains('open');
      passport.inert = !open;
      passport.setAttribute('aria-hidden',String(!open));
    };
    new MutationObserver(reflectPassport).observe(passport,{attributes:true,attributeFilter:['class']});
    reflectPassport();
  }
})();
