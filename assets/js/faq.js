/* ============================================================
   EL TOLDO ROJO — FAQ Acordeón
   Abre y cierra las preguntas frecuentes con animación suave.
   Funciona para cualquier página que tenga la clase .faq__lista.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const items = document.querySelectorAll('.faq__item');

  items.forEach(function (item) {
    const boton     = item.querySelector('.faq__pregunta');
    const respuesta = item.querySelector('.faq__respuesta');

    if (!boton || !respuesta) return;

    boton.addEventListener('click', function () {
      const estaAbierto = item.classList.contains('abierto');

      /* Cierra todos los items abiertos antes de abrir el nuevo.
         Si quieres que varios puedan estar abiertos a la vez,
         elimina este bloque forEach. */
      items.forEach(function (otroItem) {
        otroItem.classList.remove('abierto');
        const otraRespuesta = otroItem.querySelector('.faq__respuesta');
        if (otraRespuesta) otraRespuesta.style.maxHeight = null;
      });

      /* Si el item clickeado no estaba abierto, lo abre */
      if (!estaAbierto) {
        item.classList.add('abierto');
        // scrollHeight = altura real del contenido
        respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
      }

      /* Accesibilidad */
      boton.setAttribute('aria-expanded', !estaAbierto);
    });
  });

});