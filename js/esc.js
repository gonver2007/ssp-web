/* El visor de fotos abre y cierra con :target y CSS. Lo único que el CSS no
   puede escuchar es la tecla Escape, y es todo el JavaScript del sitio.
   `replace` y no `assign`: cerrar no debe dejar rastro en el historial. */
addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.querySelector('.lb:target')) location.replace('#fotos');
});
