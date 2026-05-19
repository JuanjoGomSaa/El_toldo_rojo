/* ============================================================
   EL TOLDO ROJO — JavaScript global
   Controla: menú móvil, scroll suave a secciones.
   No necesitas tocar este archivo salvo que cambies el HTML.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------
     MENÚ MÓVIL
     Activa/desactiva el menú cuando se toca el botón hamburguesa.
     ------------------------- */

  const toggle   = document.querySelector('.nav__toggle');
  const navLista = document.querySelector('.nav__lista');

  if (toggle && navLista) {
    toggle.addEventListener('click', function () {
      const estaAbierto = navLista.classList.contains('visible');

      navLista.classList.toggle('visible');
      toggle.classList.toggle('abierto');

      // Accesibilidad: indica a lectores de pantalla si el menú está abierto
      toggle.setAttribute('aria-expanded', !estaAbierto);
    });

    // Cierra el menú si el usuario hace clic fuera de él
    document.addEventListener('click', function (evento) {
      const dentroDelHeader = evento.target.closest('.header');
      if (!dentroDelHeader) {
        navLista.classList.remove('visible');
        toggle.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------------------------
     MARCAR ENLACE ACTIVO
     Lee la URL actual y añade la clase "nav__enlace--activo"
     al enlace que coincide. No tienes que hacerlo a mano en cada página.
     ------------------------- */

  const enlacesNav    = document.querySelectorAll('.nav__enlace');
  const urlActual     = window.location.pathname;

  enlacesNav.forEach(function (enlace) {
    // Normaliza la ruta para comparar (quita la / del final si existe)
    const rutaEnlace = new URL(enlace.href).pathname.replace(/\/$/, '');
    const rutaActual = urlActual.replace(/\/$/, '');

    if (rutaEnlace === rutaActual) {
      enlace.classList.add('nav__enlace--activo');
    }
  });

});