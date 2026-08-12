/* Marca, navegación, estado del mundo y enlaces externos del rail. */

export const marca = {
    nombre: 'SSP 1.20',
    sub: '-gonver',
    emblema: 'contenido/SSP 1.20.png',
    href: ''
};

/* Los `href` se escriben desde la raíz del sitio ('' es la portada) y cada
   página los adapta a su profundidad. `seccion` es lo que enciende la
   pestaña: las galerías declaran 'proyectos', así que se quedan marcadas
   en su sección aunque cuelguen más abajo. */
export const navegacion = [
    { idx: '01', texto: 'Inicio', href: '', seccion: 'inicio' },
    { idx: '02', texto: 'Proyectos', href: 'proyectos/', seccion: 'proyectos' },
    { idx: '03', texto: 'Texture packs', href: 'packs/', seccion: 'packs' }
];

export const estadoDelMundo = [
    { clave: 'versión', valor: '1.20' },
    { clave: 'modo', valor: 'supervivencia' },
    { clave: 'mods', valor: 'ninguno' },
    { clave: 'jugadores', valor: 'gonver' }
];

export const enlacesExternos = [
    { texto: 'YouTube', href: 'https://www.youtube.com/@gonverYT' },
    { texto: 'Phantom Market', href: 'https://market.phantom-node.com/profile/gonver' }
];
