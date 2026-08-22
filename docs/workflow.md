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

### ¿Qué es un Pull Request (PR)?

Es la solicitud formal para integrar tu código a `main`. El Team Leader lo revisa, y si cumple con los criterios de la tarea, lo aprueba y hace merge.

### Paso a paso para crear tu PR

**Paso 1:** Pushea tu branch a GitHub (si no lo hiciste ya)
```bash
git push -u origin feature/T-XXx-descripcion
```

**Paso 2:** Ve a GitHub → tu repositorio → aparecerá un banner "Compare & pull request". Clic ahí.
(O ve a la pestaña "Pull requests" → "New pull request")

**Paso 3:** Llena el PR con la información siguiente. La plantilla se carga automáticamente.

---

### Título del PR

Formato:
```
<tipo>(T-XX): descripción concisa
```

Ejemplos:
- `feat(T-01a): crear estructura HTML con modal y contenedores`
- `feat(T-04a): implementar lógica de agregar libro al catálogo`
- `style(T-12b): diseño responsive para móvil`

---

### Cuerpo del PR (plantilla)

La plantilla se carga automática. Solo tienes que **rellenar** cada sección:

#### Sección "Tarea"
```markdown
## Tarea
Closes #1
```
- Busca el **número** de tu issue asignado en GitHub (aparece como #1, #2, etc.)
- Escribe `Closes #` + ese número
- Esto vincula el PR con la tarea y la cierra automáticamente al hacer merge

#### Sección "Descripción"
```markdown
## Descripción
Breve explicación de qué hiciste y decisiones que tomaste.
```
- 1 o 2 oraciones explicando el trabajo realizado
- Si tomaste alguna decisión técnica diferente a lo esperado, menciónala

#### Sección "Cambios realizados"
```markdown
## Cambios realizados
- Cambio 1
- Cambio 2
- Cambio 3
```
- Esto es tu **respuesta a los entregables** de la tarea
- Revisa los "Entregables" listados en tu issue y describe qué hiciste por cada uno
- Ejemplo para T-01a:
  ```markdown
  - Creé index.html con estructura semántica (header, main, sections, footer)
  - Agregué modal oculto con formulario de 5 campos
  - Implementé header con botón "Agregar libro" (id="btn-add")
  - Enlacé styles.css y app.js
  ```

#### Sección "Criterios de aceptación cumplidos"
```markdown
## Criterios de aceptación cumplidos
- [x] Criterio cumplido
- [x] Otro criterio cumplido
- [ ] Criterio que NO pude cumplir (explicar por qué)
```
- **Copia los criterios de aceptación de tu issue** (están en el issue de GitHub)
- Marca con `[x]` los que cumpliste
- Si alguno no pudiste cumplirlo, déjalo con `[ ]` y explica por qué
- El Team Leader comparará esto con el código real

#### Sección "Capturas de pantalla" (si aplica)
```markdown
## Capturas de pantalla (si aplica)
| Desktop | Mobile |
|---------|--------|
| img     | img    |
```
- Si tu tarea tiene componentes visuales (HTML/CSS), incluye capturas
- Si es solo lógica JS sin cambio visual, puedes omitir esta sección

#### Sección "Checklist del autor"
```markdown
## Checklist del autor
- [x] Mi código sigue las convenciones del proyecto
- [x] He verificado que funciona en el navegador sin errores en consola
- [x] Los commits siguen Conventional Commits
- [x] No hay código comentado ni console.log de debug
- [x] El branch está actualizado con main
```
- Marca solo lo que realmente verificaste
- Si no estás seguro de algo, déjalo sin marcar — el reviewer lo revisará

---

### ¿Qué pasa después de crear el PR?

1. El Team Leader recibe notificación
2. Revisa tu código contra los criterios de la tarea
3. Si todo está bien → **aprueba y hace merge** → issue se cierra automáticamente
4. Si hay correcciones → te deja comentarios → tú corriges en tu branch y pusheas de nuevo → el PR se actualiza solo
5. No crees un PR nuevo para corregir. El mismo PR se actualiza con cada push a tu branch.

---

### Ejemplo completo de un PR (T-01a)

**Título:** `feat(T-01a): crear estructura HTML con modal y contenedores`

**Cuerpo:**
```markdown
## Tarea
Closes #1

## Descripción
Creé la estructura HTML completa con semántica, modal oculto para el formulario,
y todos los contenedores necesarios para que el equipo trabaje.

## Cambios realizados
- Creé index.html con header, main (4 sections), footer
- Agregué modal (modal-overlay, modal-header, modal-body) oculto con .hidden
- Formulario con 5 campos: title, author, category, year, cover + spans de error
- Header con logo "BookManager" + botón "Agregar libro" (id="btn-add")
- Controles: search, filter-category, filter-status, sort
- Stats: stat-total, stat-available, stat-borrowed
- Catálogo: book-list vacío para JS

## Criterios de aceptación cumplidos
- [x] El archivo carga sin errores en consola
- [x] Todos los IDs definidos en la guía de desarrollo
- [x] Header con botón "Agregar libro" id="btn-add"
- [x] Modal existe con clase "hidden"
- [x] Formulario tiene 5 campos + spans de error
- [x] Botón submit y cancelar
- [x] Controles con IDs correctos
- [x] Enlazados styles.css y app.js
- [x] Meta viewport configurado
- [x] Etiquetas semánticas usadas
- [x] Labels con atributo for

## Checklist del autor
- [x] Mi código sigue las convenciones del proyecto
- [x] He verificado que funciona en el navegador sin errores en consola
- [x] Los commits siguen Conventional Commits
- [x] No hay código comentado ni console.log de debug
- [x] El branch está actualizado con main
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

## 7. Flujo completo de una tarea (paso a paso)

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
│    Verificar en navegador antes de continuar                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. SINCRONIZAR CON MAIN (obligatorio antes de push)         │
│    git checkout main                                        │
│    git pull origin main                                     │
│    git checkout feature/T-XXx-descripcion                   │
│    git merge main                                           │
│    (si hay conflictos → resolver → git add . → git commit)  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. PUSH & PR                                                │
│    git push -u origin feature/T-XXx-descripcion             │
│    Crear PR con la plantilla → asignar reviewer             │
│    Estado: 🔍 En revisión                                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. CODE REVIEW                                              │
│    Team Leader revisa con el checklist                       │
│    Si hay cambios → dev corrige y pushea                    │
│    Si aprobado → merge a main                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. CIERRE                                                   │
│    Merge a main (squash merge)                              │
│    Eliminar branch remoto                                   │
│    Issue se cierra automáticamente (Closes #XX)             │
│    Estado: ✅ Completada                                    │
└─────────────────────────────────────────────────────────────┘
```

### Detalle de cada paso con comandos

**Paso 1 — Asignación:**
El Team Leader te asigna un issue en GitHub. Recibes una notificación. Lee el issue completo y consulta `docs/guia-desarrollo.md` (sección 17) para ver qué secciones de la guía necesitas.

**Paso 2 — Setup:**
```bash
git checkout main
git pull origin main
git checkout -b feature/T-XXx-descripcion
```
Siempre crear la rama desde `main` actualizado. Nunca desde otra rama.

**Paso 3 — Implementación:**
```bash
# Editar archivos...
git add .
git commit -m "feat(T-XXx): descripción del cambio"
```
Puedes hacer varios commits mientras trabajas. Verificar que funciona abriendo `index.html` en el navegador y revisando la consola (F12).

**Paso 4 — Sincronizar con main (OBLIGATORIO):**
```bash
git checkout main
git pull origin main
git checkout feature/T-XXx-descripcion
git merge main
```
¿Por qué? Mientras tú trabajabas, otro colaborador pudo haber mergeado cambios a main. Si no sincronizas, tu PR puede tener conflictos.

- Si NO hay conflictos → continúa al paso 5
- Si HAY conflictos → Git te indica qué archivos tienen conflicto. Ábrelos, resuelve manualmente (elige qué código queda), luego:
  ```bash
  git add .
  git commit -m "chore(T-XXx): resolver conflictos con main"
  ```

**Paso 5 — Push y crear PR:**
```bash
git push -u origin feature/T-XXx-descripcion
```
Luego en GitHub:
1. Ve al repositorio → aparecerá banner "Compare & pull request"
2. Llena la plantilla (ver sección 4 de este documento)
3. **NO mergear** — esperar aprobación del Team Leader

**Paso 6 — Code Review:**
El Team Leader revisa. Si pide cambios:
```bash
# Corregir en tu rama (no crear rama nueva)
git add .
git commit -m "fix(T-XXx): corregir observación del review"
git push origin feature/T-XXx-descripcion
```
El PR se actualiza automáticamente. No crees un PR nuevo.

**Paso 7 — Cierre:**
El Team Leader aprueba → hace squash and merge → elimina el branch → el issue se cierra solo.

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
