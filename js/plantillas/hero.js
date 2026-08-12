import { html, ruta } from '../nucleo/html.js';
import { encabezado } from './cabecera.js';
import { boton } from './boton.js';

/* El título llega partido en líneas para poder controlar dónde rompe;
   la última va destacada en cian. */
export function hero({ encabezado: rotulo, titulo, entrada, acciones, skin }) {
    return html`
        <section class="hero">
            <div class="hero-copy">
                ${encabezado(rotulo)}
                <h1 class="hero-title">${titulo.lineas.map((linea) => html`${linea}<br>`)}<em>${titulo.destacado}</em></h1>
                <p class="hero-lead">${entrada}</p>
                <div class="hero-actions">
                    ${acciones.map(boton)}
                </div>
            </div>

            <div class="hero-art">
                <span class="hero-glow" aria-hidden="true"></span>
                <span class="hero-plate" aria-hidden="true"></span>
                <img class="hero-skin" src="${ruta(skin.src)}" alt="${skin.alt}">
            </div>
        </section>
    `;
}
