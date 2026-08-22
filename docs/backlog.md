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
- [ ] Modal estilizado: overlay cubre pantalla, modal centrado, responsive
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

### T-04a — Agregar libro al catálogo

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-01a, T-01c, T-02, T-03 |
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
- Cerrar modal después de guardar exitosamente
- Limpiar formulario post-registro
- Cerrar modal al clic en ✕, en overlay, o en "Cancelar"

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
| **Dependencias** | T-02 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-05-eliminar-libros` |
| **Commit ejemplo** | `feat(T-05): implementar eliminación de libro con filter` |

**Descripción:**
Funcionalidad del botón "Eliminar" que remueve el libro del array y actualiza la interfaz.

**Entregables:**
- Función `eliminarLibro(id)`
- Uso de `filter()` para generar nuevo array
- Event listener (delegación de eventos recomendada)
- Re-renderizado post-eliminación

**Criterios de aceptación:**
- [ ] Clic en "Eliminar" → libro desaparece
- [ ] Se elimina del array (no solo del DOM)
- [ ] Se usa `filter()` para excluir el libro
- [ ] Interfaz actualizada con `renderizarLibros()`
- [ ] Identificación por `data-id`
- [ ] Funciona sin importar la posición en el array

---

### T-06a — Cargar datos para edición

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02, T-04a |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-06a-cargar-edicion` |
| **Commit ejemplo** | `feat(T-06a): cargar datos del libro en formulario para edición` |

**Descripción:**
Al clic en "Editar" (✏️), abrir el modal con los datos del libro cargados y cambiar a modo edición.

**Entregables:**
- Función `abrirModalEditar(id)` que abre el modal con datos del libro
- `find()` para localizar el libro
- Llenar todos los inputs (incluido cover/imagen)
- Cambiar título del modal a "Editar libro"
- Cambiar texto del botón submit a "Guardar cambios"
- Variable `libroEditandoId` para trackear el modo

**Criterios de aceptación:**
- [ ] Clic "Editar" → modal se abre con datos del libro (incluida imagen)
- [ ] Se usa `find()` para localizar por ID
- [ ] Título del modal cambia a "Editar libro"
- [ ] Botón cambia a "Guardar cambios"
- [ ] Se guarda referencia del libro en edición
- [ ] Clic "Editar" en otro libro → modal se actualiza con nuevos datos

---

### T-06b — Guardar cambios de edición

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-06a |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-06b-guardar-edicion` |
| **Commit ejemplo** | `feat(T-06b): guardar cambios del libro editado en el array` |

**Descripción:**
Guardar los cambios del formulario en modo edición, modificando el objeto existente en el array. Cerrar modal después de guardar.

**Entregables:**
- Modificar propiedades del objeto existente (no crear uno nuevo)
- Actualizar también la propiedad `imagen`
- Validaciones activas en modo edición
- Post-guardado: cerrar modal, limpiar form, resetear modo, re-renderizar
- ID y `disponible` no se modifican

**Criterios de aceptación:**
- [ ] Al guardar, el libro se actualiza (no se duplica)
- [ ] Se modifican propiedades del objeto existente (incluida imagen)
- [ ] ID NO cambia
- [ ] `disponible` NO cambia
- [ ] Validaciones se aplican igual que al agregar
- [ ] Modal se cierra después de guardar
- [ ] Título del modal vuelve a "Agregar libro"
- [ ] Botón vuelve a "Guardar"
- [ ] Interfaz refleja los nuevos datos

---

### T-07 — Sistema de préstamos

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-07-sistema-prestamos` |
| **Commit ejemplo** | `feat(T-07): implementar toggle de préstamo/devolución` |

**Descripción:**
Toggle que cambia el estado `disponible` del libro y actualiza la interfaz.

**Entregables:**
- Función `togglePrestamo(id)` que invierte `disponible`
- Botón dinámico: "Prestar" ↔ "Devolver"
- Estado visual actualizado en la card
- `find()` para localizar el libro

**Criterios de aceptación:**
- [ ] Libro disponible → botón "Prestar"
- [ ] Libro prestado → botón "Devolver"
- [ ] Clic cambia estado en array Y en interfaz
- [ ] Texto estado se actualiza: "Disponible" / "Prestado"
- [ ] Propiedad `disponible` se invierte (true ↔ false)
- [ ] Se usa `find()` para localizar por ID
- [ ] Se re-renderiza después del cambio

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

