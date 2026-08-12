import { html, ruta, clases } from '../nucleo/html.js';

/** Tarjeta grande de la portada que lleva a una sección. */
export const tarjetaExplora = ({ titulo, descripcion, href, imagen, acercar }) => html`
    <a class="ex-card frame" href="${href}">
        <span class="ex-media"><img class="${clases('ex-img', acercar && 'ex-img-zoom')}" src="${ruta(imagen.src)}" alt="${imagen.alt}"></span>
        <span class="ex-foot">
            <span class="ex-text">
                <span class="ex-name">${titulo}</span>
                <span class="ex-desc">${descripcion}</span>
            </span>
            <span class="ex-go">→</span>
        </span>
    </a>
`;

export const explora = (tarjetas) => html`
    <div class="explore">
        ${tarjetas.map(tarjetaExplora)}
    </div>
`;
