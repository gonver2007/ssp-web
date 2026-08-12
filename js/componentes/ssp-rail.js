import { Componente, definir } from '../nucleo/componente.js';
import { html, ruta } from '../nucleo/html.js';
import { marca, navegacion, estadoDelMundo, enlacesExternos } from '../datos/sitio.js';

/* La clase que marca la pestaña activa sale del destino (`#packs` →
   `link-packs`): el CSS la busca por ahí y así no hay que repetirla
   también en los datos. */
const claseDe = ({ href }) => `link-${href.replace('#', '')}`;

class Rail extends Componente {
    plantilla() {
        return html`
            <header class="rail">
                <a class="rail-brand" href="${marca.href}">
                    <img class="rail-emblem" src="${ruta(marca.emblema)}" alt="">
                    <span class="rail-id">
                        <span class="rail-name">${marca.nombre}</span>
                        <span class="rail-sub">${marca.sub}</span>
                    </span>
                </a>

                <nav class="rail-nav" aria-label="Secciones">
                    ${navegacion.map((enlace) => html`
                        <a class="rail-link ${claseDe(enlace)}" href="${enlace.href}"><span class="rail-idx">${enlace.idx}</span>${enlace.texto}</a>
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
