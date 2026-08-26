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
- Los datos del libro (`titulo`, `autor`, `categoria`, `anio`, `disponible`, `imagen`) están en español porque así lo define el enunciado del proyecto

### Nomenclatura de clases (prefijo de contexto)

| Prefijo | Contexto |
|---------|----------|
| `header` | Header de la app |
| `modal-` | Modal (overlay, contenedor, botones) |
| `form-` | Formulario de registro/edición |
| `controls-` | Buscador, filtros, ordenamiento |
| `stats-` | Estadísticas/contadores |
| `catalog-` | Contenedor de la lista de libros |
| `book-` | Card individual de un libro |
| `btn-` | Botones |
| `footer` | Footer de la app |

### Modificadores de estado

```
.book-status--available   → libro disponible (color verde)
.book-status--borrowed    → libro prestado (color rojo/naranja)
```

---

## 2. Mapa completo de IDs (para JavaScript)

### Header

| ID | Elemento | Propósito |
|----|----------|-----------|
| `btn-add` | `<button>` | Botón "Agregar libro" que abre el modal |

### Modal

| ID | Elemento | Propósito |
|----|----------|-----------|
| `modal-overlay` | `<div>` | Overlay oscuro (fondo) |
| `modal-close` | `<button>` | Botón ✕ para cerrar el modal |
| `modal-title` | `<h2>` | Título del modal ("Agregar libro" / "Editar libro") |

### Formulario (dentro del modal)

| ID | Elemento | Propósito |
|----|----------|-----------|
| `book-form` | `<form>` | Formulario principal |
| `title` | `<input>` | Campo título |
| `author` | `<input>` | Campo autor |
| `category` | `<select>` | Campo categoría |
| `year` | `<input>` | Campo año |
| `cover` | `<input>` | Campo URL de imagen (opcional) |
| `error-title` | `<span>` | Mensaje error título |
| `error-author` | `<span>` | Mensaje error autor |
| `error-category` | `<span>` | Mensaje error categoría |
| `error-year` | `<span>` | Mensaje error año |
| `btn-submit` | `<button>` | Botón enviar (Guardar) |
| `btn-cancel` | `<button>` | Botón cancelar |

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

### Modal

```
.modal-overlay         → <div> overlay oscuro (position fixed, cubre toda la pantalla)
.modal                 → <div> contenedor del modal (centrado, fondo blanco)
.modal-header          → <div> cabecera del modal (título + botón cerrar)
.modal-close           → <button> botón ✕
.modal-body            → <div> cuerpo del modal (formulario)
```

### Formulario (dentro del modal)

```
.form                  → <form>
.form-group            → <div> que agrupa label + input + error
.form-label            → <label>
.form-input            → <input type="text">, <input type="number">, <input type="url">
.form-select           → <select>
.form-error            → <span> de mensaje de error
.form-actions          → <div> que agrupa botones submit y cancel
```

### Controles

```
.controls-section      → <section> contenedora
.controls-search       → <div> del buscador
.controls-input        → <input> del buscador
.controls-filters      → <div> que agrupa los selects
.controls-select       → <select> de filtro/orden
```

### Estadísticas

```
.stats-section         → <section> contenedora
.stats-item            → cada <span> con el contador
```

### Catálogo

```
.catalog-section       → <section> contenedora
.catalog-grid          → <div> contenedor grid de cards
```

### Cards de libro (generadas por JS en T-02)

```
.book-card                → <article> contenedor de cada libro
.book-cover               → <img> imagen de portada
.book-cover-placeholder   → <div> placeholder cuando no hay imagen
.book-title               → <h3> título del libro
.book-author              → <p> autor
.book-meta                → <p> categoría · año
.book-id                  → <span> ID del libro
.book-status              → <span> estado del libro
.book-status--available   → modificador: disponible (verde)
.book-status--borrowed    → modificador: prestado (rojo/naranja)
.book-actions             → <div> contenedor de botones de acción
```

### Botones

