import { html } from '../nucleo/html.js';

/* Cada bloque de la respuesta es `{ p }` o `{ lista }`; cualquier otra
   forma se ignora en silencio antes que romper la página. */
const bloque = (parte) => {
    if (parte.p) return html`<p>${parte.p}</p>`;
    if (parte.lista) return html`<ul class="qa-list">${parte.lista.map((punto) => html`<li>${punto}</li>`)}</ul>`;
    return '';
};

/* <details> hace todo el trabajo de abrir y cerrar: ni un byte de JS. */
export const pregunta = ({ pregunta: texto, respuesta }) => html`
    <details class="qa">
        <summary class="qa-q">${texto}<span class="qa-sign" aria-hidden="true"></span></summary>
        <div class="qa-a">${respuesta.map(bloque)}</div>
    </details>
`;

export const preguntas = (lista) => lista.map(pregunta);
