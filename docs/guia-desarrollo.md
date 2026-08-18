# BookManager — Guía de Desarrollo

Manual técnico de referencia para los desarrolladores del equipo.  
Leer antes de comenzar cualquier tarea asignada.

---

## 1. Convenciones de nomenclatura

### Regla principal

| Propósito | Se usa | Ejemplo |
|-----------|--------|---------|
| **JavaScript** (seleccionar elementos) | `id` | `id="formulario-libro"` |
| **CSS** (estilizar elementos) | `class` | `class="formulario-campo"` |

Un elemento puede tener ambos:
```html
<input id="titulo" class="formulario-campo" type="text">
```

- JS accede por ID: `document.querySelector('#titulo')`
- CSS estiliza por clase: `.formulario-campo { ... }`

### Idioma: todo en español

Clases, IDs, variables JS, nombres de funciones — todo en español. Coincide con el idioma del proyecto, el contenido y el equipo.

### Nomenclatura de clases (prefijo de contexto)

Las clases usan un prefijo que indica a qué bloque pertenecen:

| Prefijo | Contexto |
|---------|----------|
| `encabezado` | Header de la app |
| `formulario-` | Formulario de registro/edición |
| `controles-` | Buscador, filtros, ordenamiento |
| `estadisticas-` | Contadores del catálogo |
| `catalogo-` | Contenedor de la lista de libros |
| `libro-` | Card individual de un libro |
| `btn-` | Botones |
| `pie` | Footer de la app |

### Modificadores de estado

Para estados visuales se usa doble guión:

```
.libro-estado--disponible   → libro disponible (color verde)
.libro-estado--prestado     → libro prestado (color rojo/naranja)
```

---

## 2. Mapa completo de IDs (para JavaScript)

Estos son los IDs que se usarán desde `app.js`. **No cambiar estos nombres.**

### Formulario

| ID | Elemento | Propósito |
|----|----------|-----------|
| `formulario-libro` | `<form>` | Formulario principal |
| `titulo` | `<input>` | Campo título |
| `autor` | `<input>` | Campo autor |
| `categoria` | `<select>` | Campo categoría |
| `anio` | `<input>` | Campo año |
| `error-titulo` | `<span>` | Mensaje error título |
| `error-autor` | `<span>` | Mensaje error autor |
| `error-categoria` | `<span>` | Mensaje error categoría |
| `error-anio` | `<span>` | Mensaje error año |
| `btn-submit` | `<button>` | Botón enviar (Agregar/Guardar) |
| `btn-cancelar` | `<button>` | Botón cancelar edición |

### Controles

| ID | Elemento | Propósito |
|----|----------|-----------|
| `buscador` | `<input>` | Campo de búsqueda |
| `filtro-categoria` | `<select>` | Filtro por categoría |
| `filtro-estado` | `<select>` | Filtro por estado |
| `ordenamiento` | `<select>` | Selector de orden |

### Estadísticas

| ID | Elemento | Propósito |
|----|----------|-----------|
| `estadisticas` | `<section>` | Contenedor de stats |
| `stat-total` | `<strong>` | Número total de libros |
| `stat-disponibles` | `<strong>` | Número de disponibles |
| `stat-prestados` | `<strong>` | Número de prestados |

### Catálogo

| ID | Elemento | Propósito |
|----|----------|-----------|
| `lista-libros` | `<div>` | Contenedor donde JS renderiza las cards |

---

## 3. Mapa completo de clases (para CSS)

### Layout general

```
.encabezado            → <header>
.principal             → <main>
.pie                   → <footer>
```

### Formulario

```
.formulario-seccion    → <section> contenedora
.formulario            → <form>
.formulario-grupo      → <div> que agrupa label + input + error
.formulario-etiqueta   → <label>
.formulario-campo      → <input type="text">, <input type="number">
.formulario-select     → <select>
.formulario-error      → <span> de mensaje de error
.formulario-acciones   → <div> que agrupa botones submit y cancelar
```

### Controles

```
.controles-seccion     → <section> contenedora
.controles-busqueda    → <div> del buscador
.controles-campo       → <input> del buscador
.controles-filtros     → <div> que agrupa los selects
.controles-select      → <select> de filtro/orden
```

