import { html, ruta, clases } from '../nucleo/html.js';
import { anclaFoto, ANCLA_FOTOS } from '../datos/proyectos.js';
import { volver, cabecera } from './cabecera.js';

/** Una foto de la rejilla; al pulsarla se abre su visor. */
const figura = (foto, indice) => html`
    <figure class="${clases('shot', foto.ancha && 'shot-wide')}">
        <a class="shot-link frame" href="${anclaFoto(indice)}"><img class="shot-img" src="${ruta(foto.src)}" alt="${foto.alt}"><span class="shot-zoom">Ampliar</span></a>
        <figcaption class="shot-cap"><b>${foto.titulo}</b>${foto.pie}</figcaption>
    </figure>
`;

/* El visor sigue siendo CSS puro: existe siempre, oculto, y `:target` lo
   enseña. Es la única parte del sitio que no cambia de URL, y por eso abre
   y cierra sin recargar. Al cerrarse vuelve a la rejilla de fotos. */
const visor = (foto, indice) => html`
    <div class="lb" id="${anclaFoto(indice).slice(1)}"><a class="lb-bg" href="${ANCLA_FOTOS}" aria-label="Cerrar la foto"></a><figure class="lb-fig"><img class="lb-img" src="${ruta(foto.src)}" alt="${foto.alt}"><figcaption class="lb-cap">${foto.visor || foto.titulo}</figcaption></figure><a class="lb-x" href="${ANCLA_FOTOS}">Cerrar ✕</a></div>
`;

/** Página completa de galería de un proyecto. */
export function paginaGaleria(proyecto) {
    const fotos = proyecto.fotos;

    return html`
        <main class="page gallery">
            ${volver({ texto: 'Proyectos', href: 'proyectos/' })}

            ${cabecera({
                rotulo: `Galería · proyecto ${proyecto.num}`,
                titulo: proyecto.titulo,
                entrada: proyecto.resumen,
                meta: html`
                    <p class="meta">
                        <time class="pill" datetime="${proyecto.fecha.iso}">${proyecto.fecha.texto}</time>
                        <span class="meta-dot"></span>
                        <span class="meta-txt">${fotos.length} ${fotos.length === 1 ? 'foto' : 'fotos'}</span>
                    </p>
                `
            })}

            <section class="shots" id="${ANCLA_FOTOS.slice(1)}">
                ${fotos.map(figura)}
            </section>

            ${fotos.map(visor)}
        </main>
    `;
}
