import { Componente, definir } from '../nucleo/componente.js';
import { html } from '../nucleo/html.js';
import { packs, introPacks } from '../datos/packs.js';
import { volver, cabecera } from '../plantillas/cabecera.js';
import { tarjetaPack } from '../plantillas/packs.js';

class Packs extends Componente {
    plantilla() {
        return html`
            <main class="page">
                ${volver({ texto: 'Inicio', href: '' })}

                ${cabecera({
                    rotulo: 'Sección 03',
                    titulo: 'Texture packs',
                    entrada: introPacks.map((linea, indice) => html`${indice > 0 ? html`<br>` : ''}${linea}`)
                })}

                <section class="packs">
                    ${packs.map(tarjetaPack)}
                </section>
            </main>
        `;
    }
}

definir('ssp-packs', Packs);
