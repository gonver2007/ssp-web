/* ═══════════════════════════════════════════════════════════════════════
   Rutas
   Cada sección es un documento en su propia carpeta, así que un mismo
   enlace se escribe distinto según la profundidad desde la que se mire.
   Cada index.html lo declara una vez en el <body>:

       <body data-seccion="proyectos" data-base="../">

   y a partir de ahí todo se calcula solo. Nada de rutas absolutas: así el
   sitio funciona igual en la raíz de un servidor local que colgando de
   /ssp-web/ en GitHub Pages.
   ═══════════════════════════════════════════════════════════════════════ */

const { seccion = 'inicio', base = '', proyecto = '' } = document.body.dataset;

/** Prefijo hasta la raíz del sitio: '', '../' o '../../'. */
export const BASE = base;

/** Sección abierta, para encender su pestaña en el rail. */
export const SECCION = seccion;

/** Identificador del proyecto, solo en las páginas de galería. */
export const PROYECTO = proyecto;

/** ¿El destino sale del sitio? */
export const esExterno = (href) => href.startsWith('http');

/**
 * Resuelve un enlace escrito desde la raíz del sitio ('packs/') a la
 * profundidad actual. Los externos y los fragmentos se dejan intactos.
 */
export function destino(href) {
    if (esExterno(href) || href.startsWith('#')) return href;
    return BASE + href;
}
