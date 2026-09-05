#!/usr/bin/env bash
# ==============================================================================
# Script para crear GitHub Issues del Plan de Mejoras MVP v2.0 (T-14 a T-17)
# Requiere: GitHub CLI (`gh`) instalado y autenticado (`gh auth login`)
# ==============================================================================

set -e

echo "🚀 Iniciando la creación de GitHub Issues para BookManager (Fase 6)..."

# Verificar si GitHub CLI está instalado
if ! command -v gh &> /dev/null; then
    echo "❌ Error: GitHub CLI ('gh') no está instalado."
    echo "Por favor instala gh o crea las Issues manualmente desde la web."
    exit 1
fi

# Tareas T-14 a T-17

echo "📌 Creando T-14: Persistencia de Datos en LocalStorage..."
gh issue create \
  --title "T-14 — Persistencia de Datos en LocalStorage" \
  --label "type: feature,priority: high,status: assigned" \
  --body "### Descripción
Sincronizar el array \`libros\` con \`localStorage\` del navegador para evitar la pérdida de información al recargar la página (\`F5\`).

### Entregables
- Helper \`guardarLibrosEnStorage()\` que guarde \`libros\` en JSON en \`localStorage\`.
- Helper \`cargarLibrosDeStorage()\` que recupere los datos guardados o los 8 libros por defecto.
- Invocación automática tras agregar, editar, eliminar y prestar.

### Criterios de Aceptación
- [ ] Al iniciar (\`DOMContentLoaded\`), carga la información de \`localStorage\` si existe.
- [ ] Si es la primera visita, carga la lista inicial por defecto.
- [ ] Cambios CRUD actualizan inmediatamente \`localStorage\`.
- [ ] Los datos persisten tras refrescar la página (\`F5\`)."

echo "📌 Creando T-15: Sistema de Notificaciones Flotantes (Toast Alerts)..."
gh issue create \
  --title "T-15 — Sistema de Notificaciones Flotantes (Toast Alerts)" \
  --label "type: feature,priority: medium,status: assigned" \
  --body "### Descripción
Proporcionar retroalimentación visual inmediata al usuario cuando realiza cualquier acción en el sistema (agregar, editar, eliminar o prestar).

### Entregables
- Contenedor flotante \`<div id=\"toast-container\">\` en \`index.html\`.
- Estilos CSS con animaciones \`slideIn\` y \`fadeOut\`.
- Función helper \`mostrarToast(mensaje, tipo)\` (success, danger, info).

### Criterios de Aceptación
- [ ] Avisos emergentes en la esquina del viewport.
- [ ] Variantes cromáticas (verde éxito, rojo eliminación, azul/amarillo info).
- [ ] Se autodestruyen automáticamente tras 3 segundos.
- [ ] Se activa un aviso adecuado en cada acción del CRUD."

echo "📌 Creando T-16: Modal de Confirmación de Eliminación..."
gh issue create \
  --title "T-16 — Modal de Confirmación de Eliminación" \
  --label "type: feature,priority: medium,status: assigned" \
  --body "### Descripción
Prevenir la eliminación accidental de libros agregando una ventana modal de confirmación antes de remover el elemento de la memoria.

### Entregables
- Modal \`<div id=\"modal-confirm-overlay\">\` en \`index.html\`.
- Texto descriptivo indicando el título del libro seleccionado.
- Botones \`[Confirmar Eliminación]\` y \`[Cancelar]\`.

### Criterios de Aceptación
- [ ] Al presionar 🗑️ abre el modal de confirmación.
- [ ] Muestra el nombre del libro seleccionado.
- [ ] Al presionar 'Cancelar' o 'ESC', se cierra sin alterar los datos.
- [ ] Al presionar 'Confirmar', remueve el libro y actualiza \`localStorage\`."

echo "📌 Creando T-17: Botón 'Limpiar Filtros' (Reset de Filtros)..."
gh issue create \
  --title "T-17 — Botón 'Limpiar Filtros' (Reset de Filtros)" \
  --label "type: feature,priority: low,status: assigned" \
  --body "### Descripción
Facilitar la restauración instantánea del catálogo completo al estado inicial limpiando todos los filtros activos en un solo clic.

### Entregables
- Botón \`<button id=\"btn-reset-filters\">\` en la barra de herramientas.
- Función \`limpiarFiltros()\` que vacíe la búsqueda y resetee los selectores.

### Criterios de Aceptación
- [ ] Botón 'Limpiar filtros' integrado en la barra de herramientas.
- [ ] Al hacer clic, borra \`#search\` y resetea \`#filter-category\`, \`#filter-status\` y \`#sort\`.
- [ ] Re-renderiza el catálogo completo mostrando todos los libros."

echo "✅ ¡Todas las GitHub Issues de la Fase 6 han sido creadas con éxito!"