### Estadísticas

```
.estadisticas-seccion  → <section> contenedora
.estadisticas-item     → cada <span> con el contador
```

### Catálogo

```
.catalogo-seccion      → <section> contenedora
.catalogo-grid         → <div> contenedor grid de cards
```

### Cards de libro (generadas por JS en T-02)

```
.libro-card                → <article> contenedor de cada libro
.libro-titulo              → <h3> título del libro
.libro-autor               → <p> autor
.libro-meta                → <p> categoría · año
.libro-estado              → <span> estado del libro
.libro-estado--disponible  → modificador: disponible (verde)
.libro-estado--prestado    → modificador: prestado (rojo/naranja)
.libro-acciones            → <div> contenedor de botones de acción
```

### Botones

```
.btn                   → estilos base de todos los botones
.btn-primario          → botón principal (agregar/guardar)
.btn-secundario        → botón secundario (cancelar)
.btn-editar            → botón editar (en card)
.btn-eliminar          → botón eliminar (en card)
.btn-prestar           → botón prestar/devolver (en card)
```

### Utilidades

```
.oculto                → display: none (ocultar elementos)
```

---

## 4. Estructura del HTML (esquema completo)

```
<body>
├── <header class="encabezado">
│     <h1> BookManager
│     <p>  Sistema de gestión de biblioteca digital
│
├── <main class="principal">
│   │
│   ├── <section class="formulario-seccion">
│   │     <h2> Agregar libro
│   │     <form id="formulario-libro" class="formulario">
│   │       <div class="formulario-grupo">
│   │         <label class="formulario-etiqueta" for="titulo">
│   │         <input class="formulario-campo" id="titulo" type="text"
│   │                placeholder="Título del libro">
│   │         <span class="formulario-error" id="error-titulo"></span>
│   │       </div>
│   │       <div class="formulario-grupo">
│   │         <label class="formulario-etiqueta" for="autor">
│   │         <input class="formulario-campo" id="autor" type="text"
│   │                placeholder="Nombre del autor">
│   │         <span class="formulario-error" id="error-autor"></span>
│   │       </div>
│   │       <div class="formulario-grupo">
│   │         <label class="formulario-etiqueta" for="categoria">
│   │         <select class="formulario-select" id="categoria">
│   │           <option value="">Seleccionar categoría</option>
│   │           <option value="Novela">Novela</option>
│   │           <option value="Ciencia ficción">Ciencia ficción</option>
│   │           <option value="Historia">Historia</option>
│   │           <option value="Tecnología">Tecnología</option>
│   │           <option value="Fantasía">Fantasía</option>
│   │           <option value="Otros">Otros</option>
│   │         </select>
│   │         <span class="formulario-error" id="error-categoria"></span>
│   │       </div>
│   │       <div class="formulario-grupo">
│   │         <label class="formulario-etiqueta" for="anio">
│   │         <input class="formulario-campo" id="anio" type="number"
│   │                placeholder="Año de publicación" min="1900">
│   │         <span class="formulario-error" id="error-anio"></span>
│   │       </div>
│   │       <div class="formulario-acciones">
│   │         <button id="btn-submit" class="btn btn-primario"
│   │                 type="submit">Agregar libro</button>
│   │         <button id="btn-cancelar" class="btn btn-secundario oculto"
│   │                 type="button">Cancelar</button>
│   │       </div>
│   │     </form>
│   │
│   ├── <section class="controles-seccion">
│   │     <div class="controles-busqueda">
│   │       <input id="buscador" class="controles-campo" type="text"
│   │              placeholder="Buscar por título o autor...">
│   │     </div>
│   │     <div class="controles-filtros">
│   │       <select id="filtro-categoria" class="controles-select">
│   │         <option value="">Todas las categorías</option>
│   │         <option value="Novela">Novela</option>
│   │         <option value="Ciencia ficción">Ciencia ficción</option>
│   │         <option value="Historia">Historia</option>
│   │         <option value="Tecnología">Tecnología</option>
│   │         <option value="Fantasía">Fantasía</option>
│   │         <option value="Otros">Otros</option>
│   │       </select>
│   │       <select id="filtro-estado" class="controles-select">
│   │         <option value="">Todos los estados</option>
│   │         <option value="disponible">Disponibles</option>
│   │         <option value="prestado">Prestados</option>
│   │       </select>
│   │       <select id="ordenamiento" class="controles-select">
│   │         <option value="">Ordenar por...</option>
│   │         <option value="titulo-asc">Título A-Z</option>
│   │         <option value="titulo-desc">Título Z-A</option>
│   │         <option value="anio-asc">Año más antiguo</option>
│   │         <option value="anio-desc">Año más reciente</option>
│   │       </select>
│   │     </div>
│   │
│   ├── <section id="estadisticas" class="estadisticas-seccion">
│   │     <span class="estadisticas-item">
│   │       Total: <strong id="stat-total">0</strong>
│   │     </span>
│   │     <span class="estadisticas-item">
│   │       Disponibles: <strong id="stat-disponibles">0</strong>
│   │     </span>
│   │     <span class="estadisticas-item">
│   │       Prestados: <strong id="stat-prestados">0</strong>
│   │     </span>
│   │
│   └── <section class="catalogo-seccion">
│         <div id="lista-libros" class="catalogo-grid">
│           <!-- Vacío: JS renderiza las cards aquí (T-02) -->
│         </div>
│
├── <footer class="pie">
│     <p> BookManager © 2026 — Proyecto Integrador G4
│
└── <script src="js/app.js">
```

