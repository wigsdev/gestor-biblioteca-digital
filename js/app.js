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
		imagen: "assets/book-cover.jpg",
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
		const noSrc = createElement("div", "book-cover-placeholder", "📖");
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
		"book-meta",
		`${categoria} · ${anio}`,
	);
	const available = createElement(
		"span",
		`book-status ${disponible ? "book-status--available" : "book-status--borrowed"}`,
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
const actualizarEstadisticas = () => {
	const statTotal = document.getElementById("stat-total");
	const statAvailable = document.getElementById("stat-available");
	const statBorrowed = document.getElementById("stat-borrowed");

	const available = libros.reduce((acc, libro) => {
		return libro.disponible ? acc + 1 : acc;
	}, 0);

	const borrowed = libros.reduce((acc, libro) => {
		return libro.disponible ? acc : acc + 1;
	}, 0);

	statTotal.textContent = libros.length;
	statAvailable.textContent = available;
	statBorrowed.textContent = borrowed;
};
// ── T-04a: Add book ──

let libroEditandoId = null;

const btnAdd = document.querySelector("#btn-add");
const modalOverlay = document.querySelector("#modal-overlay");
const modalClose = document.querySelector("#modal-close");
const bookForm = document.querySelector("#book-form");
const btnCancel = document.querySelector("#btn-cancel");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputCategory = document.querySelector("#category");
const inputYear = document.querySelector("#year");
const inputCover = document.querySelector("#cover");

const modalTitle = document.querySelector("#modal-title");
const btnSubmit = document.querySelector("#btn-submit");

const abrirModal = () => {
	bookForm.reset();
	libroEditandoId = null;
	modalOverlay.classList.remove("hidden");
	modalTitle.textContent = "Agregar libro";
	btnSubmit.textContent = "Guardar";
};

const cerrarModal = () => {
	modalOverlay.classList.add("hidden");
	bookForm.reset();
	libroEditandoId = null;
	modalTitle.textContent = "Agregar libro";
	btnSubmit.textContent = "Guardar";
};

const agregarLibro = () => {
	const nuevoLibro = {
		id: generarId(),
		titulo: inputTitle.value.trim(),
		autor: inputAuthor.value.trim(),
		categoria: inputCategory.value,
		anio: Number(inputYear.value),
		disponible: true,
		imagen: inputCover.value.trim(),
	};

	libros.push(nuevoLibro);
};

// ── T-04b: Form validations ──
// Valida los campos del formulario de libro (título, autor, categoría, año).
// Escribe los mensajes de error en los <span class="form-error"> del DOM
// (no usa alert()) y limpia los mensajes previos en cada ejecución.
// Retorna true si todo es válido, false si hay al menos un error.
const validarFormulario = () => {
	const inputTitle = document.getElementById("title");
	const inputAuthor = document.getElementById("author");
	const selectCategory = document.getElementById("category");
	const inputYear = document.getElementById("year");

	const errorTitle = document.getElementById("error-title");
	const errorAuthor = document.getElementById("error-author");
	const errorCategory = document.getElementById("error-category");
	const errorYear = document.getElementById("error-year");

	// Limpiar mensajes previos antes de validar de nuevo
	errorTitle.textContent = "";
	errorAuthor.textContent = "";
	errorCategory.textContent = "";
	errorYear.textContent = "";

	let esValido = true;

	// Título: no vacío, mínimo 2 caracteres
	const titulo = inputTitle.value.trim();
	if (titulo.length < 2) {
		errorTitle.textContent = "El título es obligatorio (mín. 2 caracteres)";
		esValido = false;
	}

	// Autor: no vacío, mínimo 2 caracteres
	const autor = inputAuthor.value.trim();
	if (autor.length < 2) {
		errorAuthor.textContent = "El autor es obligatorio (mín. 2 caracteres)";
		esValido = false;
	}

	// Categoría: debe haber una opción seleccionada
	if (selectCategory.value === "") {
		errorCategory.textContent = "Selecciona una categoría";
		esValido = false;
	}

	// Año: numérico, entre 1900 y el año actual
	const anioActual = new Date().getFullYear();
	const anio = Number(inputYear.value);
	if (
		inputYear.value.trim() === "" ||
		Number.isNaN(anio) ||
		anio < 1900 ||
		anio > anioActual
	) {
		errorYear.textContent = `Ingresa un año válido (1900 - ${anioActual})`;
		esValido = false;
	}

	// imagen (#cover) no se valida: es un campo opcional

	return esValido;
};

// ── T-05: Delete book ──

const deleteBook = (id) => {
	const index = libros.findIndex((libro) => libro.id === id);

	if (index !== -1) {
		libros.splice(index, 1);
		renderizarLibros(libros);
		actualizarEstadisticas();
	}
	return;
};

// ── T-06a: Load edit data ──
const abrirModalEditar = (id) => {
	const bookFind = libros.find((libro) => libro.id === id);
	if (!bookFind) return;

	libroEditandoId = id;
	inputTitle.value = bookFind.titulo;
	inputAuthor.value = bookFind.autor;
	inputCategory.value = bookFind.categoria;
	inputYear.value = bookFind.anio;
	inputCover.value = bookFind.imagen || "";

	modalTitle.textContent = "Editar libro";
	btnSubmit.textContent = "Guardar cambios";
	modalOverlay.classList.remove("hidden");
};

// ── T-06b: Save edit changes ──
const guardarEdicion = () => {
	const indexBook = libros.findIndex((libro) => libro.id === libroEditandoId);
	if (indexBook === -1) return;
	const bookEdit = libros[indexBook];

	bookEdit.titulo = inputTitle.value.trim();
	bookEdit.autor = inputAuthor.value.trim();
	bookEdit.categoria = inputCategory.value;
	bookEdit.anio = Number(inputYear.value);
	bookEdit.imagen = inputCover.value.trim();

	libroEditandoId = null;
};
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
	actualizarEstadisticas();

	// Modal: open
	btnAdd.addEventListener("click", abrirModal);

	// Modal: close
	modalClose.addEventListener("click", cerrarModal);
	btnCancel.addEventListener("click", cerrarModal);
	modalOverlay.addEventListener("click", (e) => {
		if (e.target === modalOverlay) cerrarModal();
	});

	// Form: submit (add or edit)
	bookForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// 1. Validar el formulario antes de procesar
		if (!validarFormulario()) return;

		// 2. Si pasa las validaciones, agregar o guardar
		if (libroEditandoId !== null) {
			guardarEdicion();
		} else {
			agregarLibro();
		}

		renderizarLibros(libros);
		actualizarEstadisticas();
		cerrarModal();
	});

	// Catalog: event delegation (edit, delete, loan)
	document.querySelector("#book-list").addEventListener("click", (e) => {
		const target = e.target.closest(".btn-delete, .btn-edit, .btn-loan");
		if (!target) return;
		const id = Number(target.dataset.id);

		if (target.classList.contains("btn-delete")) {
			deleteBook(id);
		}
		if (target.classList.contains("btn-edit")) {
			abrirModalEditar(id);
		}
		if (target.classList.contains("btn-loan")) {
			// togglePrestamo(id);
		}
	});

	// Botón volver arriba (Scroll Back to Top)
	const btnScrollTop = document.getElementById("btn-scroll-top");
	if (btnScrollTop) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				btnScrollTop.classList.remove("hidden");
			} else {
				btnScrollTop.classList.add("hidden");
			}
		});

		btnScrollTop.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}
});
