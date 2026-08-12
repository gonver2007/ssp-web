import { html, ruta } from '../nucleo/html.js';
import { anclaGaleria } from '../datos/proyectos.js';
import { boton } from './boton.js';

/* El recuento sale de las fotos que hay, no de un número escrito a mano:
   si mañana la galería crece, la tarjeta se entera sola. */
const recuento = (fotos) => `Galería · ${fotos.length} ${fotos.length === 1 ? 'foto' : 'fotos'}`;

const numero = ({ num, etapa }) => (etapa ? `${num} -${etapa}` : num);

/** Una parada de la línea de tiempo. */
export function paradaProyecto(proyecto) {
    const galeria = anclaGaleria(proyecto);

    return html`
        <li class="tl">
            <div class="tl-mark">
                <span class="tl-dot"></span>
                <time class="tl-date" datetime="${proyecto.fecha.iso}">${proyecto.fecha.texto}</time>
            </div>
            <article class="tl-card frame">
                <a class="tl-media" href="${galeria}"><img class="tl-img" src="${ruta(proyecto.portada.src)}" alt="${proyecto.portada.alt}"></a>
                <div class="tl-body">
                    <p class="tl-num">${numero(proyecto)}</p>
                    <h2 class="tl-title"><a href="${galeria}">${proyecto.titulo}</a></h2>
                    <p class="tl-desc">${proyecto.descripcion}</p>
                    <p class="tl-links">
                        ${boton({ texto: recuento(proyecto.fotos), href: galeria, variante: 'line', pequeno: true })}
                        ${boton({ texto: 'Ver vídeo ↗', href: proyecto.video, variante: 'ghost', pequeno: true })}
                    </p>
                </div>
            </article>
        </li>
    `;
}

/* La parada que cierra la lista: sin fecha, sin galería y sin retícula,
   para que se lea distinta de las terminadas. */
export const paradaProxima = ({ num, titulo, descripcion, etiqueta, imagen }) => html`
    <li class="tl tl-next">
        <div class="tl-mark">
            <span class="tl-dot tl-dot-open"></span>
            <time class="tl-date">próximo</time>
        </div>
        <article class="tl-card">
            <div class="tl-media tl-media-wip"><img class="tl-wip" src="${ruta(imagen)}" alt=""></div>
            <div class="tl-body">
                <p class="tl-num tl-num-open">${num}</p>
                <h2 class="tl-title">${titulo}</h2>
                <p class="tl-desc">${descripcion}</p>
                <p class="tl-links"><span class="pill pill-wip">${etiqueta}</span></p>
            </div>
        </article>
    </li>
`;
