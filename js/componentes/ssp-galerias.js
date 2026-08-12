import { Componente, definir } from '../nucleo/componente.js';
import { proyectos } from '../datos/proyectos.js';
import { paginaGaleria } from '../plantillas/galeria.js';

/* Monta de golpe la galería de cada proyecto. Son páginas hermanas de las
   demás: `display: contents` en el componente hace que cuelguen de `.root`
   como si estuvieran escritas a mano, que es lo que espera `.page:target`. */
class Galerias extends Componente {
    plantilla() {
        return proyectos.map(paginaGaleria);
    }
}

definir('ssp-galerias', Galerias);
