# BookManager — Guía de Desarrollo

Manual técnico de referencia para los desarrolladores del equipo.  
Leer antes de comenzar cualquier tarea asignada.

---

## 1. Convenciones de nomenclatura

### Regla principal

| Propósito | Se usa | Idioma | Ejemplo |
|-----------|--------|--------|---------|
| **JavaScript** (seleccionar elementos) | `id` | Inglés | `id="book-form"` |
| **CSS** (estilizar elementos) | `class` | Inglés | `class="form-input"` |
| **Propiedades del objeto libro** | variables JS | Español | `libro.titulo`, `libro.autor` |

Un elemento puede tener ambos:
```html
<input id="title" class="form-input" type="text">
```

- JS accede por ID: `document.querySelector('#title')`
- CSS estiliza por clase: `.form-input { ... }`

### ¿Por qué inglés para IDs y clases, español para datos?

- IDs y clases son convención técnica del código → inglés (estándar de la industria)
- Los datos del libro (`titulo`, `autor`, `categoria`, `anio`, `disponible`) están en español porque así lo define el enunciado del proyecto

### Nomenclatura de clases (prefijo de contexto)

Las clases usan un prefijo que indica a qué bloque pertenecen:

| Prefijo | Contexto |
|---------|----------|
| `header` | Header de la app |
| `form-` | Formulario de registro/edición |
| `controls-` | Buscador, filtros, ordenamiento |
| `stats-` | Estadísticas/contadores |
| `catalog-` | Contenedor de la lista de libros |
| `book-` | Card individual de un libro |
| `btn-` | Botones |
| `footer` | Footer de la app |

### Modificadores de estado

Para estados visuales se usa doble guión:

```
.book-status--available   → libro disponible (color verde)
.book-status--borrowed    → libro prestado (color rojo/naranja)
```

---

## 2. Mapa completo de IDs (para JavaScript)

Estos son los IDs que se usarán desde `app.js`. **No cambiar estos nombres.**

### Formulario

| ID | Elemento | Propósito |
|----|----------|-----------|
| `book-form` | `<form>` | Formulario principal |
| `title` | `<input>` | Campo título |
| `author` | `<input>` | Campo autor |
| `category` | `<select>` | Campo categoría |
| `year` | `<input>` | Campo año |
| `error-title` | `<span>` | Mensaje error título |
| `error-author` | `<span>` | Mensaje error autor |
| `error-category` | `<span>` | Mensaje error categoría |
| `error-year` | `<span>` | Mensaje error año |
| `btn-submit` | `<button>` | Botón enviar (Add/Save) |
| `btn-cancel` | `<button>` | Botón cancelar edición |

### Controles

| ID | Elemento | Propósito |
|----|----------|-----------|
| `search` | `<input>` | Campo de búsqueda |
| `filter-category` | `<select>` | Filtro por categoría |
| `filter-status` | `<select>` | Filtro por estado |
| `sort` | `<select>` | Selector de orden |

### Estadísticas

| ID | Elemento | Propósito |
|----|----------|-----------|
| `stats` | `<section>` | Contenedor de stats |
| `stat-total` | `<strong>` | Número total de libros |
| `stat-available` | `<strong>` | Número de disponibles |
| `stat-borrowed` | `<strong>` | Número de prestados |

### Catálogo

| ID | Elemento | Propósito |
|----|----------|-----------|
| `book-list` | `<div>` | Contenedor donde JS renderiza las cards |

---

## 3. Mapa completo de clases (para CSS)

### Layout general

```
.header
.main
.footer
```

### Formulario

```
.form-section      → <section> contenedora
.form              → <form>
.form-group        → <div> que agrupa label + input + error
.form-label        → <label>
.form-input        → <input type="text">, <input type="number">
.form-select       → <select>
.form-error        → <span> de mensaje de error
.form-actions      → <div> que agrupa botones submit y cancel
```

### Controles

```
.controls-section  → <section> contenedora
.controls-search   → <div> del buscador
.controls-input    → <input> del buscador
.controls-filters  → <div> que agrupa los selects
.controls-select   → <select> de filtro/orden
```

### Estadísticas

```
.stats-section     → <section> contenedora
.stats-item        → cada <span> con el contador
```

### Catálogo

```
.catalog-section   → <section> contenedora
.catalog-grid      → <div> contenedor grid de cards
```

### Cards de libro (generadas por JS en T-02)