---

## 5. Estructura de una card (referencia para T-02)

Cada libro se renderiza como un `<article>` dentro de `#lista-libros`:

```html
<article class="libro-card">
  <h3 class="libro-titulo">Cien años de soledad</h3>
  <p class="libro-autor">Gabriel García Márquez</p>
  <p class="libro-meta">Novela · 1967</p>
  <span class="libro-estado libro-estado--disponible">Disponible</span>
  <div class="libro-acciones">
    <button class="btn btn-editar" data-id="1">Editar</button>
    <button class="btn btn-eliminar" data-id="1">Eliminar</button>
    <button class="btn btn-prestar" data-id="1">Prestar</button>
  </div>
</article>
```

Si el libro está prestado:
```html
<span class="libro-estado libro-estado--prestado">Prestado</span>
...
<button class="btn btn-prestar" data-id="1">Devolver</button>
```

**Importante:** cada botón de acción debe tener `data-id` con el ID del libro.

---

## 6. Selectores JavaScript (referencia rápida)

```js
// Formulario
const formulario = document.querySelector('#formulario-libro');
const inputTitulo = document.querySelector('#titulo');
const inputAutor = document.querySelector('#autor');
const selectCategoria = document.querySelector('#categoria');
const inputAnio = document.querySelector('#anio');
const btnSubmit = document.querySelector('#btn-submit');
const btnCancelar = document.querySelector('#btn-cancelar');

// Errores
const errorTitulo = document.querySelector('#error-titulo');
const errorAutor = document.querySelector('#error-autor');
const errorCategoria = document.querySelector('#error-categoria');
const errorAnio = document.querySelector('#error-anio');

// Controles
const buscador = document.querySelector('#buscador');
const filtroCategoria = document.querySelector('#filtro-categoria');
const filtroEstado = document.querySelector('#filtro-estado');
const ordenamiento = document.querySelector('#ordenamiento');

// Estadísticas
const statTotal = document.querySelector('#stat-total');
const statDisponibles = document.querySelector('#stat-disponibles');
const statPrestados = document.querySelector('#stat-prestados');

// Catálogo
const listaLibros = document.querySelector('#lista-libros');
```

---

## 7. Valores de las opciones (selects)

### Categoría (formulario y filtro)

| value | Texto visible |
|-------|---------------|
| `""` | Seleccionar categoría / Todas las categorías |
| `"Novela"` | Novela |
| `"Ciencia ficción"` | Ciencia ficción |
| `"Historia"` | Historia |
| `"Tecnología"` | Tecnología |
| `"Fantasía"` | Fantasía |
| `"Otros"` | Otros |

### Estado (filtro)

| value | Texto visible |
|-------|---------------|
| `""` | Todos los estados |
| `"disponible"` | Disponibles |
| `"prestado"` | Prestados |

