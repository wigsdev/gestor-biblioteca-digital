// BookManager — Full Application Logic

// ── T-01c: Estado de la aplicación ──
let libros = [
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

// SVG Icons
const iconEditSVG = `<svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
const iconDeleteSVG = `<svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;

// Referencias del DOM
const searchInput = document.getElementById("search");
const filterCategorySelect = document.getElementById("filter-category");
const filterStatusSelect = document.getElementById("filter-status");
const sortSelect = document.getElementById("sort");
const bookList = document.getElementById("book-list");

const statTotal = document.getElementById("stat-total");
const statAvailable = document.getElementById("stat-available");
const statBorrowed = document.getElementById("stat-borrowed");
const statCategories = document.getElementById("stat-categories");
const catalogCount = document.getElementById("catalog-count");

// Referencias del Modal y Formulario
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const btnAdd = document.getElementById("btn-add");
const modalClose = document.getElementById("modal-close");
const btnCancel = document.getElementById("btn-cancel");
const bookForm = document.getElementById("book-form");

const inputIdHidden = document.getElementById("book-id-hidden");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const selectCategory = document.getElementById("category");
const inputYear = document.getElementById("year");
const inputCover = document.getElementById("cover");

// ── Generación de Elementos DOM ──
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
  button.className = cssClass;
  button.textContent = text;
  return button;
};

const createImg = (src, cssClass, alt) => {
  if (!src) {
    return createElement("div", "book-no-cover", "📖");
  }
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.classList.add(cssClass);
  img.onerror = () => {
    img.replaceWith(createElement("div", "book-no-cover", "📖"));
  };
  return img;
};

const createBookCard = (libroItem) => {
  const { id, titulo, autor, categoria, anio, disponible, imagen } = libroItem;

  const article = createElement("article", "book-card");
  const cover = createImg(imagen, "book-cover", titulo);

  const bookInfo = createElement("div", "book-info");
  const header = createElement("div", "book-header");
  const categoryYear = createElement(
    "span",
    "book-meta",
    `${categoria.toUpperCase()} · ${anio}`
  );
  const badge = createElement(
    "span",
    `badge ${disponible ? "badge-available" : "badge-borrowed"}`,
    disponible ? "Disponible" : "Prestado"
  );
  header.append(categoryYear, badge);

  const title = createElement("h3", "book-title", titulo);
  const author = createElement("p", "book-author", autor);
  const idBook = createElement("p", "book-id", `ID: ${id}`);

  const footer = createElement("div", "book-actions");
  
  const btnBorrow = createButton(
    "btn-toggle",
    id,
    disponible ? "Prestar" : "Devolver"
  );
  btnBorrow.addEventListener("click", () => toggleEstadoLibro(id));

  const btnEdit = document.createElement("button");
  btnEdit.type = "button";
  btnEdit.className = "btn-icon";
  btnEdit.innerHTML = iconEditSVG;
  btnEdit.addEventListener("click", () => abrirModalEdicion(libroItem));

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.className = "btn-icon btn-icon-delete";
  btnDelete.innerHTML = iconDeleteSVG;
  btnDelete.addEventListener("click", () => eliminarLibro(id));

  footer.append(btnBorrow, btnEdit, btnDelete);
  bookInfo.append(header, title, author, idBook, footer);
  article.append(cover, bookInfo);

  return article;
};

// ── Renderizado y Estadísticas ──
const actualizarEstadisticas = () => {
  if (statTotal) statTotal.textContent = libros.length.toLocaleString();
  
  const disponiblesCount = libros.filter((l) => l.disponible).length;
  if (statAvailable) statAvailable.textContent = disponiblesCount.toLocaleString();
  
  const prestadosCount = libros.filter((l) => !l.disponible).length;
  if (statBorrowed) statBorrowed.textContent = prestadosCount.toLocaleString();

  const categoriasUnicas = new Set(libros.map((l) => l.categoria));
  if (statCategories) statCategories.textContent = categoriasUnicas.size;
};

const renderizarLibros = (books) => {
  if (!bookList) return;

  const fragment = document.createDocumentFragment();
  bookList.innerHTML = "";

  books.forEach((libroItem) => {
    fragment.append(createBookCard(libroItem));
  });

  bookList.append(fragment);

  if (catalogCount) {
    catalogCount.textContent = `Mostrando ${books.length} de ${libros.length} libros`;
  }

  actualizarEstadisticas();
};

// ── Filtrado y Ordenación ──
const filtrarPorCategoria = (categoria) => {
  if (!categoria || categoria === "" || categoria === "Todas") {
    return [...libros];
  }
  return libros.filter((libroItem) => libroItem.categoria === categoria);
};

