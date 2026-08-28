# Revisión del Diseño — Decisiones Finales

## 1. Contexto

Se revisó el diseño propuesto en Figma contra los requisitos del enunciado (`docs/proyecto-G4.md`). Este documento refleja las **decisiones finales** tomadas por el equipo.

**Tipo de aplicación:** Panel de administración de biblioteca.  
**Usuario:** Bibliotecario/administrador.

---

## 2. Decisiones del equipo

| Decisión | Resultado |
|----------|-----------|
| Formulario | **Modal** (popup) — se abre desde botón en header |
| Imagen en cards | **Sí** — campo opcional (URL) como plus del proyecto |
| Mismo modal para agregar y editar | **Sí** — un solo formulario que cambia de modo |
| Stats | Solo 3: Total, Disponibles, Prestados |
| Filtros | Categoría + Estado + Ordenamiento (los 3 en todos los breakpoints) |
| Navegación con tabs | **No** — solo botón "Agregar libro" en el header |
| Perfil de usuario | **No** — no hay autenticación |
| Paginación | **No** — no es requisito |

---

## 3. Elementos ELIMINADOS del diseño original

| # | Elemento | Motivo |
|---|---|---|
| 1 | Navegación con tabs (Catálogo / Agregar Libro / Buscar) | Una sola página. Solo queda botón "Agregar libro" en header. |
| 2 | Perfil de usuario + avatar | No hay autenticación |
| 3 | "Categorías: 14" (stat extra) | Solo se piden 3 stats |
| 4 | "Actualización Diaria" | No está en requisitos |
| 5 | Paginación ("Mostrando X de Y") | No es requisito |
| 6 | Campo "Estado" en el formulario | Siempre es `disponible: true` al agregar. Se cambia con botón Prestar/Devolver. |

---

## 4. Elementos AGREGADOS al diseño

| # | Elemento | Motivo |
|---|---|---|
| 1 | Campo "URL de imagen" en el formulario | Plus del proyecto para cards con portada |
| 2 | Placeholder genérico cuando no hay imagen | UX para libros sin URL |
| 3 | Selector de ordenamiento en tablet y mobile | Requisito del enunciado que faltaba |
| 4 | Filtro de categoría en mobile | Requisito del enunciado que faltaba |

---

## 5. Elementos MANTENIDOS del diseño original

| Elemento | Nota |
|----------|------|
| Modal como formulario | Decisión del equipo |
| Imágenes de portada en cards | Ahora con campo en formulario |
| Grid responsive (3 → 2 → 1 columna) | Correcto |
| Cards con: categoría, año, estado, ID | Cumple requisitos |
| Botón "Prestar" / "Devolver" diferenciado | Correcto |
| Botones Editar (✏️) y Eliminar (🗑️) | Correcto |
| Buscador | Correcto |
| Filtro por categoría y estado | Correcto |
| Ordenamiento | Correcto |
| Stats: Total, Disponibles, Prestados | Solo estos 3 |
| Paleta de colores (verde oscuro + naranja) | Libre elección |
| Menú hamburguesa en mobile | Buena decisión UX |
| Mensajes de validación en rojo | Cumple requisito |

---

## 6. Cómo funciona el modal

### Flujo de uso

```
Usuario clic "Agregar libro" (header)
  → Modal se abre (vacío)
  → Llena el formulario
  → Clic "Guardar"
  → Libro se agrega al catálogo
  → Modal se cierra
  → Cards se actualizan

Usuario clic ✏️ en una card
  → Modal se abre (con datos del libro)
  → Título del modal cambia a "Editar libro"
  → Botón cambia a "Guardar cambios"
  → Aparece botón "Cancelar"
  → Modifica datos
  → Clic "Guardar cambios"
  → Libro se actualiza
  → Modal se cierra

Usuario clic ✕ o "Cancelar" o clic en overlay
  → Modal se cierra
  → Formulario se limpia
  → Vuelve a modo "agregar"
```

### Implementación técnica

| Capa | Responsabilidad |
|------|----------------|
| **HTML** | Estructura del modal en `index.html` (oculto con clase `.hidden`) |
| **CSS** | Estilos del overlay, centrado, animación, responsive |
| **JS** | Mostrar/ocultar (agregar/quitar `.hidden`), llenar datos para editar, limpiar al cerrar |

El modal **siempre existe en el HTML**. JavaScript solo controla cuándo se ve y cuándo no.

---

## 7. Objeto libro actualizado

```js
{
  id: 1,
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  categoria: "Novela",
  anio: 1967,
  disponible: true,
  imagen: "https://..."   // NUEVO — opcional (string URL o "")
}
```

- Las propiedades `id` a `disponible` son requisito del enunciado (español)
- La propiedad `imagen` es un plus del equipo
- Si `imagen` está vacío (`""`), la card muestra un placeholder

---

## 8. Modelos de interfaz (con modal)

### 8.1 Desktop (1024px+) — Vista principal

