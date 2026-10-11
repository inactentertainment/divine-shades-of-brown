/* The shade preference persists locally; these trial reactions are deliberately in memory. */
(() => {
  'use strict';
  const tone = document.getElementById('dsbEmojiTone');
  if (!tone) return;
  const names = new Map([['🏻','Light'],['🏼','Medium light'],['🏽','Medium'],['🏾','Medium dark'],['🏿','Dark']]);
  const selections = new Map();
  function reflectShade() {
    const shade = names.has(tone.value) ? tone.value : '🏽';
    document.querySelectorAll('[data-shade-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.shadeChoice === shade)));
    document.querySelectorAll('[data-dsb-person-emoji]').forEach(el => { el.textContent = el.dataset.dsbPersonEmoji + shade; });
    document.getElementById('dsbShadeStatus').textContent = names.get(shade) + ' selected · Make yourself at home.';
  }
  document.querySelectorAll('[data-shade-choice]').forEach(button => button.addEventListener('click', () => {
    tone.value = button.dataset.shadeChoice;
    tone.dispatchEvent(new Event('change', {bubbles:true}));
  }));
  tone.addEventListener('change', reflectShade);
  function addReactions(id, title, question, choices) {
    const section = document.getElementById(id);
    if (!section) return;
    const panel = document.createElement('div');
    panel.className = 'dsb-reactions';
    panel.dataset.reactionSection = id;
    const heading = document.createElement('h3'); heading.textContent = title;
    const intro = document.createElement('p'); intro.textContent = question;
    const options = document.createElement('div'); options.className = 'reaction-options'; options.setAttribute('role','group'); options.setAttribute('aria-label',question);
    const status = document.createElement('p'); status.className = 'reaction-status'; status.setAttribute('role','status'); status.textContent = 'Choose a reaction that feels like you.';
    const note = document.createElement('p'); note.className = 'reaction-note'; note.textContent = 'Try it out. These preview reactions reset when you refresh.';
    const buttons = [];
    for (const [emoji,label,supportsTone] of choices) {
      const button = document.createElement('button'); button.type = 'button'; button.setAttribute('aria-pressed','false'); button.setAttribute('aria-label',label);
      const icon = document.createElement('span'); icon.setAttribute('aria-hidden','true'); icon.textContent = emoji;
      if (supportsTone) icon.dataset.dsbPersonEmoji = emoji;
      const text = document.createElement('span'); text.textContent = label; text.style.fontSize = 'inherit';
      button.append(icon,text); buttons.push(button); options.append(button);
      button.addEventListener('click', () => {
        const active = selections.get(id) === label;
        if (active) selections.delete(id); else selections.set(id,label);
        buttons.forEach(b => b.setAttribute('aria-pressed',String(!active && b === button)));
        status.textContent = active ? 'Choose a reaction that feels like you.' : label + ' — your mark is here for this visit.';
      });
    }
    const link = document.createElement('a'); link.href = '#/membership'; link.textContent = 'Explore Membership'; link.style.fontSize = '12px';
    const reset = document.createElement('button'); reset.type = 'button'; reset.className = 'reaction-reset'; reset.textContent = 'Clear reaction';
    reset.addEventListener('click', () => { selections.delete(id); buttons.forEach(b => b.setAttribute('aria-pressed','false')); status.textContent = 'Choose a reaction that feels like you.'; });
    panel.append(heading,intro,options,status,note,link,reset); section.append(panel);
  }
  addReactions('mission','Leave your mark.','Ready to build the change?', [['👍','I’m with you',true],['✊','Let’s build',true],['👏','Keep going',true]]);
  addReactions('ecosystem','Find your connection.','What’s your feeling about this space?', [['👍','For me',true],['🤎','Love this',false],['👏','Inspired',true]]);
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
