# BookManager — Workflow & Convenciones del Proyecto

## 1. Roles del equipo

| Rol | Persona | Responsabilidades |
|-----|---------|-------------------|
| **Team Leader / Maintainer** | Wilmer (@wigsdev) | Asigna tareas, revisa y aprueba PRs, protege `main`, resuelve conflictos, integra código |
| **Developer** | Integrante asignado | Implementa tareas en su branch, crea PR, responde a code review |

---

## 2. Branching Strategy (GitHub Flow simplificado)

Se usa **GitHub Flow** por su simplicidad, ideal para equipos pequeños con entregas continuas.

```
main (protegido, siempre funcional)
 └── feature/T-XX-descripcion (branch de trabajo)
```

### Reglas

| Regla | Descripción |
|-------|-------------|
| `main` es sagrado | Siempre debe compilar/funcionar. Nadie hace push directo. |
| Un branch por tarea | Cada tarea tiene su propio branch aislado. |
| Merge solo vía PR | Todo código entra a `main` únicamente a través de un Pull Request aprobado. |
| Eliminar branch después del merge | Una vez integrado, se borra el branch remoto. |

### Nomenclatura de branches

```
feature/T-XXx-descripcion-corta
```

Ejemplos:
- `feature/T-01a-estructura-html`
- `feature/T-04b-validaciones`
- `feature/T-12a-layout-desktop-tablet`

> Si eventualmente se necesita un hotfix sobre `main`, se usa: `hotfix/descripcion-corta`

---

## 3. Conventional Commits

