Proyecto integrador: Gestor de biblioteca digital
Duración

3 semanas

Tecnologías:

- HTML5
- CSS3
- JavaScript Vanilla
- No se permite utilizar frameworks o librerías externas para la lógica del proyecto.

Propósito

Desarrollar una aplicación web interactiva para gestionar una pequeña biblioteca digital. El estudiante deberá aplicar funciones, arreglos y objetos para crear, almacenar, consultar, modificar y eliminar información de libros.

El proyecto está diseñado para que los estudiantes no solamente escriban código, sino que tengan que analizar un problema, estructurar datos, dividir la lógica en funciones y manipular arreglos de objetos.

1. Enunciado del proyecto

Una biblioteca necesita una aplicación web que permita administrar su catálogo de libros.

Actualmente, la información se registra manualmente y resulta complicado saber qué libros están disponibles, cuáles han sido prestados y cuáles pertenecen a determinadas categorías.

Tu objetivo será desarrollar una aplicación llamada:

BookManager — Sistema de gestión de biblioteca

La aplicación deberá permitir al usuario visualizar el catálogo de libros, agregar nuevos libros, modificar información existente, eliminar libros, buscar libros y filtrar el catálogo.

Toda la información deberá gestionarse utilizando JavaScript, mediante arreglos y objetos.

Por ejemplo, cada libro podría representarse mediante un objeto:

const libro = {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    categoria: "Novela",
    anio: 1967,
    disponible: true
};

Y varios libros deberán almacenarse dentro de un arreglo:

const libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        anio: 1967,
        disponible: true
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ciencia ficción",
        anio: 1949,
        disponible: false
    }
];

La aplicación deberá permitir manipular esta información mediante funciones y mostrar los resultados dinámicamente en la interfaz.

2. Objetivos de aprendizaje

Al finalizar las tres semanas, el estudiante deberá demostrar que puede:

1. Crear y utilizar funciones declaradas.
2. Crear y utilizar expresiones de función.
3. Utilizar funciones flecha.
4. Utilizar parámetros y argumentos.
5. Retornar valores desde funciones.
6. Crear y manipular arreglos.
7. Recorrer arreglos.
8. Utilizar métodos como:
- push()
- pop()
- shift()
- unshift()
- includes()
- indexOf()
- find()
- filter()
- map()
- forEach()
- some()
- every()
9. Crear objetos.
10. Acceder y modificar propiedades.
11. Trabajar con arreglos de objetos.
12. Crear funciones que reciban objetos y/o arreglos.
13. Manipular el DOM.
14. Responder a eventos del usuario.
15. Validar información introducida mediante formularios.
16. Separar la lógica del programa en funciones reutilizables.

3. Funcionalidades obligatorias

La aplicación deberá contar como mínimo con las siguientes funcionalidades.

3.1. Mostrar catálogo

Al cargar la página deberá mostrarse una lista de libros.

Cada libro deberá mostrar:

- ID
- Título
- Autor
- Categoría
- Año
- Estado
- Acciones

Ejemplo visual:

┌─────────────────────────────────────────────┐
│ Cien años de soledad                        │
│ Gabriel García Márquez                      │
│ Novela · 1967                               │
│ Estado: Disponible                          │
│                                             │
│ [Editar] [Eliminar] [Prestar]               │
└─────────────────────────────────────────────┘

Los libros no deben escribirse manualmente en el HTML.

Deberán generarse utilizando JavaScript.


4. Agregar libros

Debe existir un formulario para registrar nuevos libros.

Como mínimo deberá solicitar:

- Título
- Autor
- Categoría
- Año

Al enviar el formulario:

1. Se deben obtener los valores.
2. Se deben validar.
3. Se debe crear un nuevo objeto.
4. El objeto debe agregarse al arreglo.
5. La interfaz debe actualizarse.
6. El formulario debe limpiarse.

Ejemplo:

const nuevoLibro = {
    id: generarId(),
    titulo: titulo,
    autor: autor,
    categoria: categoria,
    anio: Number(anio),
    disponible: true
};

5. Generación de IDs

Cada libro debe tener un ID único.

Por ejemplo:

1
2
3
4
5

El estudiante deberá implementar una función encargada de generar el siguiente ID.

No se permitirá asignar manualmente el ID desde el formulario.

6. Eliminar libros

Cada libro deberá tener un botón:

Eliminar

Al presionarlo:

1. Se deberá identificar el libro.
2. Se deberá eliminar del arreglo.
3. Se deberá actualizar la interfaz.

Se recomienda utilizar un identificador único para determinar qué elemento eliminar.

7. Editar libros

Cada libro deberá tener un botón:

Editar

Al presionarlo, el formulario deberá cargar la información del libro seleccionado.

El usuario podrá modificar:

- Título
- Autor
- Categoría
- Año

Después de guardar:

- Se deberá modificar el objeto correspondiente.
- Se deberá actualizar el arreglo.
- Se deberá actualizar la interfaz.

8. Sistema de préstamos

Cada libro deberá tener un estado:

disponible: true

o:

disponible: false

El usuario deberá poder cambiar el estado mediante un botón.

Por ejemplo:

[Prestar]

Cuando el libro esté prestado:

Estado: Prestado
[Devolver]

Cuando sea devuelto:

Estado: Disponible
[Prestar]