### Ordenamiento

| value | Texto visible |
|-------|---------------|
| `""` | Ordenar por... |
| `"titulo-asc"` | Título A-Z |
| `"titulo-desc"` | Título Z-A |
| `"anio-asc"` | Año más antiguo |
| `"anio-desc"` | Año más reciente |

---

## 8. Objeto libro (estructura)

```js
{
  id: 1,                           // Number — generado por generarId()
  titulo: "Cien años de soledad",  // String
  autor: "Gabriel García Márquez", // String
  categoria: "Novela",             // String — debe coincidir con options del select
  anio: 1967,                      // Number
  disponible: true                 // Boolean
}
```

---

## 9. Variables CSS recomendadas

```css
:root {
  /* Colores */
  --color-primario: #2563eb;
  --color-primario-hover: #1d4ed8;
  --color-secundario: #64748b;
  --color-exito: #16a34a;
  --color-peligro: #dc2626;
  --color-advertencia: #f59e0b;
  --color-fondo: #f8fafc;
  --color-superficie: #ffffff;
  --color-texto: #1e293b;
  --color-texto-claro: #64748b;
  --color-borde: #e2e8f0;
  --color-error: #dc2626;

  /* Tipografía */
  --fuente-principal: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --tamano-base: 1rem;
  --tamano-sm: 0.875rem;
  --tamano-lg: 1.125rem;
  --tamano-xl: 1.5rem;
  --tamano-2xl: 2rem;

  /* Espaciado */
  --espacio-xs: 0.25rem;
  --espacio-sm: 0.5rem;
  --espacio-md: 1rem;
  --espacio-lg: 1.5rem;
  --espacio-xl: 2rem;
  --espacio-2xl: 3rem;

  /* Bordes */
  --radio-sm: 0.25rem;
  --radio-md: 0.5rem;
  --radio-lg: 0.75rem;

  /* Sombras */
  --sombra-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --sombra-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --sombra-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

> Valores sugeridos. El desarrollador de T-01b puede ajustar colores y tamaños, pero debe mantener los nombres de las variables.

---

## 10. Breakpoints responsive

| Breakpoint | Rango | Columnas en `.catalogo-grid` |
|------------|-------|------------------------------|
| Desktop | 1024px+ | 3 columnas |
| Tablet | 768px – 1023px | 2 columnas |
| Mobile | < 768px | 1 columna |

```css
/* Desktop: estilos por defecto */

/* Tablet */
@media (max-width: 1023px) { ... }

/* Mobile */
@media (max-width: 767px) { ... }
```

---

## 11. Métodos JavaScript obligatorios

El proyecto debe usar como mínimo estos métodos (requisito del enunciado):

| Método | Dónde se usa |
|--------|-------------|
| `push()` | T-04a — agregar libro al array |
| `find()` | T-06a, T-06b, T-07 — localizar libro por ID |
| `filter()` | T-05, T-08, T-09a, T-09b, T-10 — eliminar, buscar, filtrar, contar |
| `map()` | T-02 o T-03 — renderizar cards o extraer IDs |
| `forEach()` | T-02 — recorrer libros para renderizar |
| `some()` o `every()` | T-13 — validación combinada de filtros |
| `sort()` | T-11 — ordenamiento |

---

## 12. Eventos requeridos

| Evento | Elemento (ID) | Tarea |
|--------|---------------|-------|
| `submit` | `#formulario-libro` | T-04a |
| `click` | `.btn-eliminar` (delegado en `#lista-libros`) | T-05 |
| `click` | `.btn-editar` (delegado en `#lista-libros`) | T-06a |
| `click` | `.btn-prestar` (delegado en `#lista-libros`) | T-07 |
| `click` | `#btn-cancelar` | T-06b |
| `input` | `#buscador` | T-08 |
| `change` | `#filtro-categoria` | T-09a |
| `change` | `#filtro-estado` | T-09b |
| `change` | `#ordenamiento` | T-11 |

**Delegación de eventos:** Los botones de las cards no existen en el HTML inicial (se crean con JS). Se debe escuchar `click` en `#lista-libros` y verificar la clase del elemento clickeado:

