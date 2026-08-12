/* Marca, navegación, estado del mundo y enlaces externos del rail. */

export const marca = {
    nombre: 'SSP 1.20',
    sub: '-gonver',
    emblema: 'contenido/SSP 1.20.png',
    href: '#home'
};

/* `idx` es el número que se ve; la clase `link-…` la deriva el componente
   del propio destino, así que basta con tocar el href para renombrar. */
export const navegacion = [
    { idx: '01', texto: 'Inicio', href: '#home' },
    { idx: '02', texto: 'Proyectos', href: '#proyectos' },
    { idx: '03', texto: 'Texture packs', href: '#packs' }
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
