import { html, ruta, clases } from '../nucleo/html.js';
import { destino, esExterno } from '../nucleo/rutas.js';

/* Un botón es siempre un enlace en este sitio. Que salga fuera se deduce
   del destino: lo que empieza por `http` abre pestaña nueva, así ningún
   dato tiene que declararlo. */
export function boton({ texto, href, variante = 'line', pequeno = false, icono }) {
    const fuera = esExterno(href) ? html` target="_blank" rel="noopener noreferrer"` : '';
    const marca = icono ? html`<img class="btn-ico" src="${ruta(icono)}" alt="">` : '';

    return html`<a class="${clases('btn', `btn-${variante}`, pequeno && 'btn-sm')}" href="${destino(href)}"${fuera}>${marca}${texto}</a>`;
}
