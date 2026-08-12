import { html } from '../nucleo/html.js';
import { destino } from '../nucleo/rutas.js';

/** Rótulo con rombo que abre cada sección. */
export const encabezado = (texto) => html`
    <p class="eyebrow"><span class="eyebrow-tick"></span>${texto}</p>
`;

/** Enlace de vuelta a la página de la que se viene. */
export const volver = ({ texto, href }) => html`
    <a class="back" href="${destino(href)}"><span class="back-arrow">←</span>${texto}</a>
`;

/** Cabecera de página interior: rótulo, título, entradilla y metadatos. */
export const cabecera = ({ rotulo, titulo, entrada, meta }) => html`
    <header class="head">
        ${encabezado(rotulo)}
        <h1 class="page-title">${titulo}</h1>
        ${entrada ? html`<p class="page-lead">${entrada}</p>` : ''}
        ${meta || ''}
    </header>
`;

/** Título numerado de las secciones de la portada (A, B, …). */
export const tituloSeccion = ({ letra, texto }) => html`
    <h2 class="sec-title"><span class="sec-num">${letra}</span>${texto}</h2>
`;
