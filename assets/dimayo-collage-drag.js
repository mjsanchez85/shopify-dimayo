/*
  DIMAYO — Collage de producto: arrastre con mouse.
  overflow-x + scroll-snap ya dan swipe nativo en touch/trackpad, pero un
  click + arrastre de mouse no scrollea un div por defecto en los
  navegadores (solo selecciona texto). Esto agrega ese comportamiento
  a pedido explícito, en vez de flechas.

  scroll-snap se desactiva mientras se arrastra (para que el scrollLeft
  siga al mouse 1 a 1, sin que el navegador pelee tratando de snapear a
  mitad de gesto) — por eso, al soltar, hay que calcular a mano cuál es
  la celda más cercana al centro y animar el scroll hasta ahí. El
  swipe/scroll nativo (touch, trackpad, rueda) no pasa por acá: para eso
  ya alcanza con scroll-snap-align: center en el CSS.
*/
(function () {
  function snapToNearestCell(track) {
    var cells = track.querySelectorAll('.dimayo-collage__cell');
    if (!cells.length) return;

    var trackCenter = track.scrollLeft + track.clientWidth / 2;
    var closestCell = null;
    var closestDistance = Infinity;

    cells.forEach(function (cell) {
      var cellCenter = cell.offsetLeft + cell.clientWidth / 2;
      var distance = Math.abs(cellCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestCell = cell;
      }
    });

    if (!closestCell) return;
    var target = closestCell.offsetLeft + closestCell.clientWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left: target, behavior: 'smooth' });
  }

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
      if (!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');
      if (hasDragged) snapToNearestCell(track);
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