```
.btn                   → estilos base de todos los botones
.btn-primary           → botón principal (guardar)
.btn-secondary         → botón secundario (cancelar)
.btn-add               → botón agregar libro (header)
.btn-edit              → botón editar (en card)
.btn-delete            → botón eliminar (en card)
.btn-loan              → botón prestar/devolver (en card)
```

### Utilidades

```
.hidden                → display: none (ocultar elementos)
```

---

## 4. Estructura del HTML (esquema completo)

```
<body>
├── <header class="header">
│     <h1> BookManager
│     <button id="btn-add" class="btn btn-add"> Agregar libro
│
├── <div id="modal-overlay" class="modal-overlay hidden">
│     <div class="modal">
│       <div class="modal-header">
│         <h2 id="modal-title"> Agregar libro
│         <button id="modal-close" class="modal-close"> ✕
│       </div>
│       <div class="modal-body">
│         <form id="book-form" class="form">
│           <div class="form-group">
│             <label class="form-label" for="title"> Título
│             <input class="form-input" id="title" type="text">
│             <span class="form-error" id="error-title"></span>
│           </div>
│           <div class="form-group">
│             <label class="form-label" for="author"> Autor
│             <input class="form-input" id="author" type="text">
│             <span class="form-error" id="error-author"></span>
│           </div>
│           <div class="form-group">
│             <label class="form-label" for="category"> Categoría
│             <select class="form-select" id="category">
│               <option value="">Seleccionar categoría</option>
│               <option value="Novela">Novela</option>
│               <option value="Ciencia ficción">Ciencia ficción</option>
│               <option value="Historia">Historia</option>
│               <option value="Tecnología">Tecnología</option>
│               <option value="Fantasía">Fantasía</option>
│               <option value="Otros">Otros</option>
│             </select>
│             <span class="form-error" id="error-category"></span>
│           </div>
│           <div class="form-group">
│             <label class="form-label" for="year"> Año
│             <input class="form-input" id="year" type="number" min="1900">
│             <span class="form-error" id="error-year"></span>
│           </div>
│           <div class="form-group">
│             <label class="form-label" for="cover"> URL de imagen (opcional)
│             <input class="form-input" id="cover" type="url"
│                    placeholder="https://...">
│           </div>
│           <div class="form-actions">
│             <button id="btn-cancel" class="btn btn-secondary"
│                     type="button"> Cancelar
│             <button id="btn-submit" class="btn btn-primary"
│                     type="submit"> Guardar
│           </div>
│         </form>
│       </div>
│     </div>
│
├── <main class="main">
│   │
│   ├── <section class="stats-section" id="stats">
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
│   ├── <section class="controls-section">
│   │     <div class="controls-search">
│   │       <input id="search" class="controls-input" type="text"
│   │              placeholder="Buscar por título o autor...">
│   │     </div>
│   │     <div class="controls-filters">
│   │       <select id="filter-category" class="controls-select">
│   │         <option value="">Todas las categorías</option>
│   │         ...opciones...
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
│   └── <section class="catalog-section">
│         <div id="book-list" class="catalog-grid">
│           <!-- JS renders book cards here -->
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

### Con imagen:
```html
<article class="book-card">
  <img class="book-cover" src="https://..." alt="Cien años de soledad">
  <p class="book-meta">Novela · 1967</p>
  <span class="book-status book-status--available">Disponible</span>
  <h3 class="book-title">Cien años de soledad</h3>
  <p class="book-author">Gabriel García Márquez</p>
  <span class="book-id">ID: 1</span>
  <div class="book-actions">
    <button class="btn btn-loan" data-id="1">Prestar</button>
    <button class="btn btn-edit" data-id="1">✏️</button>
    <button class="btn btn-delete" data-id="1">🗑️</button>
  </div>