```
.book-card                → <article> contenedor de cada libro
.book-title               → <h3> título del libro
.book-author              → <p> autor
.book-meta                → <p> categoría · año
.book-status              → <span> estado del libro
.book-status--available   → modificador: disponible (verde)
.book-status--borrowed    → modificador: prestado (rojo/naranja)
.book-actions             → <div> contenedor de botones de acción
```

### Botones

```
.btn               → estilos base de todos los botones
.btn-primary       → botón principal (agregar/guardar)
.btn-secondary     → botón secundario (cancelar)
.btn-edit          → botón editar (en card)
.btn-delete        → botón eliminar (en card)
.btn-loan          → botón prestar/devolver (en card)
```

### Utilidades

```
.hidden            → display: none (ocultar elementos)
```

---

## 4. Estructura del HTML (esquema completo)

```
<body>
├── <header class="header">
│     <h1> BookManager
│     <p>  Sistema de gestión de biblioteca digital
│
├── <main class="main">
│   │
│   ├── <section class="form-section">
│   │     <h2> Agregar libro
│   │     <form id="book-form" class="form">
│   │       <div class="form-group">
│   │         <label class="form-label" for="title">
│   │         <input class="form-input" id="title" type="text"
│   │                placeholder="Título del libro">
│   │         <span class="form-error" id="error-title"></span>
│   │       </div>
│   │       <div class="form-group">
│   │         <label class="form-label" for="author">
│   │         <input class="form-input" id="author" type="text"
│   │                placeholder="Nombre del autor">
│   │         <span class="form-error" id="error-author"></span>
│   │       </div>
│   │       <div class="form-group">
│   │         <label class="form-label" for="category">
│   │         <select class="form-select" id="category">
│   │           <option value="">Seleccionar categoría</option>
│   │           <option value="Novela">Novela</option>
│   │           <option value="Ciencia ficción">Ciencia ficción</option>
│   │           <option value="Historia">Historia</option>
│   │           <option value="Tecnología">Tecnología</option>
│   │           <option value="Fantasía">Fantasía</option>
│   │           <option value="Otros">Otros</option>
│   │         </select>
│   │         <span class="form-error" id="error-category"></span>
│   │       </div>
│   │       <div class="form-group">
│   │         <label class="form-label" for="year">
│   │         <input class="form-input" id="year" type="number"
│   │                placeholder="Año de publicación" min="1900">
│   │         <span class="form-error" id="error-year"></span>
│   │       </div>
│   │       <div class="form-actions">
│   │         <button id="btn-submit" class="btn btn-primary"
│   │                 type="submit">Agregar libro</button>
│   │         <button id="btn-cancel" class="btn btn-secondary hidden"
│   │                 type="button">Cancelar</button>
│   │       </div>
│   │     </form>
│   │
│   ├── <section class="controls-section">
│   │     <div class="controls-search">
│   │       <input id="search" class="controls-input" type="text"
│   │              placeholder="Buscar por título o autor...">
│   │     </div>
│   │     <div class="controls-filters">
│   │       <select id="filter-category" class="controls-select">
│   │         <option value="">Todas las categorías</option>
│   │         <option value="Novela">Novela</option>
│   │         <option value="Ciencia ficción">Ciencia ficción</option>
│   │         <option value="Historia">Historia</option>
│   │         <option value="Tecnología">Tecnología</option>
│   │         <option value="Fantasía">Fantasía</option>
│   │         <option value="Otros">Otros</option>
│   │       </select>
│   │       <select id="filter-status" class="controls-select">
│   │         <option value="">Todos los estados</option>
│   │         <option value="available">Disponibles</option>
│   │         <option value="borrowed">Prestados</option>
│   │       </select>
│   │       <select id="sort" class="controls-select">
│   │         <option value="">Ordenar por...</option>
│   │         <option value="title-asc">Título A-Z</option>
│   │         <option value="title-desc">Título Z-A</option>
│   │         <option value="year-asc">Año más antiguo</option>
│   │         <option value="year-desc">Año más reciente</option>
│   │       </select>
│   │     </div>
│   │
│   ├── <section id="stats" class="stats-section">
│   │     <span class="stats-item">
│   │       Total: <strong id="stat-total">0</strong>
│   │     </span>
│   │     <span class="stats-item">
│   │       Disponibles: <strong id="stat-available">0</strong>
│   │     </span>
│   │     <span class="stats-item">
│   │       Prestados: <strong id="stat-borrowed">0</strong>
│   │     </span>
│   │
│   └── <section class="catalog-section">
│         <div id="book-list" class="catalog-grid">
│           <!-- Vacío: JS renderiza las cards aquí (T-02) -->
│         </div>
│
├── <footer class="footer">
│     <p> BookManager © 2026 — Proyecto Integrador G4
│
└── <script src="js/app.js">
```

