# BookManager — Product Backlog

## Información del proyecto

| Campo | Valor |
|-------|-------|
| **Proyecto** | BookManager — Sistema de gestión de biblioteca digital |
| **Repositorio** | `wigsdev/gestor-biblioteca-digital` |
| **Team Leader** | Wilmer (@wigsdev) |
| **Duración** | 3 semanas |
| **Stack** | HTML5 · CSS3 · JavaScript Vanilla |
| **Convenciones** | Conventional Commits · GitHub Flow · Squash Merge |

---

## Sistema de gestión

### Asignación de tareas

- El Team Leader asigna tareas vía GitHub Issues (assignee + due date).
- La fecha límite se define al momento de asignar según complejidad.
- Si no se cumple el deadline, el Team Leader puede reasignar o ejecutar la tarea.
- Las tareas son atómicas e independientes (salvo dependencias documentadas).

### Estados

| Estado | Label en GitHub | Significado |
|--------|----------------|-------------|
| 🔲 Backlog | — | Sin asignar, disponible |
| 👤 Assigned | `status: assigned` | Delegada con fecha límite |
| 🔨 In Progress | `status: in-progress` | Desarrollador trabajando |
| 🔍 In Review | `status: in-review` | PR creado, esperando review |
| ✅ Done | — (issue cerrado) | Mergeado a main |

### Prioridades

| Label | Color | Significado |
|-------|-------|-------------|
| `priority: critical` | 🔴 #B60205 | Bloqueante — sin esto nadie avanza |
| `priority: high` | 🟠 #D93F0B | Core — funcionalidad esencial |
| `priority: medium` | 🟡 #FBCA04 | Importante pero no bloquea a otros |
| `priority: low` | 🟢 #0E8A16 | Mejoras y detalles finales |

### Categorías

| Label | Significado |
|-------|-------------|
| `type: feature` | Nueva funcionalidad |
| `type: structure` | Estructura base del proyecto |
| `type: style` | CSS, diseño, responsive |
| `type: integration` | Integración entre funcionalidades |

### Definition of Done