</article>
```

### Sin imagen (placeholder):
```html
<article class="book-card">
  <div class="book-cover-placeholder"></div>
  <p class="book-meta">Historia · 2001</p>
  <span class="book-status book-status--borrowed">Prestado</span>
  <h3 class="book-title">Sapiens</h3>
  <p class="book-author">Yuval Noah Harari</p>
  <span class="book-id">ID: 5</span>
  <div class="book-actions">
    <button class="btn btn-loan" data-id="5">Devolver</button>
    <button class="btn btn-edit" data-id="5">✏️</button>
    <button class="btn btn-delete" data-id="5">🗑️</button>
  </div>
</article>
```

**Regla:** la imagen va primero en la card. Cada botón de acción tiene `data-id`.

---

## 6. Selectores JavaScript (referencia rápida)

```js
// Header
const btnAdd = document.querySelector('#btn-add');

// Modal
const modalOverlay = document.querySelector('#modal-overlay');
const modalClose = document.querySelector('#modal-close');
const modalTitle = document.querySelector('#modal-title');

// Formulario
const bookForm = document.querySelector('#book-form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const selectCategory = document.querySelector('#category');
const inputYear = document.querySelector('#year');
const inputCover = document.querySelector('#cover');
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

## 7. Funciones del modal

```js
// Abrir modal vacío (modo agregar)
function abrirModal() {
    modalOverlay.classList.remove('hidden');
    modalTitle.textContent = 'Agregar libro';
    btnSubmit.textContent = 'Guardar';
}

// Abrir modal con datos (modo editar)
function abrirModalEditar(id) {
    const libro = libros.find(l => l.id === id);
    inputTitle.value = libro.titulo;
    inputAuthor.value = libro.autor;
    selectCategory.value = libro.categoria;
    inputYear.value = libro.anio;
    inputCover.value = libro.imagen || '';
    modalTitle.textContent = 'Editar libro';
    btnSubmit.textContent = 'Guardar cambios';
    modalOverlay.classList.remove('hidden');
}

// Cerrar modal
function cerrarModal() {
    modalOverlay.classList.add('hidden');
    bookForm.reset();
    // limpiar errores
    // resetear modo a "agregar"
}
```

---

## 8. Valores de las opciones (selects)

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

> Los values de categoría están en español porque son los datos del libro (coinciden con `libro.categoria`).

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

## 9. Objeto libro (estructura)

```js
{
  id: 1,                           // Number — generado por generarId()
  titulo: "Cien años de soledad",  // String
  autor: "Gabriel García Márquez", // String
  categoria: "Novela",             // String — debe coincidir con options del select
  anio: 1967,                      // Number
  disponible: true,                // Boolean
  imagen: "https://..."            // String — URL de portada (opcional, puede ser "")
}
```

> Las propiedades están en español (requisito del enunciado). La propiedad `imagen` es un plus del equipo.

---

## 10. Variables CSS recomendadas

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
  --color-overlay: rgba(0, 0, 0, 0.5);

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

  /* Modal */
  --modal-width: 500px;
  --modal-padding: 2rem;
}
```

---

## 11. Breakpoints responsive

| Breakpoint | Rango | Columnas `.catalog-grid` | Modal |
|------------|-------|--------------------------|-------|
| Desktop | 1024px+ | 3 columnas | Centrado, max-width 500px |
| Tablet | 768px – 1023px | 2 columnas | Centrado, max-width 500px |
| Mobile | < 768px | 1 columna | Full-width con margen |

```css
/* Desktop: estilos por defecto */

/* Tablet */
@media (max-width: 1023px) { ... }

