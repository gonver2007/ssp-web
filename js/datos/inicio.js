/* Contenido de la portada: hero, lectura F3 y tarjetas de exploración. */

export const portada = {
    encabezado: 'Survival Single Player · Minecraft 1.20',
    titulo: {
        lineas: ['Un mundo', 'para toda'],
        destacado: 'la vida'
    },
    entrada: 'Vanilla, sin mods y en solitario. Aquí queda registrado todo lo que construyo: Cada proyecto, cada granja y los texture packs que uso en la serie.',
    acciones: [
        {
            texto: 'Ver la serie',
            href: 'https://www.youtube.com/playlist?list=PLweq8_0eVzE2LyytXi07ktzgwQ_KavB_w',
            variante: 'primary'
        },
        {
            texto: 'Ver canal',
            href: 'https://www.youtube.com/@gonverYT',
            variante: 'line'
        }
    ],
    skin: {
        src: 'contenido/yo.png',
        alt: 'La skin de gonver con armadura de diamante'
    }
};

/* Cada grupo se pinta seguido y entre grupos cae un separador «//». */
export const lecturaF3 = [
    ['X: 12', 'Y: 4', 'Z: -2026'],
    ['Bioma: youtube'],
    ['Sin mods']
];

export const tarjetasExplora = [
    {
        titulo: 'Proyectos',
        descripcion: 'Mi base, mis granjas y la línea de tiempo del mundo',
        href: '#proyectos',
        imagen: { src: 'contenido/foi.png', alt: 'Interior de la fortaleza infernal' },
        // La foto original está muy abierta: se acerca para que se lea algo.
        acercar: true
    },
    {
        titulo: 'Texture packs',
        descripcion: 'Los packs que uso, con enlaces de descarga',
        href: '#packs',
        imagen: { src: 'contenido/tp.png', alt: 'Muestra de los texture packs' }
    }
];
