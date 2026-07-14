/*
  DIMAYO — Quick add para "Sumá a tu selección" en /cart.

  No usa <product-form>/product-form.js: esa clase redirige a /cart
  cuando no encuentra un cart-drawer ni un cart-notification en la
  página (nuestro cart_type es "page", así que ninguno de los dos
  existe), lo que recargaría esta misma página en vez de actualizarla
  al vuelo. En cambio, hace el fetch a /cart/add.js directo y publica
  el mismo evento cartUpdate que ya escucha <cart-items> (cart.js) —
  así el listado del carrito se refresca sin recargar, reusando la
  infraestructura de pubsub que ya trae el tema.
*/
(function () {
  function quickAdd(event) {
    var button = event.currentTarget;

    if (button.getAttribute('aria-disabled') === 'true') return;

    var variantId = button.getAttribute('data-variant-id');
    if (!variantId) return;

    button.setAttribute('aria-disabled', 'true');

    var config = fetchConfig('javascript');
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    delete config.headers['Content-Type'];

    var formData = new FormData();
    formData.append('id', variantId);
    formData.append('quantity', 1);
    config.body = formData;

    fetch(window.routes.cart_add_url, config)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        button.removeAttribute('aria-disabled');

        if (response.status) {
          publish(PUB_SUB_EVENTS.cartError, {
            source: 'dimayo-cart-suggested',
            productVariantId: variantId,
            errors: response.errors || response.description,
            message: response.message,
          });
          return;
        }

        publish(PUB_SUB_EVENTS.cartUpdate, {
          source: 'dimayo-cart-suggested',
          productVariantId: variantId,
          cartData: response,
        });
      })
      .catch(function () {
        button.removeAttribute('aria-disabled');
      });
  }

  function init() {
    document.querySelectorAll('.dimayo-cart-suggested__quick-add').forEach(function (button) {
      button.addEventListener('click', quickAdd);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