/* Mobile */
@media (max-width: 767px) { ... }
```

---

## 12. Métodos JavaScript obligatorios

| Método | Dónde se usa |
|--------|-------------|
| `push()` | T-04a — agregar libro al array |
| `find()` | T-06a, T-06b, T-07 — localizar libro por ID |
| `filter()` | T-05, T-08, T-09a, T-09b, T-03b — eliminar, buscar, filtrar, contar |
| `map()` | T-02 o T-03 — renderizar cards o extraer IDs |
| `forEach()` | T-02 — recorrer libros para renderizar |
| `some()` o `every()` | T-13 — validación combinada de filtros |
| `sort()` | T-11 — ordenamiento |

---

## 13. Eventos requeridos

| Evento | Elemento (ID/clase) | Tarea |
|--------|---------------------|-------|
| `click` | `#btn-add` | Abrir modal vacío (agregar) |
| `click` | `#modal-close` | Cerrar modal |
| `click` | `#modal-overlay` | Cerrar modal (clic fuera) |
| `click` | `#btn-cancel` | Cerrar modal + limpiar |
| `submit` | `#book-form` | T-04a — agregar/editar libro |
| `click` | `.btn-delete` (delegado en `#book-list`) | T-05 |
| `click` | `.btn-edit` (delegado en `#book-list`) | T-06a |
| `click` | `.btn-loan` (delegado en `#book-list`) | T-07 |
| `input` | `#search` | T-08 |
| `change` | `#filter-category` | T-09a |
| `change` | `#filter-status` | T-09b |
| `change` | `#sort` | T-11 |

**Delegación de eventos:** Los botones de las cards se crean con JS. Escuchar `click` en `#book-list` y verificar la clase:

```js
document.querySelector('#book-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const id = Number(e.target.dataset.id);
        eliminarLibro(id);
    }
    if (e.target.classList.contains('btn-edit')) {
        const id = Number(e.target.dataset.id);
        abrirModalEditar(id);
    }
    if (e.target.classList.contains('btn-loan')) {
        const id = Number(e.target.dataset.id);
        togglePrestamo(id);
    }
});
```

---

## 14. Validaciones del formulario

| Campo | Regla | Mensaje sugerido |
|-------|-------|------------------|
| Título | No vacío, mínimo 2 caracteres | "El título es obligatorio (mín. 2 caracteres)" |
| Autor | No vacío, mínimo 2 caracteres | "El autor es obligatorio (mín. 2 caracteres)" |
| Categoría | value !== "" | "Selecciona una categoría" |
| Año | Numérico, entre 1900 y año actual | "Ingresa un año válido (1900 - 2026)" |
| Imagen | No se valida (es opcional) | — |

- Mensajes en `<span>` con clase `.form-error`
- **NO usar `alert()`**
- Limpiar mensajes previos al inicio de cada validación

---

## 15. Referencia de tareas por archivo

### index.html

| Tarea | Qué implementa |
|-------|----------------|
| T-01a | Toda la estructura HTML: header con botón, modal oculto, main, controles, stats, catálogo, footer |

### css/styles.css

| Tarea | Qué implementa |
|-------|----------------|
| T-01b | Reset, variables, layout desktop, estilos de componentes, modal, cards, placeholder imagen |
| T-12a | Media query tablet (768-1023px) |
| T-12b | Media query mobile (< 768px), modal full-width |

### js/app.js

| Tarea | Qué implementa |
|-------|----------------|
| T-01c | Array de datos iniciales (con propiedad `imagen`) |
| T-02 | Función `renderizarLibros()` (cards con imagen o placeholder) |
| T-03 | Función `generarId()` |
| T-04a | Lógica de agregar libro + abrir/cerrar modal |
| T-04b | Función `validarFormulario()` |
| T-05 | Función `eliminarLibro()` |
| T-06a | Función `abrirModalEditar()` (cargar datos en modal) |
| T-06b | Lógica de guardar cambios + cerrar modal |
| T-07 | Función `togglePrestamo()` |
| T-08 | Función `buscarLibros()` + evento input |
| T-09a | Función `filtrarPorCategoria()` + evento change |
| T-09b | Función `filtrarPorEstado()` + evento change |
| T-03b | Función `actualizarEstadisticas()` |
| T-11 | Función `ordenarLibros()` + evento change |
| T-13 | Función `aplicarFiltrosYOrden()` (integración) |

---

## 16. Punto de entrada: `DOMContentLoaded`

### ¿Qué es?

Evento que se dispara cuando el navegador termina de leer y construir todo el HTML. Garantiza que todos los elementos existen en el DOM cuando el código se ejecuta.

