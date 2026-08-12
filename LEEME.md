# gonver ssp · estructura del proyecto

Bitácora del mundo de supervivencia. HTML y CSS nativos: sin frameworks, sin
dependencias, sin paso de compilación y con **seis líneas de JavaScript en
todo el sitio** (la tecla Escape del visor de fotos).

## Cómo se abre

Doble clic en `index.html` y funciona. Ya no hay módulos ES, así que tampoco
hace falta un servidor local; si prefieres uno (Live Server de VS Code,
`python -m http.server`, `npx serve`…) también sirve, y es lo que más se
parece a cómo lo verá la gente.

## Las URLs

Cada sección es un documento propio en su carpeta:

| URL                     | Documento                        |
| ----------------------- | -------------------------------- |
| `/`                     | `index.html`                     |
| `/proyectos/`           | `proyectos/index.html`           |
| `/proyectos/base/`      | `proyectos/base/index.html`      |
| `/proyectos/fortaleza/` | `proyectos/fortaleza/index.html` |
| `/proyectos/slime/`     | `proyectos/slime/index.html`     |
| `/proyectos/gold/`      | `proyectos/gold/index.html`      |
| `/packs/`               | `packs/index.html`               |

Las fotos son la excepción: se abren con un fragmento dentro de su galería,
`/proyectos/base/#foto-1`. El visor es CSS puro (`:target`), abre y cierra
sin recargar, y el enlace se puede compartir igual.

## Cómo está montado

Cada documento **contiene su contenido escrito a mano**. No hay plantillas,
ni datos, ni montaje: lo que pone en el HTML es lo que se ve, también con
JavaScript desactivado y también para un rastreador.

```html
<header class="rail">…</header>

<div class="root" id="contenido">
    <main class="page gallery">…</main>
</div>
```

### Rutas relativas, nunca absolutas

Cada enlace e imagen se escribe desde su propia carpeta (`../`, `../../`).
Así el sitio funciona igual servido en la raíz que colgando de `/ssp-web/`
en GitHub Pages, y también abierto desde el disco.

Los nombres de archivo con espacios van codificados en el HTML
(`contenido/linia%20de%20tiempo/base.png`): el navegador tolera el espacio
crudo, pero copiar un enlace sin codificar da problemas.

### Lo que se repite

El rail está copiado en los siete documentos, y cambia en dos cosas: la
profundidad de sus enlaces y cuál lleva `aria-current="page"` — el atributo
que un lector de pantalla espera en una navegación y del que tira el CSS
para encender la pestaña. Las galerías dicen *Proyectos*, así que dejan
marcada su sección.

Es una duplicación deliberada: el precio de que no haga falta JavaScript
para pintar la navegación. Si cambias un enlace del rail, cámbialo en los
siete archivos.

## Tareas frecuentes

**Añadir un proyecto** → dos pasos:

1. Copiar una carpeta de galería existente a `proyectos/<id>/` y cambiar el
   `<title>`, la `<meta name="description">`, la cabecera, las fotos y sus
   visores. Los `id` de los visores son `foto-1`, `foto-2`… y cada uno
   vuelve a `#fotos` al cerrarse.
2. Añadir su parada `<li class="tl">` al final de la `<ol class="timeline">`
   de `proyectos/index.html`, antes de la parada `tl-next` que cierra la
   lista. Y actualizar la portada de la parada *En construcción* si toca.

**Añadir un texture pack** → un `<article class="pack frame">` más en
`packs/index.html`.

**Añadir una pregunta** → un `<details class="qa">` más en el bloque `.faq`
de `index.html`. Abre y cierra solo, sin JavaScript.

**Cambiar un color o una medida** → `css/base/tokens.css`, el único sitio
donde se deciden.

## CSS

Aquí está todo el trabajo. `css/main.css` no tiene reglas: declara las capas,
importa el resto y activa la transición entre documentos.

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

## El único JavaScript

[`js/esc.js`](js/esc.js), cargado solo en las cuatro galerías: cierra el
visor con la tecla Escape, que es lo único de todo el sitio que el CSS no
puede escuchar. Si se borra, el visor sigue abriendo y cerrando con el clic.

## GitHub Pages

Funciona tal cual: rutas relativas en todo, mayúsculas comprobadas contra
el disco (Linux distingue y Windows no), y nada que Jekyll ignore.

Queda opcional un `404.html` en la raíz: con URLs de carpeta, una dirección
mal escrita se vuelve más fácil, y Pages sirve ese archivo cuando no
encuentra la ruta.

## Pendiente

- `contenido/faq.png`, `contenido/vuelve.png` y `contenido/yt.png` no los
  usa ninguna página.
- `css/componentes/pie.css` describe un pie que no monta ninguna página.
- Los proyectos *Slime Farm* y *Gold Farm* apuntan al mismo vídeo
  (`tZL-htTrhRc`). Venía así del HTML original.
