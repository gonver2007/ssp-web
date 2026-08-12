/* ═══════════════════════════════════════════════════════════════════════
   Navegación
   Las páginas y el visor de fotos se abren y se cierran solos con `:target`
   y CSS. Aquí solo va lo que el CSS no puede escuchar: la tecla Escape.
   ═══════════════════════════════════════════════════════════════════════ */

function cerrarVisorAbierto() {
    const visor = document.querySelector('.lb:target');
    if (!visor) return;

    // El propio visor ya sabe a dónde se vuelve: se lo preguntamos a su
    // enlace de cierre en vez de repetir la ruta aquí.
    const salida = visor.querySelector('.lb-bg, .lb-x');
    if (!salida) return;

    // replace y no assign: cerrar no debe dejar rastro en el historial.
    location.replace(salida.getAttribute('href'));
}

export function iniciarNavegacion() {
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') cerrarVisorAbierto();
    });
}