Se adopta la especificación [Conventional Commits v1.0.0](https://www.conventionalcommits.org/) para mensajes de commit estandarizados.

### Formato

```
<tipo>(alcance): descripción breve

[cuerpo opcional]

[footer opcional]
```

### Tipos permitidos

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `style` | Cambios de formato, CSS, espaciado (sin cambio de lógica) |
| `refactor` | Refactorización de código sin cambiar funcionalidad |
| `docs` | Cambios en documentación |
| `chore` | Tareas de mantenimiento (scripts, configs) |
| `test` | Agregar o modificar tests (si aplica) |

### Alcance (scope)

El alcance es el ID de la tarea entre paréntesis:

```
feat(T-02): renderizar catálogo de libros dinámicamente
fix(T-04b): corregir validación de año fuera de rango
style(T-12a): ajustar grid de cards para tablet
refactor(T-08): extraer lógica de búsqueda a función independiente
docs(T-01a): agregar comentarios en estructura HTML
chore: configurar .gitignore para archivos temporales
```

### Reglas de commits

1. **Un commit por cambio lógico.** No commits gigantes con todo el trabajo mezclado.
2. **Descripción en imperativo presente** (ej: "agregar", no "agregué" ni "agregando").
3. **Máximo 72 caracteres** en la primera línea.
4. **En español** (el proyecto es en español).
5. **No commits vacíos** ni con mensajes como "fix", "update", "cambios".

### Ejemplos correctos

```bash
feat(T-01c): agregar array de 8 libros precargados con datos variados
feat(T-05): implementar función eliminarLibro con filter
fix(T-04a): prevenir submit cuando el formulario está vacío
style(T-01b): definir variables CSS de colores y tipografía
refactor(T-07): unificar prestar y devolver en togglePrestamo
docs: actualizar README con instrucciones de instalación
```

### Ejemplos incorrectos

```bash
# ❌ Sin tipo
"agregué los libros"

# ❌ Tipo en inglés con descripción vaga
"updated stuff"

# ❌ Commit gigante
"feat: todo el proyecto completo"

# ❌ Sin alcance cuando trabaja en una tarea
"feat: agregar libros"
```

---

## 4. Pull Request Convention

### Título del PR

```
<tipo>(T-XX): descripción concisa
```

Ejemplos:
- `feat(T-02): renderizar catálogo de libros con cards dinámicas`
- `feat(T-04a): implementar lógica de agregar libro al catálogo`
- `style(T-12b): diseño responsive para móvil`

### Plantilla del cuerpo del PR

```markdown
## Tarea
Closes #<número_issue>

## Descripción
Breve explicación de qué se implementó y decisiones tomadas.

## Cambios realizados
- Cambio 1
- Cambio 2
- Cambio 3

## Criterios de aceptación cumplidos
- [x] Criterio 1
- [x] Criterio 2
- [x] Criterio 3

## Capturas de pantalla (si aplica)
| Desktop | Mobile |
|---------|--------|
| img     | img    |

## Checklist del autor
- [ ] Mi código sigue las convenciones del proyecto
- [ ] He verificado que funciona en el navegador sin errores en consola
- [ ] Los commits siguen Conventional Commits
- [ ] No hay código comentado ni console.log de debug
- [ ] El branch está actualizado con main
```

---

## 5. Code Review Checklist

El Team Leader verifica antes de aprobar un PR:

### Funcionalidad
- [ ] Cumple todos los criterios de aceptación de la tarea
- [ ] No rompe funcionalidades existentes
- [ ] La interfaz se actualiza correctamente

### Código
- [ ] Usa funciones reutilizables (no código duplicado)
- [ ] Variables y funciones con nombres descriptivos en español
- [ ] No hay `alert()`, `console.log()` de debug, ni código muerto
- [ ] Se usan los métodos de array requeridos por el proyecto
- [ ] La lógica está separada en funciones (no todo en un bloque gigante)

### Estilo
- [ ] HTML semántico (no divs innecesarios)
- [ ] CSS usa las variables definidas en `:root`
- [ ] No hay estilos inline en el HTML
- [ ] Responsive funciona (si aplica a la tarea)

### Git
- [ ] Commits siguen Conventional Commits
- [ ] Branch nombrado correctamente (`feature/T-XXx-descripcion`)
- [ ] No hay archivos innecesarios (node_modules, .DS_Store, etc.)

---

## 6. Definition of Done (DoD)

Una tarea se considera **completada** cuando:

1. ✅ Todos los criterios de aceptación están cumplidos
2. ✅ El código funciona en el navegador sin errores en consola
3. ✅ El PR fue creado siguiendo la convención
4. ✅ Los commits siguen Conventional Commits
5. ✅ El Code Review pasó sin observaciones pendientes
6. ✅ El PR fue aprobado y mergeado a `main` por el Team Leader
7. ✅ El branch fue eliminado después del merge
8. ✅ El issue fue cerrado en GitHub

---

## 7. Flujo completo de una tarea

```
┌─────────────────────────────────────────────────────────────┐
│ 1. ASIGNACIÓN                                               │
│    Team Leader asigna issue → pone assignee + due date      │
│    Estado: 👤 Asignada                                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. SETUP                                                    │
│    git checkout main                                        │
│    git pull origin main                                     │
│    git checkout -b feature/T-XXx-descripcion                │
│    Estado: 🔨 En progreso                                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. IMPLEMENTACIÓN                                           │
│    Desarrollar siguiendo criterios de aceptación            │
│    Commits con Conventional Commits                         │
│    Verificar en navegador antes de hacer push               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. PUSH & PR                                                │
│    git push -u origin feature/T-XXx-descripcion             │
│    Crear PR con la plantilla → asignar reviewer             │
│    Estado: 🔍 En revisión                                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. CODE REVIEW                                              │
│    Team Leader revisa con el checklist                       │
│    Si hay cambios → dev corrige y pushea                    │
│    Si aprobado → merge a main                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. CIERRE                                                   │
│    Merge a main (squash merge recomendado)                  │
│    Eliminar branch remoto                                   │
│    Issue se cierra automáticamente (Closes #XX)             │
│    Estado: ✅ Completada                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Configuración del repositorio

### Protección de branch `main`

El Team Leader debe configurar en Settings → Branches → Branch protection rules:

- [x] Require a pull request before merging
- [x] Require approvals (1 mínimo)
- [x] Dismiss stale pull request approvals when new commits are pushed
- [ ] Require status checks (opcional si no hay CI)

### Merge strategy recomendada

**Squash and merge** — Combina todos los commits del PR en uno solo al integrar a `main`. Mantiene el historial de `main` limpio y legible.

El commit resultante en `main` queda como:
```
feat(T-04a): implementar lógica de agregar libro (#12)
```

---

## 9. Resolución de conflictos

Si tu branch tiene conflictos con `main`:

```bash
git checkout main
git pull origin main
git checkout feature/T-XXx-descripcion
git merge main
# Resolver conflictos manualmente en cada archivo
git add .
git commit -m "chore(T-XX): resolver conflictos con main"
git push origin feature/T-XXx-descripcion
```

> **Regla:** nunca hagas `rebase` si ya hiciste push del branch. Usa `merge` para resolver conflictos de forma segura.

---

## 10. Estructura del proyecto

```
gestor-biblioteca-digital/
├── index.html              ← Página principal
├── css/
│   └── styles.css          ← Estilos (variables, layout, responsive)
├── js/
│   └── app.js              ← Lógica JavaScript (funciones, eventos, DOM)
├── docs/
│   ├── proyecto-G4.md      ← Enunciado original del proyecto
│   ├── backlog.md          ← Backlog de tareas con criterios de aceptación
│   ├── workflow.md         ← Este documento (convenciones y flujo)
│   └── guia-desarrollo.md  ← Guía técnica (IDs, clases, selectores, estructura)
├── scripts/
│   └── crear-issues.sh     ← Script para crear issues en GitHub
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md ← Plantilla para Pull Requests
├── .gitignore
├── package.json
└── README.md
```

---

## 11. Política de reasignación

| Situación | Acción |
|-----------|--------|
| No se cumple la fecha límite | Team Leader contacta al responsable |
| Sin respuesta en 24h | Se reasigna a otro integrante o Team Leader la toma |
| Bloqueo técnico | Desarrollador avisa inmediatamente, no espera al deadline |
| Tarea parcialmente completada | Se evalúa el avance y se decide si reasignar o extender |

---

## 12. Comunicación

- **Bloqueos:** avisar inmediatamente al Team Leader (no esperar al deadline)
- **Dudas técnicas:** preguntar antes de asumir soluciones
- **Avance:** notificar cuando el PR esté listo para revisión
- **Canal principal:** Issues y PRs de GitHub (toda comunicación técnica queda documentada)
