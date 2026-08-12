import { Componente, definir } from '../nucleo/componente.js';
import { html } from '../nucleo/html.js';
import { PROYECTO } from '../nucleo/rutas.js';
import { buscarProyecto } from '../datos/proyectos.js';
import { paginaGaleria } from '../plantillas/galeria.js';
import { volver } from '../plantillas/cabecera.js';

/* Galería de un proyecto. Cuál es lo dice el documento en el que se monta:
   proyectos/base/index.html declara `data-proyecto="base"`. Así el mismo
   componente sirve las cuatro páginas sin recibir nada por atributo. */
class Galeria extends Componente {
    plantilla() {
        const proyecto = buscarProyecto(PROYECTO);

        // Una carpeta cuyo `data-proyecto` no existe en los datos: mejor
        // decirlo que servir una página en blanco.
        if (!proyecto) {
            return html`
                <main class="page">
                    ${volver({ texto: 'Proyectos', href: 'proyectos/' })}
                    <header class="head">
                        <h1 class="page-title">Proyecto no encontrado</h1>
                        <p class="page-lead">Esta carpeta declara <code>data-proyecto="${PROYECTO}"</code>, pero no hay ningún proyecto con ese identificador en <code>js/datos/proyectos.js</code>.</p>
                    </header>
                </main>
            `;
        }

        return paginaGaleria(proyecto);
    }
}

definir('ssp-galeria', Galeria);