const aplicarFiltros = () => {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const cat = filterCategorySelect ? filterCategorySelect.value : "";
  const estado = filterStatusSelect ? filterStatusSelect.value : "";
  const orden = sortSelect ? sortSelect.value : "title-asc";

  let resultado = filtrarPorCategoria(cat);

  resultado = resultado.filter((libroItem) => {
    const coincideTexto =
      libroItem.titulo.toLowerCase().includes(query) ||
      libroItem.autor.toLowerCase().includes(query);

    let coincideEstado = true;
    if (estado === "available") coincideEstado = libroItem.disponible;
    if (estado === "borrowed") coincideEstado = !libroItem.disponible;

    return coincideTexto && coincideEstado;
  });

  // Ordenación
  resultado.sort((a, b) => {
    if (orden === "title-asc") return a.titulo.localeCompare(b.titulo);
    if (orden === "title-desc") return b.titulo.localeCompare(a.titulo);
    if (orden === "year-asc") return a.anio - b.anio;
    if (orden === "year-desc") return b.anio - a.anio;
    return 0;
  });

  renderizarLibros(resultado);
};

// ── Modificaciones del Estado ──
const toggleEstadoLibro = (id) => {
  libros = libros.map((libroItem) => {
    if (libroItem.id === id) {
      return { ...libroItem, disponible: !libroItem.disponible };
    }
    return libroItem;
  });
  aplicarFiltros();
};

const eliminarLibro = (id) => {
  libros = libros.filter((libroItem) => libroItem.id !== id);
  aplicarFiltros();
};

// ── Gestión del Modal y Formulario ──
const abrirModal = () => {
  if (modalOverlay) modalOverlay.classList.remove("hidden");
};

const cerrarModal = () => {
  if (modalOverlay) modalOverlay.classList.add("hidden");
  limpiarFormulario();
};

const limpiarFormulario = () => {
  bookForm.reset();
  inputIdHidden.value = "";
  modalTitle.textContent = "Agregar Nuevo Libro";
  limpiarErrores();
};

const limpiarErrores = () => {
  document.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
};

const abrirModalEdicion = (libroItem) => {
  inputIdHidden.value = libroItem.id;
  inputTitle.value = libroItem.titulo;
  inputAuthor.value = libroItem.autor;
  selectCategory.value = libroItem.categoria;
  inputYear.value = libroItem.anio;
  inputCover.value = libroItem.imagen || "";

  modalTitle.textContent = "Editar Libro";
  abrirModal();
};

const validarFormulario = () => {
  limpiarErrores();
  let esValido = true;

  if (!inputTitle.value.trim()) {
    document.getElementById("error-title").textContent = "El título es obligatorio.";
    esValido = false;
  }

  if (!inputAuthor.value.trim()) {
    document.getElementById("error-author").textContent = "El autor es obligatorio.";
    esValido = false;
  }

  if (!selectCategory.value) {
    document.getElementById("error-category").textContent = "Seleccione una categoría.";
    esValido = false;
  }

  const anio = parseInt(inputYear.value, 10);
  if (!inputYear.value || isNaN(anio) || anio < 0 || anio > new Date().getFullYear()) {
    document.getElementById("error-year").textContent = "Ingrese un año válido.";
    esValido = false;
  }

  return esValido;
};

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarFormulario()) return;

  const id = inputIdHidden.value ? parseInt(inputIdHidden.value, 10) : null;
  const nuevoLibro = {
    id: id || Date.now(),
    titulo: inputTitle.value.trim(),
    autor: inputAuthor.value.trim(),
    categoria: selectCategory.value,
    anio: parseInt(inputYear.value, 10),
    disponible: id ? libros.find((l) => l.id === id).disponible : true,
    imagen: inputCover.value.trim(),
  };

  if (id) {
    libros = libros.map((l) => (l.id === id ? nuevoLibro : l));
  } else {
    libros.push(nuevoLibro);
  }

  cerrarModal();
  aplicarFiltros();
});

// ── Event Listeners ──
if (btnAdd) btnAdd.addEventListener("click", abrirModal);
if (modalClose) modalClose.addEventListener("click", cerrarModal);
if (btnCancel) btnCancel.addEventListener("click", cerrarModal);

if (searchInput) searchInput.addEventListener("input", aplicarFiltros);
if (filterCategorySelect) filterCategorySelect.addEventListener("change", aplicarFiltros);
if (filterStatusSelect) filterStatusSelect.addEventListener("change", aplicarFiltros);
if (sortSelect) sortSelect.addEventListener("change", aplicarFiltros);

// ── Punto de entrada ──
document.addEventListener("DOMContentLoaded", () => {
  aplicarFiltros();
});