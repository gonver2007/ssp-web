import { html, ruta } from '../nucleo/html.js';
import { boton } from './boton.js';

/** Ficha de un texture pack con sus enlaces de descarga. */
export const tarjetaPack = ({ nombre, etiqueta, icono, descripcion, enlaces }) => html`
    <article class="pack frame">
        <div class="pack-head">
            <img class="pack-icon" src="${ruta(icono)}" alt="">
            <div class="pack-id">
                <h2 class="pack-name">${nombre}</h2>
                <p class="pack-tag">${etiqueta}</p>
            </div>
        </div>
        <p class="pack-desc">${descripcion}</p>
        <div class="pack-links">
            ${enlaces.map((enlace) => boton({ ...enlace, pequeno: true }))}
        </div>
    </article>
`;