```
┌─────────────────────────────────────────────────────────────────┐
│  BookManager                           [+ Agregar libro]        │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────────────────────────┐
│                      │                                          │
│  ESTADÍSTICAS        │  [🔍 Buscar...]                          │
│  ──────────────      │  [Categoría ▼] [Estado ▼] [Ordenar ▼]   │
│  Total: 8            │                                          │
│  Disponibles: 5      │  ┌────────┐  ┌────────┐  ┌────────┐    │
│  Prestados: 3        │  │ [img]  │  │ [img]  │  │ [img]  │    │
│                      │  │ Título │  │ Título │  │ Título │    │
│                      │  │ Autor  │  │ Autor  │  │ Autor  │    │
│                      │  │Cat·Año │  │Cat·Año │  │Cat·Año │    │
│                      │  │ Estado │  │ Estado │  │ Estado │    │
│                      │  │[P][✏][🗑]│ │[D][✏][🗑]│ │[P][✏][🗑]│   │
│                      │  └────────┘  └────────┘  └────────┘    │
│                      │                                          │
│                      │  ┌────────┐  ┌────────┐  ┌────────┐    │
│                      │  │  ...   │  │  ...   │  │  ...   │    │
│                      │  └────────┘  └────────┘  └────────┘    │
└──────────────────────┴──────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  BookManager © 2026 — Proyecto Integrador G4                    │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Desktop — Modal abierto (agregar)

```
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  ┌──────────────────────────┐  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Agregar libro        ✕  │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │                          │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Título: [___________]   │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Autor:  [___________]   │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Categoría: [_______▼]   │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Año:    [___________]   │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  Imagen: [___________]   │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │                          │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  │  [Cancelar] [Guardar]    │  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░  └──────────────────────────┘  ░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░ (overlay oscuro) ░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.3 Tablet (768px – 1023px)

```
┌─────────────────────────────────────────────────┐
│  BookManager                [+ Agregar libro]   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  Total: 8 | Disponibles: 5 | Prestados: 3      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  [🔍 Buscar...]                                  │
│  [Categoría ▼] [Estado ▼] [Ordenar ▼]           │
└─────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐
│  [imagen]        │  │  [imagen]        │
│  Cien años...    │  │  Don Quijote     │
│  García Márquez  │  │  Cervantes       │
│  Novela · 1967   │  │  Novela · 1605   │
│  ● Disponible    │  │  ○ Prestado      │
│  [Prestar][✏][🗑] │  │  [Devolver][✏][🗑]│
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│  [imagen]        │  │  [imagen]        │
│  1984            │  │  El principito   │
│  Orwell          │  │  Saint-Exupéry   │
│  C.Ficción·1949  │  │  Infantil · 1943 │
│  ● Disponible    │  │  ● Disponible    │
│  [Prestar][✏][🗑] │  │  [Prestar][✏][🗑] │
└──────────────────┘  └──────────────────┘

┌─────────────────────────────────────────────────┐
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

### 8.4 Mobile (< 768px)

```
┌───────────────────────────┐
│  BookManager          ☰   │
├───────────────────────────┤
│                           │
│  Total: 8  |  Disp: 5    │
│  Prestados: 3             │
│                           │
├───────────────────────────┤
│  [🔍 Buscar...]           │
│  [Categoría         ▼]   │
│  [Estado            ▼]   │
│  [Ordenar           ▼]   │
├───────────────────────────┤
│  [+ Agregar libro]        │  ← botón visible para abrir modal
├───────────────────────────┤
│  ┌───────────────────┐   │
│  │ [imagen]          │   │
│  │ Cien años de...   │   │
│  │ García Márquez    │   │
│  │ Novela · 1967     │   │
│  │ ● Disponible      │   │
│  │ [Prestar] [✏] [🗑] │   │
│  └───────────────────┘   │
│  ┌───────────────────┐   │
│  │ [imagen]          │   │
│  │ 1984              │   │
│  │ George Orwell     │   │
│  │ C.Ficción · 1949  │   │
│  │ ○ Prestado        │   │
│  │ [Devolver] [✏] [🗑]│   │
│  └───────────────────┘   │
│                           │
├───────────────────────────┤
│  Footer                   │
└───────────────────────────┘
```

### 8.5 Card individual

Con imagen:
```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │       [PORTADA]           │  │  ← imagen del libro
│  │                           │  │
│  └───────────────────────────┘  │
│  Novela · 1967       Disponible │  ← categoría · año + estado
│  Cien años de soledad           │  ← título
│  Gabriel García Márquez         │  ← autor
│  ID: 1                          │  ← identificador
│  [Prestar] [✏ Editar] [🗑 Elim] │  ← acciones
└─────────────────────────────────┘
```

Sin imagen (placeholder):
```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │       [📖 placeholder]    │  │  ← color sólido + ícono
│  │                           │  │
│  └───────────────────────────┘  │
│  Historia · 2001     Prestado   │
│  Sapiens                        │
│  Yuval Noah Harari              │
│  ID: 5                          │
│  [Devolver] [✏ Editar] [🗑 Elim]│
└─────────────────────────────────┘
```

---

## 9. Resumen para el diseñador

### Ajustar en el Figma:

1. **Quitar:** navegación con tabs, perfil usuario, "Categorías: 14", "Actualización Diaria", paginación, campo "Estado" del formulario
2. **Agregar:** campo "URL de imagen" en el modal, placeholder para cards sin imagen, ordenamiento visible en tablet y mobile, filtro categoría en mobile
3. **Mantener:** modal, cards con imagen, grid responsive, colores, botones, buscador, filtros, stats (solo 3)
4. **Header:** solo logo "BookManager" + botón "Agregar libro" (en desktop/tablet), menú hamburguesa (en mobile) que incluye el botón

---

## 10. Impacto en tareas del backlog

| Tarea | Qué cambia |
|-------|-----------|
| T-01a | Agregar estructura del modal (oculto) + botón "Agregar libro" en header |
| T-01b | Estilos del modal, overlay, responsive del modal, placeholder de imagen |
| T-01c | Los 8 libros precargados incluyen propiedad `imagen` (con URLs o "") |
| T-02 | Cards renderizan `<img>` si hay URL, o placeholder si no. Imagen va primero en la card. |
| T-04a | Después de agregar, cerrar modal. Capturar campo imagen. |
| T-06 | Al clic en ✏️, abrir modal precargado con datos del libro (incluida imagen) y cerrar modal tras guardar |
| T-12a/b | Modal responsive (full-width en mobile, centrado en desktop/tablet) |
