// BookManager — Main logic
// See docs/guia-desarrollo.md for selectors, structure and conventions

// 'use strict' (optional): enables strict mode,
// prevents undeclared variables and surfaces silent errors.
// Uncomment if team agrees to use it:
// 'use strict';

// ── T-01c: Initial data ──

// Array de libros precargados.
// Propiedades: id, titulo, autor, categoria, anio, disponible, imagen
// - imagen: URL de portada ("" si no hay, para probar el placeholder en T-02)
const libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Novela",
        anio: 1967,
        disponible: true,
        imagen: "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg"
    },
    {
        id: 2,
        titulo: "Fundación",
        autor: "Isaac Asimov",
        categoria: "Ciencia ficción",
        anio: 1951,
        disponible: false,
        imagen: "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg"
    },
    {
        id: 3,
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        categoria: "Historia",
        anio: 2011,
        disponible: true,
        imagen: ""
    },
    {
        id: 4,
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        categoria: "Tecnología",
        anio: 2008,
        disponible: false,
        imagen: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
    },
    {
        id: 5,
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        categoria: "Fantasía",
        anio: 2007,
        disponible: true,
        imagen: ""
    },
    {
        id: 6,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Novela",
        anio: 1949,
        disponible: false,
        imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
    },
    {
        id: 7,
        titulo: "Breve historia del tiempo",
        autor: "Stephen Hawking",
        categoria: "Otros",
        anio: 1988,
        disponible: true,
        imagen: ""
    },
    {
        id: 8,
        titulo: "Dune",
        autor: "Frank Herbert",
        categoria: "Ciencia ficción",
        anio: 1965,
        disponible: true,
        imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg"
    }
];


// ── T-03: ID generation ──


// ── T-02: Catalog rendering ──


// ── T-04a: Add book ──


// ── T-04b: Form validations ──


// ── T-05: Delete book ──


// ── T-06a: Load edit data ──


// ── T-06b: Save edit changes ──


// ── T-07: Loan system ──


// ── T-08: Search ──


// ── T-09a: Filter by category ──


// ── T-09b: Filter by status ──


// ── T-10: Stats/counters ──


// ── T-11: Sort ──


// ── T-13: Integration ──


// ── Entry point ──
document.addEventListener('DOMContentLoaded', () => {
    // App init (T-02):
    // renderizarLibros(libros);
    // actualizarEstadisticas();
});