La función encargada deberá localizar el libro y modificar su propiedad disponible.

9. Buscador

La aplicación deberá incluir un campo:

Buscar libro...

El usuario podrá buscar por:

- Título
- Autor

Ejemplo:

Buscar: orwell

Debería mostrar:

1984
Rebelión en la granja

La búsqueda deberá funcionar independientemente de mayúsculas y minúsculas.

Por ejemplo:

orwell
ORWELL
Orwell
oRwElL

deberán producir el mismo resultado.

10. Filtros

La aplicación deberá permitir filtrar los libros.

Como mínimo:

Por categoría

Todas
Novela
Ciencia ficción
Historia
Tecnología
Fantasía
Otros

Por estado

Todos
Disponibles
Prestados

Los filtros deberán modificar dinámicamente los resultados mostrados.

11. Contadores

La interfaz deberá mostrar estadísticas del catálogo.

Por ejemplo:

Total de libros: 15
Disponibles: 10
Prestados: 5

Estos valores deberán calcularse mediante JavaScript.

No está permitido escribir los números directamente en el HTML.

Si se agrega un libro, los contadores deberán actualizarse.

Si se elimina un libro, también.

Si se presta o devuelve un libro, también.

12. Ordenamiento

El usuario deberá poder ordenar los libros.

Como mínimo deberá existir:

Ordenar por:

Título A-Z
Título Z-A
Año más antiguo
Año más reciente

El ordenamiento deberá realizarse mediante JavaScript.

13. Diseño responsive

La aplicación deberá funcionar correctamente en:

- Computadoras
- Tablets
- Celulares

Como mínimo deberá existir:

Desktop
Tablet
Mobile

Debes utilizar CSS Grid y/o Flexbox.

14. Requerimientos técnicos de JavaScript

Esta sección es especialmente importante para la evaluación.

Funciones

El proyecto deberá utilizar al menos 10 funciones propias.

Entre ellas deberán existir funciones destinadas a:

Agregar libro
Eliminar libro
Editar libro
Buscar libro
Filtrar libros
Ordenar libros
Prestar libro
Devolver libro
Renderizar libros
Actualizar estadísticas

No significa que obligatoriamente deban llamarse así.

Funciones flecha

Deberán utilizarse funciones flecha en diferentes partes del proyecto.

Por ejemplo:

const obtenerDisponibles = () => {
    // ...
};

Y funciones callback:

libros.filter(libro => libro.disponible);

15. Arreglos

El catálogo principal deberá ser un arreglo.

const libros = [];

Posteriormente deberá contener objetos.

const libros = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Novela",
        anio: 1949,
        disponible: true
    }
];

El proyecto deberá utilizar diferentes métodos de arreglos.

Como mínimo:

- push()
- find()
- filter()
- map()
- forEach()
- some() o every()

16. Objetos

Cada libro deberá ser un objeto.

Como mínimo deberá contener:

{
    id,
    titulo,
    autor,
    categoria,
    anio,
    disponible
}

El estudiante deberá:

- Crear objetos.
- Leer propiedades.
- Modificar propiedades.
- Agregar objetos al arreglo.
- Buscar objetos.
- Filtrar objetos.
- Eliminar objetos.

17. Manipulación del DOM

La información deberá aparecer dinámicamente en la interfaz.

Por ejemplo:

const contenedor = document.querySelector("#lista-libros");

El estudiante deberá utilizar JavaScript para:

- Crear elementos.
- Modificar contenido.
- Agregar clases.
- Escuchar eventos.
- Mostrar información.
- Actualizar información.
- Ocultar elementos cuando sea necesario.

18. Eventos

Como mínimo deberán utilizarse eventos para:

- Enviar formulario.
- Buscar.
- Filtrar.
- Ordenar.
- Editar.
- Eliminar.
- Prestar.
- Devolver.

Ejemplo:

formulario.addEventListener("submit", manejarFormulario);

19. Validaciones

El formulario deberá validar como mínimo:

Título

No puede estar vacío.

Autor

No puede estar vacío.

Categoría

Debe seleccionarse una categoría.

Año

Debe ser un número válido.

Además, el año deberá encontrarse dentro de un rango razonable.

Por ejemplo:

1900 - año actual

Los mensajes de error deberán mostrarse en la interfaz.

20. Estructura recomendada

Los estudiantes pueden organizar el proyecto de la siguiente manera:

bookmanager/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js

No es obligatorio utilizar exactamente esta estructura, pero el proyecto deberá mantener una organización clara.

21. Datos iniciales

El proyecto deberá iniciar con al menos 8 libros precargados.

Ejemplo:

const libros = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Novela",
        anio: 1949,
        disponible: true
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        anio: 1967,
        disponible: true
    }
];

Los estudiantes deberán completar al menos 8 registros.

22. Restricciones

Para asegurar que realmente se evalúen los fundamentos de JavaScript:

No se permite

- React.
- Vue.
- Angular.
- Svelte.
- jQuery.
- Bootstrap para resolver la lógica.
- Librerías externas para manipular los datos.
- Copiar un proyecto completo de Internet o IA

Sí se permite

- HTML5.
- CSS3.
- JavaScript Vanilla.
- Google Fonts.
- Iconos externos.
- Herramientas de desarrollo del navegador.


