/* ═══════════════════════════════════════════════════════════════════════
   Componente
   Base de todos los elementos <ssp-*>. Cada uno es un punto de montaje
   transparente: en CSS lleva `display: contents`, así que no dibuja caja
   propia y el HTML que genera hereda la relación padre-hijo que el resto
   del CSS espera (`.root > .page`, `.page > .hero`, …).

   Sin shadow DOM a propósito: el visor de fotos se abre con `:target` y el
   CSS del sitio necesita ver el marcado que generan los componentes. Una
   raíz sombreada aislaría ambas cosas.
   ═══════════════════════════════════════════════════════════════════════ */

import { aTexto } from './html.js';

export class Componente extends HTMLElement {
    #montado = false;

    connectedCallback() {
        // connectedCallback se repite si el nodo se mueve de sitio; el
        // contenido es estático, así que basta con montarlo una vez.
        if (this.#montado) return;
        this.#montado = true;

        this.innerHTML = aTexto(this.plantilla());
        this.alMontar();
    }

    /**
     * HTML del componente: un fragmento de `html` o una lista de ellos.
     * Lo implementa cada subclase.
     */
    plantilla() {
        return '';
    }

    /** Gancho opcional para lo que necesite el DOM ya puesto. */
    alMontar() {}
}

export function definir(nombre, Clase) {
    if (!customElements.get(nombre)) customElements.define(nombre, Clase);
}
