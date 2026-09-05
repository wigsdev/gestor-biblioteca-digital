# Historial de Cambios (CHANGELOG)

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning 2.0.0](https://semver.org/lang/es/).

---

## [Unreleased] — v1.1.0 (Plan de Mejoras MVP v2.0)

### Por añadir
- **T-14**: Persistencia de datos en `localStorage` del navegador al realizar operaciones CRUD.
- **T-15**: Sistema de notificaciones flotantes (*Toast Alerts*) para retroalimentación en tiempo real.
- **T-16**: Ventana modal de confirmación previa antes de eliminar un libro del catálogo.
- **T-17**: Botón *Limpiar filtros* para restablecer la búsqueda, categoría, estado y orden a su estado inicial.

---

## [1.0.0] — 2026-09-04

### Añadido
- **Catálogo Dinámico**: Renderizado nativo del catálogo de libros generado con JavaScript ES6+ y `DocumentFragment`.
- **Operaciones CRUD**:
  - Alta de libros mediante modal interactivo (`agregarLibro`).
  - Edición de propiedades de libros manteniendo su ID original (`abrirModalEditar`, `guardarEdicion`).
  - Eliminación de elementos de la memoria del sistema (`deleteBook`).
  - Conmutación del estado de préstamo entre *Disponible* y *Prestado* (`togglePrestamo`).
- **Buscador Flexible**: Algoritmo de búsqueda multi-palabra insensibles a mayúsculas y acentos mediante normalización Unicode `normalize("NFD")` (`buscarLibros`, `normalizarTexto`).
- **Filtros Inmutables**: Filtrado por categoría y disponibilidad usando los métodos `.slice()` y `.filter()` sin alterar el array fuente `libros`.
- **Ordenamiento Multicriterio**: Ordenamiento alfabético en español mediante `localeCompare("es", { sensitivity: "base" })` y numérico por año de publicación.
- **Tubería de Control (*Data Pipeline*)**: Función centralizada `aplicarFiltrosYOrden()` que integra búsqueda, filtros y orden en un único pase de renderizado.
- **Estadísticas Dinámicas**: Cálculo automático de contadores en tiempo real con `reduce()` y eliminación de duplicados con `new Set()`.
- **Validaciones UI**: Formulario con mensajes de error en rojo y limpieza interactiva en tiempo real al escribir (`input`/`change`).
- **Diseño Responsive**: Interfaz adaptada a Desktop, Laptop, Tablet y Mobile mediante CSS Grid, Flexbox y Media Queries.
- **Accesibilidad**: Atributos ARIA (`aria-live="polite"`), navegación por teclado y contraste adecuado.
- **Licencia**: Integración de la Licencia MIT oficial y documentación completa en `README.md`.