```js
document.querySelector('#lista-libros').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const id = Number(e.target.dataset.id);
        eliminarLibro(id);
    }
    if (e.target.classList.contains('btn-editar')) {
        const id = Number(e.target.dataset.id);
        editarLibro(id);
    }
    if (e.target.classList.contains('btn-prestar')) {
        const id = Number(e.target.dataset.id);
        togglePrestamo(id);
    }
});
```

---

## 13. Validaciones del formulario

| Campo | Regla | Mensaje sugerido |
|-------|-------|------------------|
| Título | No vacío, mínimo 2 caracteres | "El título es obligatorio (mín. 2 caracteres)" |
| Autor | No vacío, mínimo 2 caracteres | "El autor es obligatorio (mín. 2 caracteres)" |
| Categoría | value !== "" | "Selecciona una categoría" |
| Año | Numérico, entre 1900 y año actual | "Ingresa un año válido (1900 - 2026)" |

- Mensajes en los `<span>` con clase `.formulario-error`
- **NO usar `alert()`**
- Limpiar mensajes previos al inicio de cada validación

---

## 14. Referencia de tareas por archivo

### index.html

| Tarea | Qué implementa |
|-------|----------------|
| T-01a | Toda la estructura HTML (contenido de las secciones) |

### css/styles.css

| Tarea | Qué implementa |
|-------|----------------|
| T-01b | Reset, variables, layout desktop, estilos de componentes |
| T-12a | Media query tablet (768-1023px) |
| T-12b | Media query mobile (< 768px) |

### js/app.js

| Tarea | Qué implementa |
|-------|----------------|
| T-01c | Array de datos iniciales |
| T-02 | Función `renderizarLibros()` |
| T-03 | Función `generarId()` |
| T-04a | Lógica de agregar libro (evento submit) |
| T-04b | Función `validarFormulario()` |
| T-05 | Función `eliminarLibro()` |
| T-06a | Función `editarLibro()` (cargar en form) |
| T-06b | Lógica de guardar cambios + botón cancelar |
| T-07 | Función `togglePrestamo()` |
| T-08 | Función `buscarLibros()` + evento input |
| T-09a | Función `filtrarPorCategoria()` + evento change |
| T-09b | Función `filtrarPorEstado()` + evento change |
| T-10 | Función `actualizarEstadisticas()` |
| T-11 | Función `ordenarLibros()` + evento change |
| T-13 | Función `aplicarFiltrosYOrden()` (integración) |

---

## 15. Punto de entrada: `DOMContentLoaded`

### ¿Qué es?

`DOMContentLoaded` es un evento que se dispara cuando el navegador **termina de leer y construir todo el HTML**. Garantiza que cuando tu código se ejecute, todos los elementos ya existen en el DOM.

### ¿Por qué es necesario?

Sin este evento, JavaScript podría intentar seleccionar un elemento (`#lista-libros`, `#formulario-libro`, etc.) que aún no se ha creado, causando errores.

### Código en app.js

```js
document.addEventListener('DOMContentLoaded', () => {
    renderizarLibros(libros);
    actualizarEstadisticas();
});
```

### Desglose

| Parte | Qué hace |
|-------|----------|
| `document` | Representa toda la página HTML |
| `.addEventListener(...)` | "Cuando pase este evento, ejecuta esta función" |
| `'DOMContentLoaded'` | El evento: "el HTML ya se cargó completamente" |
| `() => { }` | Función flecha con el código a ejecutar |
| `renderizarLibros(libros)` | Muestra las cards de los libros en la página |
| `actualizarEstadisticas()` | Calcula y muestra los contadores |

### Flujo al cargar la página

```
1. Navegador abre index.html
2. Lee el HTML → construye el DOM
3. Carga css/styles.css → aplica estilos
4. Carga js/app.js → lee el código (pero no ejecuta DOMContentLoaded aún)
5. Termina de construir el DOM
6. Dispara evento "DOMContentLoaded"
7. Se ejecuta renderizarLibros(libros) → muestra las cards
8. Se ejecuta actualizarEstadisticas() → muestra los contadores
```

### Nota importante

En el archivo `app.js` inicial, las llamadas están **comentadas** porque las funciones aún no existen. Se descomentarán cuando T-02 y T-10 estén completadas.
