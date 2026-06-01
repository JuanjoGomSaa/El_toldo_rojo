
function iniciarFaq() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(function (item) {
    const boton     = item.querySelector('.faq__pregunta');
    const respuesta = item.querySelector('.faq__respuesta');

    if (!boton || !respuesta) return;

    boton.addEventListener('click', function () {
      const estaAbierto = item.classList.contains('abierto');

      items.forEach(function (otroItem) {
        otroItem.classList.remove('abierto');
        const otraRespuesta = otroItem.querySelector('.faq__respuesta');
        if (otraRespuesta) otraRespuesta.style.maxHeight = null;
        otroItem.querySelector('.faq__pregunta')?.setAttribute('aria-expanded', 'false');
      });

      if (!estaAbierto) {
        item.classList.add('abierto');
        respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        boton.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarFaq);
} else {
  iniciarFaq();
}