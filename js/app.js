/* ═══════════════════════════════════════════════════════════════════════
   gonver ssp · arranque
   Importar un componente lo registra. Cada documento monta solo los
   <ssp-*> que tiene escritos: los demás quedan registrados sin usar, que
   no cuesta nada, y así todas las páginas comparten este único arranque.
   ═══════════════════════════════════════════════════════════════════════ */

import './componentes/ssp-rail.js';
import './componentes/ssp-inicio.js';
import './componentes/ssp-proyectos.js';
import './componentes/ssp-galeria.js';
import './componentes/ssp-packs.js';

import { iniciarNavegacion } from './nucleo/navegacion.js';

iniciarNavegacion();
