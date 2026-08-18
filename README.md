<div align="center">

# BookManager

**Sistema de gestión de biblioteca digital**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

[![GitHub issues](https://img.shields.io/github/issues/wigsdev/gestor-biblioteca-digital?style=flat-square)](https://github.com/wigsdev/gestor-biblioteca-digital/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/wigsdev/gestor-biblioteca-digital?style=flat-square)](https://github.com/wigsdev/gestor-biblioteca-digital/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/wigsdev/gestor-biblioteca-digital?style=flat-square)](https://github.com/wigsdev/gestor-biblioteca-digital/commits/main)
[![License](https://img.shields.io/badge/license-ISC-blue?style=flat-square)](./LICENSE)

<p align="center">
  Aplicación web interactiva para administrar un catálogo de libros.<br>
  Desarrollada con JavaScript Vanilla, sin frameworks ni librerías externas.
</p>

---

[Funcionalidades](#-funcionalidades) · [Demo](#-demo) · [Instalación](#-instalación) · [Estructura](#-estructura-del-proyecto) · [Contribuir](#-contribuir) · [Equipo](#-equipo)

</div>

---

## Acerca del proyecto

BookManager es una aplicación web que permite administrar el catálogo de una biblioteca digital. Los usuarios pueden visualizar, agregar, modificar, eliminar, buscar, filtrar y ordenar libros, así como gestionar el estado de préstamo de cada uno.

El proyecto se desarrolla como parte de un proyecto integrador con duración de 3 semanas, enfocado en aplicar fundamentos de JavaScript: funciones, arreglos, objetos y manipulación del DOM.

---

## Funcionalidades

| Funcionalidad | Descripción |
|---------------|-------------|
| Catálogo dinámico | Renderizado de libros generado con JavaScript |
| CRUD completo | Agregar, editar y eliminar libros |
| Sistema de préstamos | Toggle disponible/prestado por libro |
| Buscador en tiempo real | Filtrado por título o autor (case-insensitive) |
| Filtros | Por categoría y por estado de disponibilidad |
| Ordenamiento | Por título (A-Z, Z-A) y por año (asc, desc) |
| Estadísticas | Contadores dinámicos: total, disponibles, prestados |
| Validaciones | Formulario validado con mensajes en la interfaz |
| Responsive | Adaptado a Desktop, Tablet y Mobile |

---

## Demo

> La demo estará disponible una vez completada la fase de desarrollo.

<!-- Descomentar cuando esté desplegado:
[Ver Demo en vivo](https://wigsdev.github.io/gestor-biblioteca-digital/)
-->

---

## Tecnologías

| Tecnología | Uso |
|-----------|-----|
| HTML5 | Estructura semántica |
| CSS3 | Estilos, Grid, Flexbox, Media Queries |
| JavaScript ES6+ | Lógica, DOM, Eventos |
| Git & GitHub | Control de versiones y colaboración |

**Restricciones:** No se permite el uso de frameworks (React, Vue, Angular), librerías (jQuery, Bootstrap para lógica) ni herramientas de bundling.

---

## Instalación

### Prerrequisitos

- [Git](https://git-scm.com/) instalado
- Un navegador web moderno (Chrome, Firefox, Edge)
- Un editor de código ([VS Code](https://code.visualstudio.com/) recomendado)

### Clonar el repositorio

```bash
git clone https://github.com/wigsdev/gestor-biblioteca-digital.git
cd gestor-biblioteca-digital
```

### Ejecutar el proyecto

No requiere instalación de dependencias. Abre `index.html` directamente en el navegador:

```bash
# Opción 1: abrir directamente
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

```bash
# Opción 2: usar Live Server (VS Code extension)
# Instalar extensión "Live Server" → clic derecho en index.html → "Open with Live Server"
```

---

## Estructura del proyecto

```
gestor-biblioteca-digital/
├── index.html                   ← Página principal
├── css/
│   └── styles.css               ← Estilos (variables, layout, responsive)
├── js/
│   └── app.js                   ← Lógica (funciones, eventos, DOM)
├── docs/
│   ├── proyecto-G4.md           ← Enunciado original del proyecto
│   ├── backlog.md               ← Product Backlog (tareas y criterios)
│   ├── workflow.md              ← Convenciones y flujo de trabajo
│   └── guia-desarrollo.md       ← Guía técnica (IDs, clases, estructura)
├── scripts/
│   └── crear-issues.sh          ← Script para setup de GitHub Issues
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md ← Plantilla para Pull Requests
├── .gitignore
├── package.json
└── README.md                    ← Este archivo
```

---

## Contribuir

Este proyecto usa un flujo de trabajo estructurado. Antes de contribuir, lee la documentación:

- **[Workflow y Convenciones](./docs/workflow.md)** — Branching, Conventional Commits, PR template, Code Review
- **[Product Backlog](./docs/backlog.md)** — Tareas disponibles, criterios de aceptación, dependencias

### Flujo rápido

```bash
# 1. Actualizar main
git checkout main
git pull origin main

# 2. Crear branch de la tarea asignada
git checkout -b feature/T-XXx-descripcion

# 3. Desarrollar y hacer commits
git add .
git commit -m "feat(T-XXx): descripción del cambio"

# 4. Push y crear PR
git push -u origin feature/T-XXx-descripcion
# Crear PR en GitHub con la plantilla
```

### Convenciones

| Aspecto | Convención |
|---------|-----------|
| Commits | [Conventional Commits v1.0.0](https://www.conventionalcommits.org/) |
| Branches | `feature/T-XXx-descripcion-corta` |
| Merge | Squash and merge |
| Review | Aprobación del Team Leader requerida |

---

## Equipo

| Rol | Nombre | GitHub |
|-----|--------|--------|
| Team Leader | Wilmer | [@wigsdev](https://github.com/wigsdev) |

> Los desarrolladores se registran al ser asignados a tareas en el [Project Board](https://github.com/wigsdev/gestor-biblioteca-digital/projects).

---

## Documentación

| Documento | Descripción |
|-----------|-------------|
| [Enunciado del proyecto](./docs/proyecto-G4.md) | Requerimientos originales del proyecto integrador |
| [Product Backlog](./docs/backlog.md) | 19 tareas con prioridades, dependencias y criterios de aceptación |
| [Workflow](./docs/workflow.md) | Convenciones de Git, PR, Code Review y Definition of Done |
| [Guía de Desarrollo](./docs/guia-desarrollo.md) | IDs, clases, selectores, estructura HTML, variables CSS |

---

## Roadmap

- [x] Documentación y planificación
- [x] Estructura del proyecto
- [ ] Fase 1 — Base (HTML + CSS + Datos)
- [ ] Fase 2 — CRUD (Agregar, Editar, Eliminar, Préstamos)
- [ ] Fase 3 — UX (Búsqueda, Filtros, Ordenamiento, Responsive)
- [ ] Fase 4 — Integración y QA final

---

## Licencia

Distribuido bajo la licencia ISC. Ver `package.json` para más información.

---

<div align="center">

**Hecho con JavaScript Vanilla**

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repositorio-181717?style=for-the-badge&logo=github)](https://github.com/wigsdev/gestor-biblioteca-digital)

</div>
