(() => {
  const dockHost = document.getElementById('webglDock');
  const fallbackDock = document.getElementById('fallbackDock');

  const go = (selector) => {
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Uses dashersw/liquid-glass-js when the CDN is available.
  // CSS fallback remains visible if WebGL/vendor scripts fail.
  window.addEventListener('load', () => {
    try {
      if (typeof Container === 'undefined' || typeof Button === 'undefined' || typeof html2canvas === 'undefined') return;

      window.glassControls = {
        edgeIntensity: 0.026,
        rimIntensity: 0.095,
        baseIntensity: 0.018,
        edgeDistance: 0.22,
        rimDistance: 0.72,
        baseDistance: 0.12,
        cornerBoost: 0.035,
        rippleEffect: 0.02,
        blurRadius: 8.0,
        tintOpacity: 0.26
      };

      const dock = new Container({ type: 'pill', tintOpacity: 0.25 });
      const how = new Button({ text: 'Как работает', size: 13, type: 'pill', tintOpacity: 0.15, onClick: () => go('#how') });
      const audit = new Button({ text: 'Проверить сайт', size: 13, type: 'pill', tintOpacity: 0.34, warp: true, onClick: () => go('#audit') });
      const up = new Button({ text: '↑', size: 15, type: 'circle', tintOpacity: 0.18, onClick: () => go('#top') });

      dock.addChild(how);
      dock.addChild(audit);
      dock.addChild(up);
      dockHost.appendChild(dock.element);

      // Give the renderer a moment to capture the page before swapping the fallback dock.
      setTimeout(() => {
        if (dock.webglInitialized) {
          fallbackDock.style.display = 'none';
          fallbackDock.setAttribute('aria-hidden', 'true');
        }
      }, 1600);
    } catch (err) {
      console.warn('Liquid Glass fallback is active:', err);
    }
  });
})();

// Tie V Codes to the author immediately on the first screen.
(function(){
  function addHeroAuthor(){
    if(document.querySelector('.hero-author')) return;
    const heroCopy=document.querySelector('.hero-copy');
    const aboutImg=document.querySelector('#about .about-photo img');
    if(!heroCopy || !aboutImg) return;
    const card=document.createElement('a');
    card.className='hero-author';
    card.href='#about';
    card.setAttribute('aria-label','Об Евгении Даныевой');
    card.innerHTML='<img src="'+aboutImg.src+'" alt="Евгения Даныева"><span class="hero-author-copy"><b>V Codes by Евгения Даныева</b><span>AI-интегратор · метамаркетолог</span></span><span class="author-arrow">↘</span>';
    const eyebrow=heroCopy.querySelector('.eyebrow');
    if(eyebrow) eyebrow.insertAdjacentElement('afterend',card); else heroCopy.prepend(card);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addHeroAuthor); else addHeroAuthor();
  window.addEventListener('load',addHeroAuthor);
  setTimeout(addHeroAuthor,300);
})();
