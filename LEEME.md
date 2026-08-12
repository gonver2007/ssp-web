# gonver ssp · estructura del proyecto

Bitácora del mundo de supervivencia. HTML, CSS y JavaScript nativos: sin
frameworks, sin dependencias y sin paso de compilación.

## Cómo se abre

**Hace falta un servidor local.** Los módulos ES no cargan desde `file://`,
así que hacer doble clic en `index.html` ya no funciona:

- VS Code → extensión **Live Server** → clic derecho en `index.html` →
  *Open with Live Server*. Es la vía cómoda y no pide instalar nada más.
- Cualquier otro servidor estático sirve igual (`python -m http.server`,
  `npx serve`…), pero hoy no hay ni Python ni Node en este equipo.

## Las URLs

Cada sección es un documento propio en su carpeta:

| URL                     | Documento                       | Monta          |
| ----------------------- | ------------------------------- | -------------- |
| `/`                     | `index.html`                    | `ssp-inicio`   |
| `/proyectos/`           | `proyectos/index.html`          | `ssp-proyectos`|
| `/proyectos/base/`      | `proyectos/base/index.html`     | `ssp-galeria`  |
| `/proyectos/fortaleza/` | `proyectos/fortaleza/index.html`| `ssp-galeria`  |
| `/proyectos/slime/`     | `proyectos/slime/index.html`    | `ssp-galeria`  |
| `/proyectos/gold/`      | `proyectos/gold/index.html`     | `ssp-galeria`  |
| `/packs/`               | `packs/index.html`              | `ssp-packs`    |

Las fotos son la excepción: se abren con un fragmento dentro de su galería,
`/proyectos/base/#foto-1`. Así el visor sigue siendo CSS puro (`:target`),
abre y cierra sin recargar, y el enlace se puede compartir igual.

### Cómo sabe cada página dónde está

Todo sale de tres atributos del `<body>`, declarados una vez por documento:

```html
<body data-seccion="proyectos" data-base="../../" data-proyecto="base">
```

- **`data-base`** — el camino hasta la raíz del sitio (`''`, `'../'` o
  `'../../'`). Todos los enlaces e imágenes se escriben desde la raíz
  (`'packs/'`, `'contenido/yo.png'`) y [`js/nucleo/rutas.js`](js/nucleo/rutas.js)
  les antepone esto. Por eso no hay ni una ruta absoluta: el sitio funciona
  igual servido en la raíz que colgando de `/ssp-web/` en GitHub Pages.
- **`data-seccion`** — qué pestaña del rail se enciende. Las galerías dicen
  `proyectos`, así que dejan marcada su sección. El rail pone
  `aria-current="page"` en el enlace que coincide, y el CSS lo estiliza
  desde ahí.
- **`data-proyecto`** — solo en las galerías: elige qué proyecto de los
  datos se monta. Los cuatro archivos de galería son idénticos salvo esto,
  el `<title>` y la descripción.

## Cómo está montado

Ningún `index.html` contiene contenido: solo declara qué componentes hay.

```html
<ssp-rail></ssp-rail>
<div class="root" id="contenido">
    <ssp-galeria></ssp-galeria>
</div>
```

Cada `<ssp-*>` es un **custom element** que se rellena solo al montarse.

### Las capas

| Carpeta           | Qué hay                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `js/datos/`       | El contenido. Texto, rutas y enlaces. Es lo único que se toca a diario.|
| `js/plantillas/`  | Funciones puras que convierten datos en HTML. Sin estado, sin DOM.     |
| `js/componentes/` | Los `<ssp-*>`: unen unos datos con unas plantillas y se montan.        |
| `js/nucleo/`      | El motor: la etiqueta `html`, la clase base, las rutas y la tecla Esc. |

### Dos reglas que sostienen el diseño

**1. Los componentes no dibujan caja.** Todos llevan `display: contents` en
CSS. Así el HTML que generan hereda la relación padre-hijo real y selectores
como `.page > .hero` funcionan igual que si estuviera escrito a mano.

**2. Nada de shadow DOM.** El visor de fotos se abre con `:target` y el CSS
del sitio necesita ver el marcado que generan los componentes. Todo vive en
el DOM normal, a la vista.

## Tareas frecuentes

**Añadir un proyecto** → dos pasos:

1. Un objeto nuevo en [`js/datos/proyectos.js`](js/datos/proyectos.js). De
   ahí salen solas la parada de la línea de tiempo, la galería y el visor
   de cada foto.
2. Copiar una carpeta de galería existente a `proyectos/<id>/` y cambiarle
   tres cosas: el `<title>`, la `<meta name="description">` y el
   `data-proyecto` del `<body>`. El `id` del paso 1 y el `data-proyecto`
   tienen que coincidir; si no, la página lo dice en pantalla en vez de
   quedarse en blanco.

**Añadir un texture pack** → un objeto en `js/datos/packs.js`.

**Añadir una pregunta** → un objeto en `js/datos/preguntas.js`. La respuesta
es una lista de bloques: `{ p: '…' }` para un párrafo, `{ lista: [...] }`
para una enumeración.

**Cambiar un color o una medida** → `css/base/tokens.css`, el único sitio
donde se deciden.

## CSS

`css/main.css` no tiene reglas: declara las capas, importa el resto y activa
la transición entre documentos.

```
base/         tokens, normalización, composición de páginas, movimiento
componentes/  un archivo por pieza, con sus media queries dentro
```

Las capas (`@layer base, componentes`) mandan por encima de la
especificidad: un componente puede ajustar lo que fija la base sin escribir
selectores cada vez más largos.

`@view-transition { navigation: auto; }` anima el paso de una sección a
otra. Es mejora progresiva: donde no hay soporte (Firefox, hoy) la
navegación es la normal de siempre.

## Interpolación segura

Las plantillas usan la etiqueta `html` de `js/nucleo/html.js`, que **escapa
todo lo que se interpola** salvo lo que ya salió de otra plantilla:

```js
html`<p>${textoDelUsuario}</p>`     // escapado
html`<div>${otraPlantilla()}</div>` // se respeta, ya es HTML
crudo('<b>ojo</b>')                  // escotilla de salida, úsala lo mínimo
```

## GitHub Pages

Funciona tal cual: rutas relativas en todo, mayúsculas comprobadas contra
el disco (Linux distingue y Windows no), y nada que Jekyll ignore.

Queda opcional un `404.html` en la raíz: con URLs de carpeta, una dirección
mal escrita se vuelve más fácil, y Pages sirve ese archivo cuando no
encuentra la ruta.

## Pendiente

- `contenido/faq.png`, `contenido/vuelve.png` y `contenido/yt.png` no los
  usa ninguna página (tampoco antes de la reestructuración).
- `css/componentes/pie.css` describe un pie que no monta ninguna página.
- Los proyectos *Slime Farm* y *Gold Farm* apuntan al mismo vídeo
  (`tZL-htTrhRc`). Venía así del HTML original.

## Lo que se perdió por el camino

El contenido lo monta JavaScript, así que **la página no se ve sin JS** y
los rastreadores que no ejecutan scripts no leen el texto. Es el precio de
componentizar en el navegador; si alguna vez pesa más el SEO que la
comodidad, la salida es generar el HTML al publicar en vez de al visitar.

Lo que sí mejoró al separar las secciones en documentos: cada URL tiene su
propio `<title>` y su descripción, y cada página carga solo su contenido en
lugar de llevar las siete escondidas en el mismo archivo.
