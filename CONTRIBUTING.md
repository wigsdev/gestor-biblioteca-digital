# Guía de Contribución — BookManager (Gestor de Biblioteca Digital)

¡Gracias por tu interés en contribuir a **BookManager**! 🎉

Este proyecto es de código abierto y está diseñado tanto para gestionar una biblioteca digital interactiva como para servir de espacio de aprendizaje práctico en **HTML5 semántico**, **CSS3 adaptativo** y **JavaScript Vanilla ES6+** (manipulación nativa del DOM sin dependencias externas).

Toda contribución es bienvenida, ya sea resolviendo un issue existente, mejorando la accesibilidad, corrigiendo un error visual, optimizando el rendimiento o mejorando la documentación.

---

## 📋 Tabla de Contenidos

1. [Código de Conducta](#-código-de-conducta)
2. [¿Cómo empezar?](#-cómo-empezar)
3. [Flujo de Trabajo (Git Flow)](#-flujo-de-trabajo)
4. [Pautas de Desarrollo](#-pautas-de-desarrollo)
5. [Convención de Commits](#-convención-de-commits)
6. [Envío de Pull Requests](#-envío-de-pull-requests)
7. [Proceso de Revisión](#-proceso-de-revisión)

---

## 🤝 Código de Conducta

Nos comprometemos a brindar un entorno inclusivo, respetuoso y libre de acoso para todos los colaboradores, sin importar su nivel de experiencia, género, identidad, orientación sexual, discapacidad o procedencia.

* Sé empático y respetuoso en tus comentarios e issues.
* Acepta las críticas constructivas de manera profesional.
* Enfócate en lo que es mejor para la comunidad y el proyecto.

---

## 🚀 ¿Cómo empezar?

1. **Explora los Issues abiertos:**
   * Si es tu primera vez contribuyendo en proyectos Open Source, busca issues con la etiqueta [**`good first issue`**](https://github.com/wigsdev/gestor-biblioteca-digital/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
   * Para mejoras de mayor alcance, busca la etiqueta [**`help wanted`**](https://github.com/wigsdev/gestor-biblioteca-digital/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).
2. **Comenta en el Issue:**  
   Antes de escribir código, deja un breve comentario en el issue indicando que te gustaría trabajar en él. Esto evita que varias personas trabajen en la misma tarea simultáneamente.

---

## 🌿 Flujo de Trabajo

### 1. Haz un Fork del repositorio
Haz clic en el botón **Fork** en la esquina superior derecha del repositorio en GitHub para crear una copia en tu cuenta personal.

### 2. Clona tu Fork localmente
```bash
git clone https://github.com/<tu-usuario>/gestor-biblioteca-digital.git
cd gestor-biblioteca-digital
```

### 3. Configura el repositorio original como remoto `upstream`
```bash
git remote add upstream https://github.com/wigsdev/gestor-biblioteca-digital.git
```

### 4. Crea una nueva rama de trabajo
Crea siempre una rama a partir de `main` actualizada:
```bash
git checkout main
git pull upstream main
git checkout -b feature/T-XX-descripcion-corta
```
*(O `fix/descripcion-del-bug` si estás corrigiendo un error).*

### 5. Ejecuta el proyecto en local
BookManager **no requiere dependencias de Node.js ni bundlers complejos**. Para ejecutarlo:
* **Con VS Code:** Usa la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (Clic derecho en `index.html` > *Open with Live Server*).
* **Con Python:**
  ```bash
  python3 -m http.server 8000
  ```
  Y abre `http://localhost:8000` en tu navegador.
* **O simplemente:** Abre `index.html` directamente en tu navegador web favorito.

---

## 💻 Pautas de Desarrollo

Para mantener la coherencia y calidad del código base:

1. **Cero Dependencias Externas:**  
   No se permite agregar librerías externas (jQuery, Bootstrap, Tailwind, frameworks, etc.). Todo el código debe ser HTML5, CSS3 y JavaScript ES6+ nativo.
2. **Estilo de JavaScript:**
   * Usa `const` y `let` (nunca `var`).
   * Prefiere funciones flecha o funciones puras donde aplique.
   * Mantén las operaciones sobre datos inmutables (`.map()`, `.filter()`, `.reduce()`, `.slice()`).
   * No dejes `console.log` de depuración ni código comentado innecesario.
3. **Estilo de CSS:**
   * Utiliza las variables CSS definidas en `:root` dentro de `css/variables.css`.
   * Mantén el diseño responsivo (Desktop, Laptop, Tablet, Mobile) utilizando Media Queries ya estructuradas.
4. **HTML y Accesibilidad:**
   * Usa etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<button>`).
   * Incluye atributos `aria-*` adecuados para lectores de pantalla.

---

## 📝 Convención de Commits

Seguimos la especificación de **[Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/)**:

```
<tipo>(alcance): descripción breve en presente

[cuerpo opcional]
```

### Tipos comunes:
* `feat`: Nueva funcionalidad (ej. `feat(filtros): agregar botón para limpiar filtros activos`)
* `fix`: Corrección de un bug (ej. `fix(modal): corregir cierre del modal con tecla Escape`)
* `docs`: Cambios exclusivos en la documentación (ej. `docs: actualizar instrucciones en README`)
* `style`: Cambios de formato, CSS, espaciado que no alteran la lógica
* `refactor`: Refactorización de código que no corrige bugs ni añade features
* `perf`: Mejoras de rendimiento en el renderizado del DOM

---

## 🚀 Envío de Pull Requests

1. **Asegúrate de que tu rama esté actualizada:**
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/T-XX-tu-rama
   git merge main
   ```
2. **Verifica en el navegador:**
   * Revisa que la consola de desarrollador (`F12`) no tenga errores ni warnings.
   * Comprueba que tu cambio funcione en pantallas grandes y móviles.
3. **Envía tus cambios a tu Fork:**
   ```bash
   git push -u origin feature/T-XX-tu-rama
   ```
4. **Abre el Pull Request en GitHub:**
   * Dirígete a [wigsdev/gestor-biblioteca-digital](https://github.com/wigsdev/gestor-biblioteca-digital).
   * Haz clic en **Compare & pull request**.
   * Asegúrate de que apunte a la rama `main` del repositorio base.
   * Rellena la plantilla de PR obligatoria, vinculando el número de issue (ej. `Closes #43`).

---

## 🔍 Proceso de Revisión

1. Un mantenedor del proyecto revisará tu PR y verificará:
   * Que cumpla con los criterios de aceptación del issue.
   * Que el código sea limpio y sin dependencias externas.
   * Que no rompa funcionalidades previas.
2. Es normal que te sugiramos pequeños ajustes. Si es así, realiza los cambios en tu misma rama local y haz `git push origin feature/...`; el PR se actualizará automáticamente.
3. Una vez aprobado, tu código será integrado en `main` y aparecerás en la lista de colaboradores del proyecto.

¡Gracias por hacer de **BookManager** un proyecto mejor para toda la comunidad! 📚🚀
