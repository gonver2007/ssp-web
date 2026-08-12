/* ═══════════════════════════════════════════════════════════════════════
   Proyectos del mundo
   Una sola entrada por proyecto alimenta las tres vistas: la tarjeta de la
   línea de tiempo, su página de galería y el visor de cada foto. Añadir un
   proyecto es añadir un objeto aquí; no hay que tocar HTML.

   `id` manda sobre los anclajes: la galería vive en `#g-<id>` y cada foto
   en `#lb-<id>-<n>`.
   ═══════════════════════════════════════════════════════════════════════ */

const TIEMPO = 'contenido/linia de tiempo';
const GALERIA = `${TIEMPO}/galeria`;

export const proyectos = [
    {
        id: 'base',
        num: '01',
        etapa: 'EarlyGame',
        titulo: 'Base Central',
        fecha: { iso: '2026-04-12', texto: '12 abr 2026' },
        descripcion: 'El corazón del mundo: almacenamiento, granjas de comida, aldeanos y un trading hall.',
        resumen: 'Aquí hay un poco de todo: granja de comida, aldeanos, mobs, caña de azúcar y un trading hall.',
        video: 'https://youtu.be/cXO41NqHXOk?si=hvbw87YNsEd48-XX',
        portada: {
            src: `${TIEMPO}/base.png`,
            alt: 'Vista general de la base central'
        },
        fotos: [
            {
                src: `${TIEMPO}/base.png`,
                alt: 'Vista general de la base central al atardecer',
                titulo: 'Vista general',
                pie: 'Toda la base vista desde fuera, con las granjas alrededor del edificio principal.',
                visor: 'Vista general de la base',
                ancha: true
            },
            {
                src: `${GALERIA}/base1.png`,
                alt: 'Interior de piedra de la base',
                titulo: 'Interior',
                pie: 'Bajada a desde el trading hall a el interior de la base.'
            },
            {
                src: `${GALERIA}/base2.png`,
                alt: 'Pasillo de la base con el portal del Nether',
                titulo: 'Portal del Nether',
                pie: 'El pasillo interior que lleva hasta el portal.'
            }
        ]
    },
    {
        id: 'fortaleza',
        num: '02',
        titulo: 'Fortaleza Infernal Optimizada',
        fecha: { iso: '2026-05-10', texto: '10 may 2026' },
        descripcion: 'Mi mayor fuente de carbon, hueso y experiencia.',
        resumen: 'La fortaleza del Nether optimizada para consiguir cabezas.',
        video: 'https://youtu.be/k6vbQ9m7YJo?si=BGniCaydUdzbzsnK',
        portada: {
            src: `${TIEMPO}/Fortaleza Infernal Optimizada.png`,
            alt: 'Interior de la fortaleza infernal optimizada'
        },
        fotos: [
            {
                src: `${TIEMPO}/Fortaleza Infernal Optimizada.png`,
                alt: 'Interior de la fortaleza infernal',
                titulo: 'Interior de la fortaleza',
                pie: 'Los pasillos principales ya optimizados.',
                ancha: true
            },
            {
                src: `${GALERIA}/foi1.png`,
                alt: 'Vista aérea de la fortaleza infernal',
                titulo: 'Zona de spawn',
                pie: 'Vista aerea de toda la estructura.'
            },
            {
                src: `${GALERIA}/foi2.png`,
                alt: 'Prueba de spawn dentro de la fortaleza',
                titulo: 'Prueba de spawn',
                pie: 'Todo en marcha mientras peleo en la granja.'
            }
        ]
    },
    {
        id: 'slime',
        num: '03',
        etapa: 'EarlyGame',
        titulo: 'Slime Farm',
        fecha: { iso: '2026-07-10', texto: '10 jul 2026' },
        descripcion: 'Mi fuente de slime.',
        resumen: 'Granja de slimes sobre 4 chunk de slime, con todas las cuevas iluminadas para que el spawn se concentre dentro.',
        video: 'https://youtu.be/tZL-htTrhRc?si=D2zq52OIUT_9Ka9w',
        portada: {
            src: `${TIEMPO}/slime farm.png`,
            alt: 'Interior de la granja de slimes'
        },
        fotos: [
            {
                src: `${TIEMPO}/slime farm.png`,
                alt: 'Interior de la granja de slimes',
                titulo: 'Interior de la granja',
                pie: 'Las plataformas de spawn.',
                ancha: true
            },
            {
                src: `${GALERIA}/slime farm1.png`,
                alt: 'Plataformas verdes de la granja de slimes',
                titulo: 'Plataformas',
                pie: 'Las plataformas, el portal y el almazenamiento'
            },
            {
                src: `${GALERIA}/slime farm2.png`,
                alt: 'Interior de la granja de slimes desde el otro extremo',
                titulo: 'Otro ángulo',
                pie: 'El interior visto desde el extremo opuesto de la estructura.'
            }
        ]
    },
    {
        id: 'gold',
        num: '04',
        etapa: 'EarlyGame',
        titulo: 'Gold Farm',
        fecha: { iso: '2026-08-09', texto: '9 ago 2026' },
        descripcion: 'Mi fuente de oro.',
        resumen: 'Granja de oro en el Nether, con plataformas de magma.',
        video: 'https://youtu.be/tZL-htTrhRc?si=D2zq52OIUT_9Ka9w',
        portada: {
            src: `${TIEMPO}/Gold farm.png`,
            alt: 'Plataformas de la granja de oro en el Nether'
        },
        fotos: [
            {
                src: `${GALERIA}/Gold farm1.png`,
                alt: 'Plataformas de spawn de la granja de oro',
                titulo: 'Plataformas de spawn',
                pie: 'Las plataformas montadas una encima de la otra, listas para los zombiepigman.',
                ancha: true
            },
            {
                src: `${TIEMPO}/Gold farm.png`,
                alt: 'La granja de oro vista de lejos entre la niebla del Nether',
                titulo: 'La granja desde lejos',
                pie: 'La estructura suspendida, vista entre la niebla del Nether.'
            },
            {
                src: `${GALERIA}/Gold farm2.png`,
                alt: 'Interior de la granja de oro desde el centro',
                titulo: 'Desde dentro',
                pie: 'El conjunto de plataformas visto arriba de la estructura.'
            }
        ]
    }
];

/* Cierra la línea de tiempo. No es un proyecto: no tiene fecha, ni galería,
   ni vídeo, así que va aparte en vez de ensuciar la lista con campos vacíos. */
export const proximoProyecto = {
    num: '05',
    titulo: 'En construcción',
    descripcion: 'El siguiente proyecto del mundo todavía está en obras. Aparecerá aquí en cuanto esté terminado.',
    etiqueta: 'En obras',
    imagen: 'contenido/wip.png'
};

/* Anclajes: los calcula el `id` del proyecto, nunca se escriben a mano. */
export const anclaGaleria = (proyecto) => `#g-${proyecto.id}`;
export const anclaFoto = (proyecto, indice) => `#lb-${proyecto.id}-${indice + 1}`;
