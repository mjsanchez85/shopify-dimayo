/*
  DIMAYO — Collage de producto: arrastre con mouse.
  overflow-x + scroll-snap ya dan swipe nativo en touch/trackpad, pero un
  click + arrastre de mouse no scrollea un div por defecto en los
  navegadores (solo selecciona texto). Esto agrega ese comportamiento
  a pedido explícito, en vez de flechas.
*/
(function () {
  function initDragScroll(track) {
    var isDown = false;
    var hasDragged = false;
    var startX = 0;
    var startScrollLeft = 0;

    function onPointerDown(event) {
      isDown = true;
      hasDragged = false;
      track.classList.add('is-dragging');
      startX = event.pageX;
      startScrollLeft = track.scrollLeft;
      event.preventDefault();
    }

    function onPointerMove(event) {
      if (!isDown) return;
      var delta = event.pageX - startX;
      if (Math.abs(delta) > 5) hasDragged = true;
      track.scrollLeft = startScrollLeft - delta;
    }

    function onPointerUp() {
      isDown = false;
      track.classList.remove('is-dragging');
    }

    function onClickCapture(event) {
      if (hasDragged) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    track.addEventListener('mousedown', onPointerDown);
    track.addEventListener('mousemove', onPointerMove);
    track.addEventListener('mouseup', onPointerUp);
    track.addEventListener('mouseleave', onPointerUp);
    track.addEventListener('click', onClickCapture, true);
  }

  function init() {
    document.querySelectorAll('.dimayo-collage--carousel').forEach(initDragScroll);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
