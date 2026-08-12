import { Componente, definir } from '../nucleo/componente.js';
import { html, ruta } from '../nucleo/html.js';
import { destino, SECCION } from '../nucleo/rutas.js';
import { marca, navegacion, estadoDelMundo, enlacesExternos } from '../datos/sitio.js';

/* La pestaña activa se marca con `aria-current="page"`, que es lo que un
   lector de pantalla espera en una navegación, y de paso es el gancho del
   CSS. Cada documento declara en qué sección está: las galerías dicen
   'proyectos', así que dejan encendida su pestaña. */
const marcaActiva = ({ seccion }) =>
    seccion === SECCION ? html` aria-current="page"` : '';

class Rail extends Componente {
    plantilla() {
        return html`
            <header class="rail">
                <a class="rail-brand" href="${destino(marca.href)}">
                    <img class="rail-emblem" src="${ruta(marca.emblema)}" alt="">
                    <span class="rail-id">
                        <span class="rail-name">${marca.nombre}</span>
                        <span class="rail-sub">${marca.sub}</span>
                    </span>
                </a>

                <nav class="rail-nav" aria-label="Secciones">
                    ${navegacion.map((enlace) => html`
                        <a class="rail-link" href="${destino(enlace.href)}"${marcaActiva(enlace)}><span class="rail-idx">${enlace.idx}</span>${enlace.texto}</a>
                    `)}
                </nav>

                <dl class="rail-state">
                    ${estadoDelMundo.map(({ clave, valor }) => html`
                        <div class="state-row"><dt>${clave}</dt><dd>${valor}</dd></div>
                    `)}
                </dl>

                <div class="rail-out">
                    ${enlacesExternos.map(({ texto, href }) => html`
                        <a class="out-link" href="${href}" target="_blank" rel="noopener noreferrer">${texto}<span class="out-arrow">↗</span></a>
                    `)}
                </div>
            </header>
        `;
    }
}

definir('ssp-rail', Rail);
