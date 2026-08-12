import { html } from '../nucleo/html.js';

/* Lectura de datos tipo F3. Decorativa: `aria-hidden` porque leerla en voz
   alta no aporta nada. El separador «//» solo aparece entre grupos. */
export function lectura(grupos) {
    return html`
        <div class="readout" aria-hidden="true">
            ${grupos.map((grupo, indice) => html`${
                indice > 0 ? html`<span class="readout-sep">//</span>` : ''
            }${grupo.map((dato) => html`<span>${dato}</span>`)}`)}
        </div>
    `;
}
