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
		imagen: "https://covers.openlibrary.org/b/isbn/9780307474728-L.jpg",
	},
	{
		id: 2,
		titulo: "Fundación",
		autor: "Isaac Asimov",
		categoria: "Ciencia ficción",
		anio: 1951,
		disponible: false,
		imagen: "https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg",
	},
	{
		id: 3,
		titulo: "Sapiens: De animales a dioses",
		autor: "Yuval Noah Harari",
		categoria: "Historia",
		anio: 2011,
		disponible: true,
		imagen: "",
	},
	{
		id: 4,
		titulo: "Clean Code",
		autor: "Robert C. Martin",
		categoria: "Tecnología",
		anio: 2008,
		disponible: false,
		imagen: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
	},
	{
		id: 5,
		titulo: "El nombre del viento",
		autor: "Patrick Rothfuss",
		categoria: "Fantasía",
		anio: 2007,
		disponible: true,
		imagen: "",
	},
	{
		id: 6,
		titulo: "1984",
		autor: "George Orwell",
		categoria: "Novela",
		anio: 1949,
		disponible: false,
		imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
	},
	{
		id: 7,
		titulo: "Breve historia del tiempo",
		autor: "Stephen Hawking",
		categoria: "Otros",
		anio: 1988,
		disponible: true,
		imagen: "",
	},
	{
		id: 8,
		titulo: "Dune",
		autor: "Frank Herbert",
		categoria: "Ciencia ficción",
		anio: 1965,
		disponible: true,
		imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",
	},
];

// ── T-03: ID generation ──

// ── T-02: Catalog rendering ──
const createElement = (element, cssClass, text = "") => {
	const tag = document.createElement(element);
	if (cssClass) {
		const cssArr = cssClass.split(" ");
		tag.classList.add(...cssArr);
	}
	tag.textContent = text;
	return tag;
};

const createButton = (cssClass, id, text) => {
	const button = document.createElement("button");
	button.setAttribute("data-id", id);
	button.setAttribute("type", "button");
	button.classList.add("btn", cssClass);
	button.textContent = text;
	return button;
};

const createImg = (src, cssClass, alt) => {
	if (!src) {
		const noSrc = createElement("div", "book-no-cover", "📖");
		return noSrc;
	}
	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);
	img.classList.add(cssClass);
	return img;
};

const book = (libro) => {
	const { id, titulo, autor, categoria, anio, disponible, imagen } = libro;

	const article = createElement("article", "book-card");
	const cover = createImg(imagen, "book-cover", titulo);
	const header = createElement("header", "book-header");
	const categoryYear = createElement(
		"span",
		"book-meta-text",
		`${categoria} · ${anio}`,
	);
	const available = createElement(
		"span",
		`book-status ${disponible ? "book-status--available" : "book-available--borrowed"}`,
		`${disponible ? "Disponible" : "Prestado"}`,
	);
	const body = createElement("div", "book-card-body");
	const title = createElement("h3", "book-title", titulo);
	const author = createElement("p", "book-author", autor);
	const idBook = createElement("span", "book-id", `ID: ${id}`);
	const footer = createElement("footer", "book-actions");
	const btnBorrow = createButton(
		"btn-loan",
		id,
		`${disponible ? "Prestar" : "Devolver"}`,
	);
	const btnEdit = createButton("btn-edit", id, "✏️");
	const btnDelete = createButton("btn-delete", id, "🗑️");

	header.append(categoryYear, available);
	body.append(title, author, idBook);
	footer.append(btnBorrow, btnEdit, btnDelete);

	article.append(cover, header, body, footer);

	return article;
};

const renderizarLibros = (books) => {
	const bookList = document.getElementById("book-list");
	const fragment = document.createDocumentFragment();

	bookList.innerHTML = "";

	books.forEach((libro) => {
		fragment.append(book(libro));
	});

	bookList.append(fragment);
};

// ── T-03b: Stats/counters ──

// ── T-04a: Add book ──

// ── T-04b: Form validations ──

// ── T-05: Delete book ──

	const deleteBook = (id) => {
		const index = libros.findIndex((libro)=> libro.id === id);

		if(index !== -1){
			libros.splice(index, 1);
			renderizarLibros(libros);
			actualizarEstadisticas();
		}
		return;
	};

	document.querySelector("#book-list").addEventListener("click",(event) =>{
	const deleteButton = event.target.closest(".btn-delete");

	if(!deleteButton){
		return;
	}
		
	const id = Number(deleteButton.dataset.id);
	deleteBook(id);
} );


// ── T-06a: Load edit data ──

// ── T-06b: Save edit changes ──

// ── T-07: Loan system ──

// ── T-08: Search ──

// ── T-09a: Filter by category ──

// ── T-09b: Filter by status ──

// ── T-11: Sort ──

// ── T-13: Integration ──

// ── Entry point ──
document.addEventListener("DOMContentLoaded", () => {
	// App init (T-02):
	renderizarLibros(libros);
	// actualizarEstadisticas();
});