### Código en app.js

```js
document.addEventListener('DOMContentLoaded', () => {
    renderizarLibros(libros);
    actualizarEstadisticas();
});
```

### Flujo al cargar la página

```
1. Navegador abre index.html
2. Lee el HTML → construye el DOM (modal oculto incluido)
3. Carga css/styles.css → aplica estilos (modal invisible por .hidden)
4. Carga js/app.js → lee el código
5. Dispara "DOMContentLoaded"
6. renderizarLibros(libros) → muestra las cards
7. actualizarEstadisticas() → muestra los contadores
8. Usuario ve el catálogo. Modal permanece oculto hasta que haga clic en "Agregar libro"
```


---

## 17. Referencia rápida por tarea

Índice dirigido: para cada tarea, las secciones de esta guía que necesitas consultar.

---

### T-01a — Estructura HTML

| Consultar | Sección |
|-----------|---------|
| Todos los IDs que debes crear | Sección 2: Mapa completo de IDs |
| Todas las clases que debes asignar | Sección 3: Mapa completo de clases |
| Esquema visual del HTML completo | Sección 4: Estructura del HTML |
| Cómo se estructura el modal | Sección 4 (bloque `modal-overlay`) |
| Valores de las opciones de los selects | Sección 8: Valores de las opciones |

---

### T-01b — CSS base y variables

| Consultar | Sección |
|-----------|---------|
| Nombres de clases a estilizar | Sección 3: Mapa completo de clases |
| Variables CSS recomendadas | Sección 10: Variables CSS recomendadas |
| Breakpoints y columnas | Sección 11: Breakpoints responsive |
| Clases del modal (overlay, contenedor) | Sección 3 (bloque "Modal") |
| Clases de cards y placeholder | Sección 3 (bloque "Cards de libro") |

---

### T-01c — Datos iniciales

| Consultar | Sección |
|-----------|---------|
| Estructura del objeto libro | Sección 9: Objeto libro |
| Valores válidos de categoría | Sección 8: Valores de las opciones (Categoría) |
| Punto de entrada de la app | Sección 16: DOMContentLoaded |

---

### T-02 — Renderizado del catálogo

| Consultar | Sección |
|-----------|---------|
| HTML que debe generar cada card | Sección 5: Estructura de una card |
| Selector del contenedor | Sección 6: Selectores JavaScript (`#book-list`) |
| Clases de la card (imagen, título, etc.) | Sección 3 (bloque "Cards de libro") |
| Métodos de array a usar | Sección 12: Métodos obligatorios (forEach/map) |

---

### T-03 — Generación de IDs

| Consultar | Sección |
|-----------|---------|
| Estructura del objeto (propiedad `id`) | Sección 9: Objeto libro |
| Métodos sugeridos | Sección 12: Métodos obligatorios (map para extraer IDs) |

---

### T-03b — Contadores y estadísticas

| Consultar | Sección |
|-----------|---------|
| Selectores de stats | Sección 6: Selectores JavaScript (`#stat-total`, `#stat-available`, `#stat-borrowed`) |
| Métodos (filter, length) | Sección 12: Métodos obligatorios |

---

### T-04a — Agregar libro + modal

| Consultar | Sección |
|-----------|---------|
| Selectores del formulario y modal | Sección 6: Selectores JavaScript |
| Funciones abrir/cerrar modal | Sección 7: Funciones del modal |
| Estructura del objeto a crear | Sección 9: Objeto libro |
| Evento submit | Sección 13: Eventos requeridos |
| Métodos (push) | Sección 12: Métodos obligatorios |

---

### T-04b — Validaciones

| Consultar | Sección |
|-----------|---------|
| Selectores de errores | Sección 6: Selectores JavaScript (errores) |
| Reglas de validación | Sección 14: Validaciones del formulario |
| Clase para mensajes de error | Sección 3 (`.form-error`) |

---

### T-05 — Eliminar libros

