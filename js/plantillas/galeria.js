import { html, ruta, clases } from '../nucleo/html.js';
import { anclaGaleria, anclaFoto } from '../datos/proyectos.js';
import { volver, cabecera } from './cabecera.js';

/** Una foto de la rejilla; al pulsarla se abre su visor. */
const figura = (proyecto, foto, indice) => html`
    <figure class="${clases('shot', foto.ancha && 'shot-wide')}">
        <a class="shot-link frame" href="${anclaFoto(proyecto, indice)}"><img class="shot-img" src="${ruta(foto.src)}" alt="${foto.alt}"><span class="shot-zoom">Ampliar</span></a>
        <figcaption class="shot-cap"><b>${foto.titulo}</b>${foto.pie}</figcaption>
    </figure>
`;

/* El visor es CSS puro: existe siempre, oculto, y `:target` lo enseña.
   Los dos enlaces de cierre apuntan a la galería, que es de donde se vino. */
const visor = (proyecto, foto, indice) => {
    const cerrar = anclaGaleria(proyecto);
    const id = anclaFoto(proyecto, indice).slice(1);

    return html`
        <div class="lb" id="${id}"><a class="lb-bg" href="${cerrar}" aria-label="Cerrar la foto"></a><figure class="lb-fig"><img class="lb-img" src="${ruta(foto.src)}" alt="${foto.alt}"><figcaption class="lb-cap">${foto.visor || foto.titulo}</figcaption></figure><a class="lb-x" href="${cerrar}">Cerrar ✕</a></div>
    `;
};

/** Página completa de galería de un proyecto. */
export function paginaGaleria(proyecto) {
    const fotos = proyecto.fotos;

    return html`
        <main class="page gallery" id="${anclaGaleria(proyecto).slice(1)}">
            ${volver({ texto: 'Proyectos', href: '#proyectos' })}

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

            <section class="shots">
                ${fotos.map((foto, indice) => figura(proyecto, foto, indice))}
            </section>

            ${fotos.map((foto, indice) => visor(proyecto, foto, indice))}
        </main>
    `;
}