---

## 5. Estructura de una card (referencia para T-02)

Cada libro se renderiza como un `<article>` dentro de `#book-list`:

```html
<article class="book-card">
  <h3 class="book-title">Cien años de soledad</h3>
  <p class="book-author">Gabriel García Márquez</p>
  <p class="book-meta">Novela · 1967</p>
  <span class="book-status book-status--available">Disponible</span>
  <div class="book-actions">
    <button class="btn btn-edit" data-id="1">Editar</button>
    <button class="btn btn-delete" data-id="1">Eliminar</button>
    <button class="btn btn-loan" data-id="1">Prestar</button>
  </div>
</article>
```

Si el libro está prestado:
```html
<span class="book-status book-status--borrowed">Prestado</span>
...
<button class="btn btn-loan" data-id="1">Devolver</button>
```

**Importante:** cada botón de acción debe tener `data-id` con el ID del libro.

---

## 6. Selectores JavaScript (referencia rápida)

```js
// Formulario
const bookForm = document.querySelector('#book-form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const selectCategory = document.querySelector('#category');
const inputYear = document.querySelector('#year');
const btnSubmit = document.querySelector('#btn-submit');
const btnCancel = document.querySelector('#btn-cancel');

// Errores
const errorTitle = document.querySelector('#error-title');
const errorAuthor = document.querySelector('#error-author');
const errorCategory = document.querySelector('#error-category');
const errorYear = document.querySelector('#error-year');

// Controles
const search = document.querySelector('#search');
const filterCategory = document.querySelector('#filter-category');
const filterStatus = document.querySelector('#filter-status');
const sort = document.querySelector('#sort');

// Estadísticas
const statTotal = document.querySelector('#stat-total');
const statAvailable = document.querySelector('#stat-available');
const statBorrowed = document.querySelector('#stat-borrowed');

// Catálogo
const bookList = document.querySelector('#book-list');
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

> **Nota:** los values de categoría están en español porque son los datos del libro (coinciden con `libro.categoria`).

### Estado (filtro)

| value | Texto visible |
|-------|---------------|
| `""` | Todos los estados |
| `"available"` | Disponibles |
| `"borrowed"` | Prestados |

### Ordenamiento

| value | Texto visible |
|-------|---------------|
| `""` | Ordenar por... |
| `"title-asc"` | Título A-Z |
| `"title-desc"` | Título Z-A |
| `"year-asc"` | Año más antiguo |
| `"year-desc"` | Año más reciente |

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

> **Las propiedades del objeto están en español** (requisito del enunciado del proyecto).

---

## 9. Variables CSS recomendadas

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #64748b;
  --color-success: #16a34a;
  --color-danger: #dc2626;
  --color-warning: #f59e0b;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-text-light: #64748b;
  --color-border: #e2e8f0;
  --color-error: #dc2626;

  /* Typography */
  --font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

> Valores sugeridos. El desarrollador de T-01b puede ajustar colores y tamaños, pero debe mantener los nombres de las variables.

---

## 10. Breakpoints responsive

| Breakpoint | Rango | Columnas en `.catalog-grid` |
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
| `submit` | `#book-form` | T-04a |
| `click` | `.btn-delete` (delegado en `#book-list`) | T-05 |
| `click` | `.btn-edit` (delegado en `#book-list`) | T-06a |
| `click` | `.btn-loan` (delegado en `#book-list`) | T-07 |
| `click` | `#btn-cancel` | T-06b |
| `input` | `#search` | T-08 |
| `change` | `#filter-category` | T-09a |
| `change` | `#filter-status` | T-09b |
| `change` | `#sort` | T-11 |

**Delegación de eventos:** Los botones de las cards no existen en el HTML inicial (se crean con JS). Se debe escuchar `click` en `#book-list` y verificar la clase del elemento clickeado:

```js
document.querySelector('#book-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const id = Number(e.target.dataset.id);
        eliminarLibro(id);
    }
    if (e.target.classList.contains('btn-edit')) {
        const id = Number(e.target.dataset.id);
        editarLibro(id);
    }
    if (e.target.classList.contains('btn-loan')) {
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

- Mensajes en los `<span>` con clase `.form-error`
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

Sin este evento, JavaScript podría intentar seleccionar un elemento (`#book-list`, `#book-form`, etc.) que aún no se ha creado, causando errores.

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
