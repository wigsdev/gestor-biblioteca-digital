// BookManager — Main logic
// See docs/guia-desarrollo.md for selectors, structure and conventions

// 'use strict' (optional): enables strict mode,
// prevents undeclared variables and surfaces silent errors.
// Uncomment if team agrees to use it:
// 'use strict';

// ── T-01c: Initial data ──
const books = [];

// ── T-03: ID generation ──
const selectElement = (id) => {
	document.getElementById(id);
};

const DOM = {
	bookList: selectElement("book-list"),
};

// ── T-02: Catalog rendering ──
const fragment = document.createDocumentFragment();
const createElment = (tag, cssClass, text) => {
	const element = document.createElement(tag);
	element.classList.add(cssClass);
	element.textContent = text;
	return element;
};

const createButton = (id, cssClass, text, icon) => {
	const button = document.createElement("button");
	const span = document.createElement("span");
	const i = document.createElement("i");
	button.setAttribute("id", id);
	button.setAttribute("class", cssClass);
	span.classList.add("sr-only");
	span.textContent = text;
	i.setAttribute("class", icon);
	if (icon !== "") {
		button.append(span, i);
		return button;
	}
	button.textContent = text;
	return button;
};

const createBook = (book) => {
	const article = createElment("article", "book", "");
	const title = createElment("h3", "book__title", book.title);
	const author = createElment("h4", "book__author", book.author);
	const category = createElment("p", "book__category", book.category);
	const year = createElment("p", "book__year", book.year);
	const available = createElment("span", "book__available", book.available);
	const cta = createElment("div", "book__cta", "");
	const btnBorrow = createButton("borrow", "btn--borrow", "Borrow", "");
	const btnEdit = createButton("edit", "btn--edit", "Edit", "icon-edit");
	const btnDelete = createButton(
		"delete",
		"btn--delete",
		"Delete",
		"icon-delete",
	);

	cta.append(btnBorrow, btnEdit, btnDelete);

	article.append(title, author, category, year, available, cta);
	return article;
};

books.forEach((book) => {
	fragment.append(createBook(book));
});

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
document.addEventListener("DOMContentLoaded", () => {
	// App init (T-02):
	// renderizarLibros(libros);
	DOM.bookList.append(fragment);
	// actualizarEstadisticas();
});
