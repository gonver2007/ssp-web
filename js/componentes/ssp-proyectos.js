import { Componente, definir } from '../nucleo/componente.js';
import { html } from '../nucleo/html.js';
import { proyectos, proximoProyecto } from '../datos/proyectos.js';
import { volver, cabecera } from '../plantillas/cabecera.js';
import { paradaProyecto, paradaProxima } from '../plantillas/linea-tiempo.js';

/* Línea de tiempo del mundo: una parada por proyecto, en el orden en que
   están en los datos, y la obra en curso cerrando la lista. */
class Proyectos extends Componente {
    plantilla() {
        return html`
            <main class="page">
                ${volver({ texto: 'Inicio', href: '' })}

                ${cabecera({
                    rotulo: 'Sección 02',
                    titulo: 'Proyectos',
                    entrada: 'Cada construcción del mundo en orden de finalización. Entra en una para ver la galería o salta directo al vídeo.'
                })}

                <ol class="timeline">
                    ${proyectos.map(paradaProyecto)}
                    ${paradaProxima(proximoProyecto)}
                </ol>
            </main>
        `;
    }
}

definir('ssp-proyectos', Proyectos);
