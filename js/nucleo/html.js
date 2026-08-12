/* ═══════════════════════════════════════════════════════════════════════
   Plantillas
   `html` es una etiqueta de plantilla que escapa todo lo que se interpola,
   salvo lo que ya salió de otra plantilla. Es lo que aquí hace el papel de
   JSX: componer trozos de HTML sin poder inyectar marcado por accidente.
   ═══════════════════════════════════════════════════════════════════════ */

import { BASE } from './rutas.js';

const ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

/** Marca de "esto ya es HTML": lo que devuelve `html` y lo único que no se escapa. */
export class Fragmento {
    constructor(texto) {
        this.texto = texto;
    }

    toString() {
        return this.texto;
    }
}

export const escapar = (valor) => String(valor).replace(/[&<>"']/g, (caracter) => ESCAPES[caracter]);

/** Escotilla de salida: HTML que tú garantizas seguro. Úsala lo mínimo. */
export const crudo = (texto) => new Fragmento(String(texto));

function resolver(valor) {
    // null / undefined / false permiten `${condicion && plantilla}` sin residuo
    if (valor == null || valor === false || valor === true) return '';
    if (valor instanceof Fragmento) return valor.texto;
    if (Array.isArray(valor)) return valor.map(resolver).join('');
    return escapar(valor);
}

/* Convierte a texto lo que devuelva una plantilla: un fragmento, una lista
   de fragmentos o nada. `String(lista)` no vale, mete comas por medio. */
export const aTexto = (valor) => resolver(valor);

export function html(trozos, ...valores) {
    let salida = trozos[0];
    for (let i = 0; i < valores.length; i++) {
        salida += resolver(valores[i]) + trozos[i + 1];
    }
    return new Fragmento(salida);
}

/* Ruta a un archivo de `contenido/`, escrita siempre desde la raíz del
   sitio. Se le antepone la profundidad de la página actual y se codifica:
   estos nombres llevan espacios y el navegador los tolera, pero copiar un
   enlace con espacios sin codificar da problemas. */
export const ruta = (camino) => BASE + encodeURI(camino);

/** Junta clases descartando las que estén vacías o en falso. */
export const clases = (...nombres) => nombres.filter(Boolean).join(' ');
