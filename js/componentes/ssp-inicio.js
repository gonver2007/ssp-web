import { Componente, definir } from '../nucleo/componente.js';
import { html } from '../nucleo/html.js';
import { portada, lecturaF3, tarjetasExplora } from '../datos/inicio.js';
import { preguntas as listaPreguntas } from '../datos/preguntas.js';
import { hero } from '../plantillas/hero.js';
import { lectura } from '../plantillas/lectura.js';
import { explora } from '../plantillas/explora.js';
import { preguntas } from '../plantillas/preguntas.js';
import { tituloSeccion } from '../plantillas/cabecera.js';

/* Portada. Los hijos directos de `.page` son los que el CSS escalona al
   entrar, así que las secciones cuelgan de ella sin envoltorios de más. */
class Inicio extends Componente {
    plantilla() {
        return html`
            <main class="page" id="home">
                ${hero(portada)}

                ${lectura(lecturaF3)}

                <section class="block">
                    ${tituloSeccion({ letra: 'A', texto: 'Explora' })}
                    ${explora(tarjetasExplora)}
                </section>

                <section class="block faq">
                    ${tituloSeccion({ letra: 'B', texto: 'Preguntas frecuentes' })}
                    ${preguntas(listaPreguntas)}
                </section>
            </main>
        `;
    }
}

definir('ssp-inicio', Inicio);