### T-10 — Contadores y estadísticas

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: medium` |
| **Tipo** | `type: feature` |
| **Dependencias** | T-02 |
| **Complejidad** | Baja (1 día) |
| **Branch** | `feature/T-10-contadores` |
| **Commit ejemplo** | `feat(T-10): mostrar estadísticas dinámicas del catálogo` |

**Descripción:**
Mostrar contadores dinámicos: total, disponibles y prestados.

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

### T-12a — Responsive: desktop y tablet

| Campo | Valor |
|-------|-------|
| **Prioridad** | `priority: high` |
| **Tipo** | `type: style` |
| **Dependencias** | T-01a, T-01b |
| **Complejidad** | Media (1-2 días) |
| **Branch** | `feature/T-12a-layout-desktop-tablet` |
| **Commit ejemplo** | `style(T-12a): implementar grid responsive para desktop y tablet` |

**Descripción:**
Diseño responsive para pantallas desktop (1024px+) y tablet (768px - 1023px).

**Entregables:**
- Grid de cards: 3 columnas desktop, 2 columnas tablet
- Layout de stats y filtros adaptado
- Modal: centrado, max-width 500px en ambos breakpoints
- Media query para tablet (768px - 1023px)
- Tipografía y espaciado ajustados

**Criterios de aceptación:**
- [ ] Desktop (1024px+): grid 3 columnas
- [ ] Tablet (768-1023px): grid 2 columnas
- [ ] Stats y filtros reorganizados en tablet
- [ ] Modal se ve correctamente centrado en desktop y tablet
- [ ] Usa CSS Grid y/o Flexbox
- [ ] Al menos 1 media query
- [ ] Sin overflow horizontal
- [ ] Tipografía legible en ambos tamaños

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
- [ ] Sin conflictos entre funcionalidades

---

## Mapa de dependencias

```
T-01a (HTML) ─── critical
 ├── T-01b (CSS base) ─── critical
 │    ├── T-12a (Desktop + Tablet) ─── high
 │    └── T-12b (Mobile) ─── high
 ├── T-01c (Datos JS) ─── critical
 │    ├── T-03 (Generar ID) ─── high
 │    └── T-02 (Renderizado) ─── critical [+ T-01a]
 │         ├── T-04a (Agregar) ─── high [+ T-03]
 │         │    ├── T-04b (Validaciones) ─── high
 │         │    └── T-06a (Cargar edición) ─── high
 │         │         └── T-06b (Guardar edición) ─── high
 │         ├── T-05 (Eliminar) ─── high
 │         ├── T-07 (Préstamos) ─── high
 │         ├── T-08 (Buscador) ─── medium
 │         ├── T-09a (Filtro categoría) ─── medium
 │         ├── T-09b (Filtro estado) ─── medium
 │         ├── T-10 (Contadores) ─── medium
 │         ├── T-11 (Ordenamiento) ─── medium
 │         └── T-13 (Integración) ─── low [+ T-08, T-09a, T-09b, T-11]
```

## Fases de ejecución sugeridas

| Fase | Tareas | Objetivo |
|------|--------|----------|
| **1 — Base** | T-01a → T-01b + T-01c (paralelo) → T-02 | Proyecto funcional mínimo (se ven los libros) |
| **2 — CRUD** | T-03 + T-05 + T-07 (paralelo) → T-04a → T-04b + T-06a (paralelo) → T-06b | Todas las operaciones CRUD funcionando |
| **3 — UX** | T-08 + T-09a + T-09b + T-10 + T-11 (paralelo) + T-12a + T-12b | Búsqueda, filtros, responsive |
| **4 — Integración** | T-13 + QA final | Todo funciona combinado sin conflictos |

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
| T-04a | — | — | — | 🔲 Backlog |
| T-04b | — | — | — | 🔲 Backlog |
| T-05 | — | — | — | 🔲 Backlog |
| T-06a | — | — | — | 🔲 Backlog |
| T-06b | — | — | — | 🔲 Backlog |
| T-07 | — | — | — | 🔲 Backlog |
| T-08 | — | — | — | 🔲 Backlog |
| T-09a | — | — | — | 🔲 Backlog |
| T-09b | — | — | — | 🔲 Backlog |
| T-10 | — | — | — | 🔲 Backlog |
| T-11 | — | — | — | 🔲 Backlog |
| T-12a | — | — | — | 🔲 Backlog |
| T-12b | — | — | — | 🔲 Backlog |
| T-13 | — | — | — | 🔲 Backlog |

---

## Resumen

| Métrica | Valor |
|---------|-------|
| Total de tareas | 19 |
| Tareas critical (P0) | 4 |
| Tareas high (P1) | 10 |
| Tareas medium (P2) | 4 |
| Tareas low (P3) | 1 |
| Tareas de 1 día | 8 |
| Tareas de 1-2 días | 11 |
