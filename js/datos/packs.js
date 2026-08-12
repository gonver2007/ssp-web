/* Texture packs que van puestos en la serie. */

/* Cada elemento es una línea; la plantilla las separa con un salto. */
export const introPacks = [
    'Los packs que llevo puestos en la serie.',
    'Yo uso los de Modrinth: Aviso por que hay cambios minimos.'
];

export const packs = [
    {
        nombre: 'Wither',
        etiqueta: 'Visibilidad',
        icono: 'contenido/wither.png',
        descripcion: 'Cambia el color de los corazones cuando tienes el efecto wither, para identificarlo de un vistazo sin mirar la barra de efectos.',
        enlaces: [
            {
                texto: 'Modrinth',
                href: 'https://modrinth.com/resourcepack/devs-better-wither-hearts',
                icono: 'contenido/modrinth.png',
                variante: 'primary'
            },
            {
                texto: 'CurseForge',
                href: 'https://www.curseforge.com/minecraft/texture-packs/devs-better-wither-hearts',
                icono: 'contenido/cf.png',
                variante: 'line'
            }
        ]
    },
    {
        nombre: 'Redstone',
        etiqueta: 'Visibilidad',
        icono: 'contenido/rs.png',
        descripcion: 'Aclara los componentes de redstone y hace evidente cuándo están activados. Trabajar con circuitos se vuelve mucho más cómodo.',
        enlaces: [
            {
                texto: 'Modrinth',
                href: 'https://modrinth.com/resourcepack/xk-redstone-display',
                icono: 'contenido/modrinth.png',
                variante: 'primary'
            },
            {
                texto: 'CurseForge',
                href: 'https://www.curseforge.com/minecraft/texture-packs/xekr-redstone-display',
                icono: 'contenido/cf.png',
                variante: 'line'
            }
        ]
    }
];
