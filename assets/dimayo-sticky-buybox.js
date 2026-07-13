/*
  DIMAYO — Mantiene el panel de compra (título/variante/precio/botón)
  visible en pantalla mientras se hace scroll por las secciones
  narrativas del PDP (collage, Guardala, especificaciones), que son
  secciones Shopify independientes fuera de la fila de main-product,
  por lo que el "enable_sticky_info" nativo de Dawn no llega a ellas.

  wrapper.min-height se fija al alto natural del panel para que su
  bounding box no colapse cuando el panel pasa a position:fixed —
  si no, el trigger de scroll queda inestable (se prende y apaga solo).
*/
(function () {
  function init() {
    var hero = document.querySelector('.dimayo-product-hero');
    if (!hero) return;

    var wrapper = hero.querySelector('.product__info-wrapper');
    var panel = hero.querySelector('.product__column-sticky');
    if (!wrapper || !panel) return;

    wrapper.classList.add('dimayo-sticky-anchor');

    var footer = document.querySelector('footer');
    var mq = window.matchMedia('(min-width: 990px)');
    var topOffset = 32;
    var ticking = false;

    function reserveHeight() {
      var wasFixed = panel.classList.contains('dimayo-sticky-fixed');
      var wasBottom = panel.classList.contains('dimayo-sticky-bottom');
      panel.classList.remove('dimayo-sticky-fixed', 'dimayo-sticky-bottom');
      wrapper.style.minHeight = panel.offsetHeight + 'px';
      if (wasFixed) panel.classList.add('dimayo-sticky-fixed');
      if (wasBottom) panel.classList.add('dimayo-sticky-bottom');
    }

    function update() {
      ticking = false;

      if (!mq.matches) {
        panel.classList.remove('dimayo-sticky-fixed', 'dimayo-sticky-bottom');
        panel.style.width = '';
        panel.style.left = '';
        wrapper.style.minHeight = '';
        return;
      }

      var wrapperRect = wrapper.getBoundingClientRect();
      var panelHeight = panel.offsetHeight;
      var footerRect = footer ? footer.getBoundingClientRect() : null;

      if (wrapperRect.top > topOffset) {
        panel.classList.remove('dimayo-sticky-fixed', 'dimayo-sticky-bottom');
        panel.style.width = '';
        panel.style.left = '';
        return;
      }

      if (footerRect && footerRect.top < topOffset + panelHeight) {
        panel.classList.remove('dimayo-sticky-fixed');
        panel.classList.add('dimayo-sticky-bottom');
        panel.style.width = '';
        panel.style.left = '';
        return;
      }

      panel.classList.add('dimayo-sticky-fixed');
      panel.classList.remove('dimayo-sticky-bottom');
      panel.style.width = wrapperRect.width + 'px';
      panel.style.left = wrapperRect.left + 'px';
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    function onResize() {
      reserveHeight();
      update();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    if (mq.addEventListener) {
      mq.addEventListener('change', onResize);
    } else if (mq.addListener) {
      mq.addListener(onResize);
    }

    reserveHeight();
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