Referencia completa en [`docs/workflow.md`](./workflow.md#6-definition-of-done-dod).

Una tarea está **Done** cuando:
1. Criterios de aceptación cumplidos
2. Funciona en navegador sin errores en consola
3. PR creado con la plantilla del proyecto
4. Commits siguen Conventional Commits
5. Code Review aprobado por Team Leader
6. Merge (squash) a `main`
7. Branch eliminado
8. Issue cerrado

---

## Backlog de tareas

---

### T-01a — Estructura HTML

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: critical` |
| **Tipo** | `type: structure` |
| **Dependencias** | Ninguna |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-01a-estructura-html` |
| **Commit ejemplo** | `feat(T-01a): crear estructura HTML semántica con contenedores` |

**Descripción:**
Crear `index.html` con la estructura semántica completa y todos los contenedores que el equipo necesita para trabajar.

**Entregables:**
- `index.html` con estructura semántica (header, main, section, article, footer)
- Header con título "BookManager" + botón "Agregar libro" (id="btn-add")
- Modal oculto (id="modal-overlay", class="hidden") con: modal-header (título + botón cerrar), modal-body (formulario)
- Formulario dentro del modal con IDs: book-form, title, author, category, year, cover + spans de error
- Controles: search, filter-category, filter-status, sort
- Estadísticas: stats, stat-total, stat-available, stat-borrowed
- Catálogo: book-list
- Enlace a `css/styles.css` y `js/app.js`
- Meta viewport para responsive

**Referencia técnica:** Ver [`docs/guia-desarrollo.md`](./guia-desarrollo.md) para IDs, clases y estructura completa.

**Criterios de aceptación:**
- [ ] El archivo carga sin errores en consola
- [ ] Todos los contenedores tienen los IDs definidos en la guía de desarrollo
- [ ] El header tiene botón "Agregar libro" con id="btn-add"
- [ ] El modal existe en el HTML con clase "hidden" (no visible al cargar)
- [ ] El formulario tiene los 5 campos (title, author, category, year, cover) + spans de error
- [ ] El formulario tiene botón submit y botón cancelar
- [ ] Los controles (search, filtros, sort) existen con sus IDs
- [ ] Se enlazan correctamente styles.css y app.js
- [ ] Tiene `<meta name="viewport">` configurado
- [ ] HTML usa etiquetas semánticas (header, main, section, footer)
- [ ] Todos los `<label>` tienen atributo `for` apuntando al ID del input

---

### T-01b — CSS base y variables de diseño

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: critical` |
| **Tipo** | `type: style` |
| **Dependencias** | T-01a |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-01b-css-base` |
| **Commit ejemplo** | `style(T-01b): definir variables CSS y layout base desktop` |

**Descripción:**
Crear `css/styles.css` con reset, variables de diseño y layout base para desktop.

**Entregables:**
- Reset CSS (box-sizing, margin/padding 0)
- Variables en `:root` para: colores, tipografía, espaciado, border-radius, sombras, overlay
- Layout desktop con CSS Grid o Flexbox
- Estilos del modal: overlay (position fixed, background overlay), contenedor centrado, header, body
- Estilos base de formulario, botones, inputs y cards
- Estilos de cards con imagen (`.book-cover`) y placeholder (`.book-cover-placeholder`)
- Clase utilitaria `.hidden { display: none; }`

**Referencia técnica:** Ver [`docs/guia-desarrollo.md`](./guia-desarrollo.md) para nomenclatura de clases y variables recomendadas.

**Criterios de aceptación:**
- [ ] Existe `css/styles.css` vinculado correctamente
- [ ] Reset CSS aplicado
- [ ] Variables CSS definidas en `:root` (colores, fuente, espaciados, overlay)
- [ ] Layout desktop organizado con Grid/Flexbox
- [ ] Modal estilizado: overlay cubre pantalla, modal centrado en desktop
- [ ] Cards con espacio para imagen y placeholder si no hay
- [ ] Botones e inputs tienen estilos base funcionales
- [ ] Clase `.hidden` implementada (display: none)
- [ ] No usa frameworks CSS externos

---

### T-01c — Datos iniciales en JavaScript

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: critical` |
| **Tipo** | `type: structure` |
| **Dependencias** | T-01a |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-01c-datos-iniciales` |
| **Commit ejemplo** | `feat(T-01c): agregar array de 8 libros precargados` |

**Descripción:**
Crear `js/app.js` con el array de libros precargados (mínimo 8) y el punto de entrada de la aplicación.

**Entregables:**
- Array `libros` con 8+ objetos
- Propiedades por libro: `id`, `titulo`, `autor`, `categoria`, `anio`, `disponible`, `imagen`
- Variedad de categorías (mínimo 4 distintas)
- Mix de estados (disponibles y prestados)
- Algunos libros con URL de imagen, algunos con `""` (para probar placeholder)
- `DOMContentLoaded` como punto de entrada

**Criterios de aceptación:**
- [ ] Array `libros` tiene 8+ objetos
- [ ] Cada objeto tiene las 7 propiedades: id, titulo, autor, categoria, anio, disponible, imagen
- [ ] Hay al menos 4 categorías diferentes
- [ ] Hay libros con `disponible: true` y `disponible: false`
- [ ] Hay libros con URL de imagen y libros con `imagen: ""`
- [ ] IDs únicos y secuenciales
- [ ] `DOMContentLoaded` inicializa la app
- [ ] Sin errores en consola al cargar

---

### T-02 — Renderizado del catálogo

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: critical` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01a, T-01c |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-02-renderizado-catalogo` |
| **Commit ejemplo** | `feat(T-02): implementar renderizado dinámico de cards de libros` |

**Descripción:**
Implementar la función que genera dinámicamente las tarjetas de libros en el DOM a partir del array.

**Entregables:**
- Función `renderizarLibros(listaLibros)` que acepta un array como parámetro
- Cards con: imagen (o placeholder), título, autor, categoría, año, estado, ID
- La imagen va primero en la card. Si `libro.imagen` es vacío, mostrar placeholder
- Botones por card: Editar, Eliminar, Prestar/Devolver con `data-id`
- Limpieza del contenedor antes de re-renderizar

**Criterios de aceptación:**
- [ ] Al cargar se muestran los 8+ libros precargados
- [ ] Ningún libro está hardcodeado en HTML
- [ ] Cada card muestra: imagen (o placeholder), título, autor, categoría·año, estado, ID
- [ ] La imagen se muestra primero en la card
- [ ] Si un libro no tiene imagen, se muestra un div placeholder
- [ ] Botones tienen atributo `data-id` con el ID del libro
- [ ] Se usa `forEach()` o `map()` para recorrer
- [ ] La función acepta cualquier array (es reutilizable)
- [ ] Se limpia `innerHTML` antes de renderizar

---

### T-02b — Alinear clases de cards con la guía

| Campo              | Valor                                             |
| ------------------ | ------------------------------------------------- |
| **Prioridad**      | `priority: medium`                                |
| **Tipo**           | `type: integration`                               |
| **Dependencias**   | T-02, T-01b                                       |
| **Complejidad**    | Baja (medio día)                                  |
| **Branch**         | `feature/T-02b-alinear-clases-cards`              |
| **Commit ejemplo** | `fix(T-02b): alinear clases de cards con la guía` |

**Descripción:**
Corregir las clases CSS generadas por JavaScript para que coincidan con los nombres definidos en la guía de desarrollo y puedan ser estilizadas correctamente por `css/styles.css`.

**Entregables:**

- Usar `book-cover-placeholder` para libros sin imagen
- Usar `book-status--borrowed` para libros prestados
- Usar `book-meta` para categoría y año
- Verificar que las clases generadas por JavaScript coincidan con las clases definidas en `css/styles.css`

**Criterios de aceptación:**

- [ ] El placeholder sin imagen usa la clase `book-cover-placeholder`
- [ ] Los libros prestados usan las clases `book-status` y `book-status--borrowed`
- [ ] Categoría y año usan la clase `book-meta`
- [ ] Las clases anteriores coinciden con la nomenclatura de `docs/guia-desarrollo.md`
- [ ] Las cards con imagen y sin imagen se muestran correctamente
- [ ] No se modifican los IDs definidos para JavaScript
- [ ] La aplicación carga sin errores en consola

---

### T-03 — Generación de IDs únicos

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01c |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-03-generar-id` |
| **Commit ejemplo** | `feat(T-03): implementar generarId basado en ID máximo del array` |

**Descripción:**
Función que genera el siguiente ID único basándose en el mayor ID existente en el array.

**Entregables:**
- Función `generarId()` que retorna `maxId + 1`
- Maneja array vacío (retorna 1)
- No depende de `libros.length`

**Criterios de aceptación:**
- [ ] Retorna un número único en cada invocación
- [ ] No duplica IDs aunque se eliminen libros intermedios
- [ ] Se basa en `Math.max()` o equivalente sobre los IDs existentes
- [ ] Con array vacío retorna 1
- [ ] No requiere input del usuario

---

### T-03b — Contadores y estadísticas

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-03b-contadores` |
| **Commit ejemplo** | `feat(T-03b): mostrar estadísticas dinámicas del catálogo` |

**Descripción:**
Mostrar contadores dinámicos: total, disponibles y prestados. Las tareas T-04a, T-05 y T-07 invocan esta función — por eso debe estar mergeada antes que ellas. T-03b solo la implementa.

**Entregables:**
- Función `actualizarEstadisticas()`
- Calcula y renderiza: total, disponibles, prestados
- Se invoca después de cada operación que modifique el array

**Criterios de aceptación:**
- [ ] Muestra: Total, Disponibles, Prestados
- [ ] Valores calculados con JS (no hardcodeados)
- [ ] Se actualiza al agregar
- [ ] Se actualiza al eliminar
- [ ] Se actualiza al prestar/devolver
- [ ] Se usa `filter()` para contar por estado
- [ ] Se usa `.length` para totales

---

### T-04a — Agregar libro al catálogo

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01a, T-01c, T-02, T-03, T-03b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-04a-agregar-libro` |
| **Commit ejemplo** | `feat(T-04a): implementar captura y registro de nuevo libro` |

**Descripción:**
Capturar datos del formulario, crear el objeto libro y agregarlo al catálogo. Incluye lógica de abrir/cerrar modal.

**Entregables:**
- Botón "Agregar libro" (`#btn-add`) abre el modal vacío
- `addEventListener("submit", ...)` con `preventDefault()` en `#book-form`
- Captura de valores de inputs (incluido `cover`)
- Objeto libro con `generarId()` + `disponible: true` + `imagen`
- `push()` al array
- Llamada a `renderizarLibros()` después de agregar
- Llamada a `actualizarEstadisticas()` después de agregar
- Cerrar modal después de guardar exitosamente
- Limpiar formulario post-registro
- Cerrar modal al clic en ✕ (`#modal-close`), en el overlay (`#modal-overlay`), o en "Cancelar" (`#btn-cancel`)

**Criterios de aceptación:**
- [ ] Clic en "Agregar libro" (header) abre el modal vacío
- [ ] Se puede agregar un libro con datos correctos
- [ ] Aparece inmediatamente en la lista
- [ ] ID generado automáticamente
- [ ] `disponible` se asigna como `true`
- [ ] Campo imagen se captura (puede estar vacío)
- [ ] Modal se cierra después de guardar exitosamente
- [ ] Formulario se limpia tras registro exitoso
- [ ] Modal se cierra al clic en ✕, overlay o "Cancelar"
- [ ] Se usa `addEventListener("submit", ...)` + `preventDefault()`
- [ ] Se usa `push()` para agregar al array
- [ ] Se invoca `actualizarEstadisticas()` después de agregar

---

### T-04b — Validaciones del formulario

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01a, T-04a |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-04b-validaciones` |
| **Commit ejemplo** | `feat(T-04b): agregar validaciones con mensajes de error en DOM` |

**Descripción:**
Validar todos los campos del formulario mostrando mensajes de error en la interfaz (no `alert()`).

**Entregables:**
- Función `validarFormulario()` que retorna `true`/`false`
- Validaciones: título (no vacío, min 2 chars), autor (no vacío, min 2 chars), categoría (seleccionada), año (numérico, 1900 - año actual)
- Mensajes de error renderizados en el DOM
- Se limpian al corregir y reenviar
- Se ejecuta ANTES de agregar

**Criterios de aceptación:**
- [ ] Título vacío → mensaje de error visible
- [ ] Autor vacío → mensaje de error visible
- [ ] Categoría no seleccionada → mensaje de error visible
- [ ] Año inválido (no numérico o fuera de 1900-actual) → error visible
- [ ] Mensajes en DOM (no `alert()`)
- [ ] Con errores NO se agrega el libro
- [ ] Mensajes desaparecen al corregir y reenviar
- [ ] Función `validarFormulario()` separada y reutilizable

---

### T-05 — Eliminar libros

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02, T-03b |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-05-eliminar-libros` |
| **Commit ejemplo** | `feat(T-05): implementar eliminación de libro con filter` |

**Descripción:**
Funcionalidad del botón "Eliminar" que remueve el libro del array y actualiza la interfaz.

**Entregables:**
- Función `eliminarLibro(id)`
- Uso de `filter()` para generar nuevo array
- Delegación de eventos en `#book-list` para detectar clic en `.btn-delete`
- Llamada a `renderizarLibros()` post-eliminación
- Llamada a `actualizarEstadisticas()` post-eliminación

**Criterios de aceptación:**
- [ ] Clic en "Eliminar" → libro desaparece
- [ ] Se elimina del array (no solo del DOM)
- [ ] Se usa `filter()` para excluir el libro
- [ ] Interfaz actualizada con `renderizarLibros()`
- [ ] Se invoca `actualizarEstadisticas()` después de eliminar
- [ ] Identificación por `data-id`
- [ ] Funciona sin importar la posición en el array

---

### T-06 — Editar libros del catálogo

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02, T-04a, T-04b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-06-editar-libros` |
| **Commit ejemplo** | `feat(T-06): implementar edición de libros del catálogo` |

**Descripción:**
Al hacer clic en "Editar" (✏️), abrir el modal con los datos del libro precargados, permitir modificar sus propiedades y guardar los cambios actualizando el objeto existente en el array y la interfaz.

**Entregables:**
- Función `abrirModalEditar(id)` que abre el modal precargado con datos del libro
- Delegación de eventos en `#book-list` para detectar clic en `.btn-edit`
- `find()` para localizar el libro por ID
- Precargar todos los campos (`titulo`, `autor`, `categoria`, `anio`, `imagen`)
- Cambiar título del modal a "Editar libro" y botón a "Guardar cambios"
- Variable `libroEditandoId` para trackear el modo de edición
- Función `guardarEdicion()` para modificar el objeto existente en el array (sin alterar `id` ni `disponible`)
- Validaciones activas al guardar (utilizando `validarFormulario()`)
- Post-guardado: cerrar modal, limpiar formulario, resetear modo a "Agregar libro" y re-renderizar catálogo/estadísticas

**Criterios de aceptación:**
- [ ] Clic en "Editar" (✏️) → modal se abre con los datos precargados (incluida imagen)
- [ ] Se usa `find()` para localizar el libro por ID
- [ ] Título del modal cambia a "Editar libro"
- [ ] Botón del modal cambia a "Guardar cambios"
- [ ] Se guarda la referencia `libroEditandoId`
- [ ] Clic en "Editar" en otro libro → modal se actualiza con los nuevos datos
- [ ] Al guardar, el libro se actualiza en el array (no se duplica)
- [ ] Se modifican propiedades del objeto existente (`titulo`, `autor`, `categoria`, `anio`, `imagen`)
- [ ] ID NO se modifica
- [ ] `disponible` NO se modifica
- [ ] Validaciones del formulario se aplican al guardar
- [ ] Modal se cierra después de guardar exitosamente
- [ ] Tras guardar o cancelar, el modal se resetea (título vuelve a "Agregar libro", botón vuelve a "Guardar", `libroEditandoId` se limpia a `null`)
- [ ] La interfaz y estadísticas reflejan los nuevos datos

---

### T-07 — Sistema de préstamos

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02, T-03b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-07-sistema-prestamos` |
| **Commit ejemplo** | `feat(T-07): implementar toggle de préstamo/devolución` |

**Descripción:**
Toggle que cambia el estado `disponible` del libro y actualiza la interfaz.

**Entregables:**
- Función `togglePrestamo(id)` que invierte `disponible`
- Delegación de eventos en `#book-list` para detectar clic en `.btn-loan`
- Botón dinámico: "Prestar" ↔ "Devolver"
- Estado visual actualizado en la card
- `find()` para localizar el libro
- Llamada a `actualizarEstadisticas()` después del cambio

**Criterios de aceptación:**
- [ ] Libro disponible → botón "Prestar"
- [ ] Libro prestado → botón "Devolver"
- [ ] Clic cambia estado en array Y en interfaz
- [ ] Texto estado se actualiza: "Disponible" / "Prestado"
- [ ] Propiedad `disponible` se invierte (true ↔ false)
- [ ] Se usa `find()` para localizar por ID
- [ ] Se re-renderiza después del cambio
- [ ] Se invoca `actualizarEstadisticas()` después de prestar/devolver

---

### T-08 — Buscador en tiempo real

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-08-buscador` |
| **Commit ejemplo** | `feat(T-08): implementar búsqueda por título y autor case-insensitive` |

**Descripción:**
Campo de búsqueda que filtra libros por título o autor mientras el usuario escribe.

**Entregables:**
- Función `buscarLibros(termino)` que retorna array filtrado
- Case-insensitive con `toLowerCase()`
- Busca en título Y autor
- Evento `input` para respuesta en tiempo real
- No modifica el array original

**Criterios de aceptación:**
- [ ] Al escribir se filtran los libros mostrados
- [ ] Busca por título Y por autor
- [ ] "orwell" = "ORWELL" = "Orwell" (case-insensitive)
- [ ] Input vacío → muestra todos los libros
- [ ] Se usa `filter()` + `toLowerCase()`
- [ ] Evento `input` para tiempo real
- [ ] Retorna array filtrado (no muta el original)

---

### T-09a — Filtro por categoría

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-09a-filtro-categoria` |
| **Commit ejemplo** | `feat(T-09a): agregar filtro de libros por categoría` |

**Descripción:**
Selector que filtra libros según la categoría seleccionada.

**Entregables:**
- Select: Todas, Novela, Ciencia ficción, Historia, Tecnología, Fantasía, Otros
- Función `filtrarPorCategoria(categoria)` que retorna array filtrado
- "Todas" muestra todos
- Evento `change`

**Criterios de aceptación:**
- [ ] Selector con todas las categorías disponibles
- [ ] Al seleccionar → solo libros de esa categoría
- [ ] "Todas" → muestra todos
- [ ] Se usa `filter()`
- [ ] Evento `change` en el selector
- [ ] Retorna array filtrado (no muta original)

---

### T-09b — Filtro por estado

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-09b-filtro-estado` |
| **Commit ejemplo** | `feat(T-09b): agregar filtro de libros por disponibilidad` |

**Descripción:**
Selector que filtra libros según estado de disponibilidad.

**Entregables:**
- Select: Todos, Disponibles, Prestados
- Función `filtrarPorEstado(estado)` que retorna array filtrado
- "Todos" muestra todos
- Evento `change`

**Criterios de aceptación:**
- [ ] Selector: Todos, Disponibles, Prestados
- [ ] "Disponibles" → solo `disponible: true`
- [ ] "Prestados" → solo `disponible: false`
- [ ] "Todos" → muestra todos
- [ ] Se usa `filter()`
- [ ] Evento `change`
- [ ] Retorna array filtrado (no muta original)

---

### T-11 — Ordenamiento del catálogo

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-11-ordenamiento` |
| **Commit ejemplo** | `feat(T-11): implementar ordenamiento por título y año` |

**Descripción:**
Selector que ordena la lista de libros según el criterio elegido.

**Entregables:**
- Select: Título A-Z, Título Z-A, Año ascendente, Año descendente
- Función `ordenarLibros(criterio, listaLibros)` con `sort()`
- Re-renderizado con nuevo orden
- Trabaja sobre copia del array

**Criterios de aceptación:**
- [ ] Ordena título A-Z (ascendente)
- [ ] Ordena título Z-A (descendente)
- [ ] Ordena año ascendente (antiguo primero)
- [ ] Ordena año descendente (reciente primero)
- [ ] Re-renderiza con nuevo orden
- [ ] Usa `sort()` con comparador personalizado
- [ ] Evento `change` en selector
- [ ] Ordena sobre copia (no muta innecesariamente)

---

### T-12a — Responsive: tablet

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: style` |
| **Dependencias** | T-01a, T-01b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-12a-layout-tablet` |
| **Commit ejemplo** | `style(T-12a): implementar layout responsive para tablet` |

**Descripción:**
Diseño responsive para pantallas de tablet (768px - 1023px). El layout base del CSS ya soporta pantallas desktop.

**Entregables:**
- Grid de cards adaptado a 2 columnas en tablet
- Layout de stats y filtros adaptado para rango tablet (768px - 1023px)
- Modal centrado en pantalla tablet
- Media query para tablet (`@media (max-width: 1023px)`)

**Criterios de aceptación:**
- [ ] Tablet (768-1023px): grid 2 columnas
- [ ] Stats y filtros reorganizados para tablet
- [ ] Modal se ve correctamente centrado en tablet
- [ ] Al menos 1 media query para tablet
- [ ] Sin overflow horizontal

---

### T-12b — Responsive: mobile

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: style` |
| **Dependencias** | T-01a, T-01b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-12b-layout-mobile` |
| **Commit ejemplo** | `style(T-12b): diseño mobile-first para pantallas < 768px` |

**Descripción:**
Diseño responsive para móvil (< 768px).

**Entregables:**
- Cards en 1 columna
- Modal full-width con margen lateral mínimo
- Filtros/buscador apilados verticalmente
- Botones mínimo 44px (touch target)
- Media query para < 768px

**Criterios de aceptación:**
- [ ] Mobile (< 768px): cards en 1 columna
- [ ] Modal ocupa ancho completo (con margen mínimo a los lados)
- [ ] Botones con min 44px de altura (touch-friendly)
- [ ] Filtros y buscador apilados verticalmente
- [ ] Sin scroll horizontal
- [ ] Texto legible sin zoom
- [ ] Al menos 1 media query para este breakpoint

---

### T-12c — Mejoras del CSS base y refinamiento visual

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: style` |
| **Dependencias** | T-01b |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-12c-mejoras-css-base` |
| **Commit ejemplo** | `style(T-12c): incorporar fuente Lora, iconos SVG vectoriales y sombras suaves` |

**Descripción:**
Refinar los estilos base de `css/styles.css` incorporando la tipografía 'Lora' para encabezados, iconos vectoriales SVG para las acciones de tarjetas (editar/eliminar) y controles de la interfaz, sombras suaves y micro-interacciones.

**Entregables:**
- Importación de fuente Google Fonts 'Lora' para encabezados y títulos de tarjetas
- Reemplazo de emojis de texto por iconos vectoriales SVG embebidos en `.btn-edit` y `.btn-delete`
- Iconos vectoriales SVG embebidos en el buscador `.controls-input` y selector desplegable `.controls-select`
- Animación de transiciones y elevación suave (`transform: translateY(-3px)`) al interactuar con `.book-card`
- Variables estandarizadas de sombra (`--shadow-card`, `--shadow-modal`)

**Criterios de aceptación:**
- [ ] Títulos y encabezados usan la fuente 'Lora'
- [ ] Botones de edición y eliminación usan iconos vectoriales SVG
- [ ] Buscador y selectores cuentan con iconos SVG vectoriales de fondo
- [ ] Tarjetas tienen elevación y sombra sutil en estado hover
- [ ] Mantiene 100% de compatibilidad con las clases de la guía de desarrollo y `js/app.js`

---

### T-13 — Integración: búsqueda + filtros + ordenamiento

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: low` |
| **Tipo** | `type: integration` |
| **Dependencias** | T-08, T-09a, T-09b, T-11 |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-13-integracion` |
| **Commit ejemplo** | `feat(T-13): crear función central que combine filtros y ordenamiento` |

**Descripción:**
Función central que aplica búsqueda + filtros + ordenamiento simultáneamente sin conflictos.

**Entregables:**
- Función `aplicarFiltrosYOrden()` que combina todos los criterios activos
- Se invoca desde cualquier cambio en buscador, filtros u ordenamiento
- Filtros activos se mantienen al modificar otro
- Usa `some()` o `every()` en alguna validación

**Criterios de aceptación:**
- [ ] Buscar + filtrar categoría + filtrar estado + ordenar funcionan simultáneamente
- [ ] Cambiar un filtro mantiene los demás activos
- [ ] Limpiar búsqueda respeta filtros activos
- [ ] Función central combina criterios antes de renderizar
- [ ] Se usa `some()` o `every()` en la lógica
---

### T-14 — Persistencia de Datos en LocalStorage

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-13 |
| **Complejidad** | Media (1 día) |
| **Branch** | `feature/T-14-persistencia-localstorage` |
| **Commit ejemplo** | `feat(T-14): guardar y cargar estado de libros en localStorage` |

**Descripción:**
Sincronizar el array `libros` con `localStorage` del navegador para evitar la pérdida de información al recargar la página (`F5`).

**Entregables:**
- Helper `guardarLibrosEnStorage()` que guarde `libros` serializado en JSON en `localStorage`
- Helper `cargarLibrosDeStorage()` que recupere la lista guardada o cargue los 8 libros precargados por defecto si no existen datos previos
- Invocación automática de guardado tras `agregarLibro()`, `guardarEdicion()`, `deleteBook()` y `togglePrestamo()`

**Criterios de aceptación:**
- [ ] Al iniciar (`DOMContentLoaded`), carga la información persistida en `localStorage` si existe
- [ ] Si es la primera visita del usuario, carga el array inicial de 8 libros
- [ ] Operaciones de alta, edición, baja y préstamo actualizan inmediatamente `localStorage`
- [ ] Al presionar `F5` o cerrar y abrir el navegador, todos los cambios persisten correctamente
- [ ] Sin errores en consola si `localStorage` está vacío o deshabilitado

---

### T-15 — Sistema de Notificaciones Flotantes (Toast Alerts)

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01b, T-13 |
| **Complejidad** | Media (1 día) |
| **Branch** | `feature/T-15-notificaciones-toast` |
| **Commit ejemplo** | `feat(T-15): implementar sistema de notificaciones toast flotantes` |

**Descripción:**
Proporcionar retroalimentación visual inmediata al usuario cuando realiza cualquier acción en el sistema (agregar, editar, eliminar o prestar).

**Entregables:**
- Contenedor flotante `<div id="toast-container">` en `index.html` con posición fija
- Estilos CSS en `styles.css` para notificaciones con animación `slideIn` y `fadeOut`
- Función helper `mostrarToast(mensaje, tipo)` con variantes: `success`, `danger`, `info`
- Integración de notificaciones al completar las operaciones del CRUD

**Criterios de aceptación:**
- [ ] Aparecen alertas flotantes en la esquina superior/inferior del viewport
- [ ] Soporta notificaciones verdes (éxito), rojas (eliminación/error) y amarillas/azules (información)
- [ ] Las notificaciones se autodestruyen automáticamente tras 3 segundos
- [ ] Se activa un aviso visual adecuado al agregar, editar, eliminar o conmutar préstamo de un libro

---

### T-16 — Modal de Confirmación de Eliminación

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-05, T-11 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-16-modal-confirmacion-eliminar` |
| **Commit ejemplo** | `feat(T-16): agregar modal de confirmación antes de eliminar un libro` |

**Descripción:**
Prevenir la eliminación accidental de libros agregando una ventana modal de confirmación antes de remover el elemento de la memoria.

**Entregables:**
- Modal `<div id="modal-confirm-overlay" class="modal-overlay hidden">` en `index.html`
- Texto descriptivo indicando el título del libro seleccionado para eliminación
- Botones `[Confirmar Eliminación]` y `[Cancelar]`
- Lógica JS que capture la decisión del usuario antes de invocar `deleteBook(id)`

**Criterios de aceptación:**
- [ ] Hacer clic en el botón 🗑️ abre el modal de confirmación en lugar de borrar inmediatamente
- [ ] El texto del modal muestra el nombre del libro seleccionado
- [ ] Al hacer clic en "Cancelar" o presionar `ESC`, se cierra el modal sin alterar los datos
- [ ] Al hacer clic en "Confirmar", elimina el libro, sincroniza con `localStorage` y actualiza la UI

---

### T-17 — Botón 'Limpiar Filtros' (Reset de Filtros)

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: low` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-13 |
| **Complejidad** | Baja (0.5 días) |
| **Branch** | `feature/T-17-limpiar-filtros` |
| **Commit ejemplo** | `feat(T-17): implementar botón para restablecer todos los filtros` |

**Descripción:**
Facilitar la restauración instantánea del catálogo completo al estado inicial limpiando todos los filtros activos en un solo clic.

**Entregables:**
- Botón `<button id="btn-reset-filters">` en la barra de herramientas
- Función `limpiarFiltros()` que vacíe la caja de búsqueda y resetee los selectores
- Invocación de `aplicarFiltrosYOrden()` para renderizar el catálogo completo

**Criterios de aceptación:**
- [ ] Botón "Limpiar filtros" integrado visualmente en la barra de herramientas
- [ ] Al hacer clic, borra el campo de búsqueda `#search` y resetea los selectores `#filter-category`, `#filter-status` y `#sort`
- [ ] Re-renderiza el catálogo mostrando todos los libros nuevamente
- [ ] Se oculta automáticamente si no hay ningún filtro o búsqueda activa (opcional)

---

## Mapa de dependencias

```
T-01a (HTML) ─── critical
 ├── T-01b (CSS base) ─── critical
 │    ├── T-12a (Tablet) ─── high
 │    ├── T-12b (Mobile) ─── high
 │    ├── T-12c (Mejoras CSS base) ─── medium
 │    └── T-15 (Toast Alerts) ─── medium [+ T-13]
 ├── T-01c (Datos JS) ─── critical
 │    ├── T-03 (Generar ID) ─── high
 │    │    └── T-03b (Contadores) ─── high ← prerequisito de T-04a, T-05, T-07
 │    └── T-02 (Renderizado) ─── critical [+ T-01a]
 │         ├── T-03b (Contadores) ─── high
 │         │    ├── T-04a (Agregar) ─── high [+ T-03]
 │         │    │    ├── T-04b (Validaciones) ─── high
 │         │    │    └── T-06 (Editar libros) ─── high
 │         │    ├── T-05 (Eliminar) ─── high
 │         │    │    └── T-16 (Modal Confirmar Eliminar) ─── medium [+ T-11]
 │         │    └── T-07 (Préstamos) ─── high
 │         ├── T-08 (Buscador) ─── medium
 │         ├── T-09a (Filtro categoría) ─── medium
 │         ├── T-09b (Filtro estado) ─── medium
 │         ├── T-11 (Ordenamiento) ─── medium
 │         └── T-13 (Integración) ─── low [+ T-08, T-09a, T-09b, T-11]
 │              ├── T-14 (LocalStorage) ─── high
 │              └── T-17 (Limpiar Filtros) ─── low
```

## Fases de ejecución sugeridas

| Fase | Tareas | Objetivo |
|------|--------|----------|
| **1 — Base** | T-01a → T-01b + T-01c (paralelo) → T-02 | Proyecto funcional mínimo (se ven los libros) |
| **2 — Prerrequisitos CRUD** | T-03 + T-03b (paralelo) | Generación de IDs y estadísticas disponibles antes del CRUD |
| **3 — CRUD** | T-04a + T-05 + T-07 (paralelo) → T-04b → T-06 | Todas las operaciones CRUD funcionando |
| **4 — UX** | T-08 + T-09a + T-09b + T-11 (paralelo) + T-12a + T-12b + T-12c | Búsqueda, filtros, ordenamiento, responsive, diseño |
| **5 — Integración** | T-13 + QA final | Todo funciona combinado sin conflictos |
| **6 — Mejoras MVP v2.0** | T-14 + T-15 + T-16 + T-17 | Persistencia LocalStorage, Toast Alerts, Modal Confirmar y Reset Filtros |

> El Team Leader decide la ejecución real según disponibilidad del equipo.

---

## Registro de asignaciones

| Tarea | Asignado a | Fecha asignación | Fecha límite | Estado |
|-------|-----------|-----------------|-------------|--------|
| T-01a | — | — | — | 🔲 Backlog |
| T-01b | — | — | — | 🔲 Backlog |
| T-01c | — | — | — | 🔲 Backlog |
| T-02 | — | — | — | 🔲 Backlog |
| T-03 | — | — | — | 🔲 Backlog |
| T-03b | — | — | — | 🔲 Backlog |
| T-04a | — | — | — | 🔲 Backlog |
| T-04b | — | — | — | 🔲 Backlog |
| T-05 | — | — | — | 🔲 Backlog |
| T-06 | — | — | — | 🔲 Backlog |
| T-07 | — | — | — | 🔲 Backlog |
| T-08 | — | — | — | 🔲 Backlog |
| T-09a | — | — | — | 🔲 Backlog |
| T-09b | — | — | — | 🔲 Backlog |
| T-11 | — | — | — | 🔲 Backlog |
| T-12a | — | — | — | 🔲 Backlog |
| T-12b | — | — | — | 🔲 Backlog |
| T-12c | — | — | — | 🔲 Backlog |
| T-13 | — | — | — | 🔲 Backlog |
| T-14 | — | — | — | 🔲 Backlog |
| T-15 | — | — | — | 🔲 Backlog |
| T-16 | — | — | — | 🔲 Backlog |
| T-17 | — | — | — | 🔲 Backlog |

---

## Resumen

| Métrica | Valor |
|---------|-------|
| Total de tareas | 23 |
| Tareas critical (P0) | 4 |
| Tareas high (P1) | 11 |
| Tareas medium (P2) | 6 |
| Tareas low (P3) | 2 |
| Tareas de 1 día | 12 |
| Tareas de 1-2 días | 11 |

