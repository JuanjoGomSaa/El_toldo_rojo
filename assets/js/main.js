/* ============================================================
   EL TOLDO ROJO — main.js
   Menú móvil + acordeón FAQ
   ============================================================ */

/* -------------------------
   MENÚ MÓVIL
   ------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  const toggle = document.querySelector('.nav__toggle');
  const nav    = document.querySelector('header nav');
  const lista  = document.querySelector('.nav__lista');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const abierto = toggle.classList.toggle('abierto');
      nav.classList.toggle('visible', abierto);
      toggle.setAttribute('aria-expanded', abierto);

      /* Bloquea el scroll del body cuando el menú está abierto */
      document.body.style.overflow = abierto ? 'hidden' : '';
    });

    /* Cierra el menú al hacer clic en cualquier enlace */
    if (lista) {
      lista.querySelectorAll('.nav__enlace').forEach(function (enlace) {
        enlace.addEventListener('click', function () {
          toggle.classList.remove('abierto');
          nav.classList.remove('visible');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    /* Cierra si se hace clic fuera del nav (en el overlay) */
    nav.addEventListener('click', function (e) {
      if (e.target === nav) {
        toggle.classList.remove('abierto');
        nav.classList.remove('visible');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* -------------------------
     FAQ ACORDEÓN
     ------------------------- */
  const items = document.querySelectorAll('.faq__item');

  items.forEach(function (item) {
    const btn      = item.querySelector('.faq__pregunta');
    const respuesta = item.querySelector('.faq__respuesta');

    if (!btn || !respuesta) return;

    btn.addEventListener('click', function () {
      const estaAbierto = item.classList.contains('abierto');

      /* Cierra todos los demás */
      items.forEach(function (otro) {
        otro.classList.remove('abierto');
        const r = otro.querySelector('.faq__respuesta');
        if (r) r.style.maxHeight = null;
        const b = otro.querySelector('.faq__pregunta');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      /* Abre o cierra el actual */
      if (!estaAbierto) {
        item.classList.add('abierto');
        respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

});