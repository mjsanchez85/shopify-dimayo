/*
  DIMAYO — Header: abre el menú (dropdown o mega menu) al pasar el mouse,
  no solo al hacer click (comportamiento nativo de Dawn para
  <header-menu>/<details>). Solo desktop — en mobile el header usa el
  drawer (hamburguesa), que no pasa por acá.

  <header-menu> envuelve tanto el <summary> como el contenido
  desplegado (.mega-menu__content / .header__submenu), así que un
  mouseleave en <header-menu> ya cubre "el mouse salió de toda el área
  del menú desplegado" sin necesidad de calcular límites a mano.
*/
(function () {
  var desktopBreakpoint = window.matchMedia('(min-width: 990px)');
  var CLOSE_DELAY = 150;
  var closeTimers = new WeakMap();

  function open(headerMenu, details) {
    var timer = closeTimers.get(headerMenu);
    if (timer) {
      clearTimeout(timer);
      closeTimers.delete(headerMenu);
    }
    if (!details.hasAttribute('open')) details.setAttribute('open', '');
  }

  function scheduleClose(headerMenu, details) {
    var timer = setTimeout(function () {
      details.removeAttribute('open');
      var summary = details.querySelector('summary');
      if (summary) summary.setAttribute('aria-expanded', 'false');
      closeTimers.delete(headerMenu);
    }, CLOSE_DELAY);
    closeTimers.set(headerMenu, timer);
  }

  function init() {
    document.querySelectorAll('.header__inline-menu header-menu').forEach(function (headerMenu) {
      var details = headerMenu.querySelector(':scope > details');
      if (!details) return;

      headerMenu.addEventListener('mouseenter', function () {
        if (!desktopBreakpoint.matches) return;
        open(headerMenu, details);
      });

      headerMenu.addEventListener('mouseleave', function () {
        if (!desktopBreakpoint.matches) return;
        scheduleClose(headerMenu, details);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
