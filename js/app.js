/* ═══════════════════════════════════════════════════════════════════════
   gonver ssp · arranque
   Importar un componente lo registra. A partir de ahí, los elementos
   <ssp-*> que ya están en index.html se montan solos, en orden y antes de
   DOMContentLoaded, así que el navegador encuentra el `:target` del enlace
   con el que se entró.
   ═══════════════════════════════════════════════════════════════════════ */

import './componentes/ssp-rail.js';
import './componentes/ssp-inicio.js';
import './componentes/ssp-proyectos.js';
import './componentes/ssp-galerias.js';
import './componentes/ssp-packs.js';

import { iniciarNavegacion } from './nucleo/navegacion.js';

iniciarNavegacion();