| Consultar | Sección |
|-----------|---------|
| Selector del contenedor para delegación | Sección 6: Selectores JavaScript (`#book-list`) |
| Clase del botón eliminar | Sección 3 (`.btn-delete`) |
| Ejemplo de delegación de eventos | Sección 13: Eventos requeridos |
| Métodos (filter) | Sección 12: Métodos obligatorios |

---

### T-06a — Abrir modal para edición

| Consultar | Sección |
|-----------|---------|
| Selectores del formulario | Sección 6: Selectores JavaScript |
| Función abrirModalEditar | Sección 7: Funciones del modal |
| Clase del botón editar | Sección 3 (`.btn-edit`) |
| Ejemplo de delegación de eventos | Sección 13: Eventos requeridos |
| Métodos (find) | Sección 12: Métodos obligatorios |

---

### T-06b — Guardar cambios + cerrar modal

| Consultar | Sección |
|-----------|---------|
| Función cerrarModal | Sección 7: Funciones del modal |
| Selectores del modal (título, botón) | Sección 6: Selectores JavaScript |
| Estructura del objeto (qué NO cambiar: id, disponible) | Sección 9: Objeto libro |

---

### T-07 — Sistema de préstamos

| Consultar | Sección |
|-----------|---------|
| Selector del contenedor para delegación | Sección 6: Selectores JavaScript (`#book-list`) |
| Clase del botón préstamo | Sección 3 (`.btn-loan`) |
| Modificadores de estado | Sección 1 (`.book-status--available`, `.book-status--borrowed`) |
| Métodos (find) | Sección 12: Métodos obligatorios |
| Ejemplo de delegación de eventos | Sección 13: Eventos requeridos |

---

### T-08 — Buscador

| Consultar | Sección |
|-----------|---------|
| Selector del buscador | Sección 6: Selectores JavaScript (`#search`) |
| Evento input | Sección 13: Eventos requeridos |
| Métodos (filter) | Sección 12: Métodos obligatorios |

---

### T-09a — Filtro por categoría

| Consultar | Sección |
|-----------|---------|
| Selector del filtro | Sección 6: Selectores JavaScript (`#filter-category`) |
| Valores de las opciones | Sección 8: Valores de las opciones (Categoría) |
| Evento change | Sección 13: Eventos requeridos |
| Métodos (filter) | Sección 12: Métodos obligatorios |

---

### T-09b — Filtro por estado

| Consultar | Sección |
|-----------|---------|
| Selector del filtro | Sección 6: Selectores JavaScript (`#filter-status`) |
| Valores de las opciones | Sección 8: Valores de las opciones (Estado) |
| Evento change | Sección 13: Eventos requeridos |
| Métodos (filter) | Sección 12: Métodos obligatorios |

---

### T-11 — Ordenamiento

| Consultar | Sección |
|-----------|---------|
| Selector del sort | Sección 6: Selectores JavaScript (`#sort`) |
| Valores de las opciones | Sección 8: Valores de las opciones (Ordenamiento) |
| Evento change | Sección 13: Eventos requeridos |
| Métodos (sort) | Sección 12: Métodos obligatorios |

---

### T-12a — Responsive desktop y tablet

| Consultar | Sección |
|-----------|---------|
| Breakpoints y columnas | Sección 11: Breakpoints responsive |
| Clases del catálogo grid | Sección 3 (`.catalog-grid`) |
| Modal responsive | Sección 11 (tabla de breakpoints, columna "Modal") |

---

### T-12b — Responsive mobile

| Consultar | Sección |
|-----------|---------|
| Breakpoints y columnas | Sección 11: Breakpoints responsive |
| Modal en mobile (full-width) | Sección 11 (tabla de breakpoints, columna "Modal") |
| Clases del catálogo y controles | Sección 3 |

---

### T-13 — Integración

| Consultar | Sección |
|-----------|---------|
| Todos los selectores de controles | Sección 6: Selectores JavaScript (controles) |
| Todos los eventos | Sección 13: Eventos requeridos |
| Métodos (some/every) | Sección 12: Métodos obligatorios |
