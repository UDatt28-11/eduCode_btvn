const productsEle = document.getElementById("products");
const previewEle = document.getElementById("preview");
const nextEle = document.getElementById("next");
const paginationEle = document.getElementById("pagination");

let page = 1;
let limit = 10;
let totalProducts;

const fetchProducts = async () => {
  const skip = (page - 1) * limit;
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const { products, total } = await res.json();
    totalProducts = total;

    const sortOrder = sortOrderEle.value;
    if (sortOrder === "asc") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      products.sort((a, b) => b.price - a.price);
    }

    renderUI(products);
    renderPagination();
  } catch (error) {
    console.log(error);
  }
};

const search = document.getElementById("searchBtn");
search.addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  searchProduct(query);
});
function searchProduct(query) {
  fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
    .then((res) => res.json())
    .then((data) => {
      renderUI(data.products);
      paginationEle.innerHTML = ""; // Xóa phân trang khi tìm kiếm
    });
}
search.addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    searchProduct(query);
  } else {
    fetchProducts();
  }
});
const sortOrderEle = document.getElementById("sortOrder");
sortOrderEle.addEventListener("change", () => {
  page = 1; // reset về trang đầu
  fetchProducts();
});

const renderUI = (products) => {
  productsEle.innerHTML = "";
  products.forEach((product) => {
    const productEle = document.createElement("div");
    productEle.classList.add("product");
    productEle.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    `;
    productsEle.appendChild(productEle);
  });
};

const renderPagination = () => {
  const totalPages = Math.ceil(totalProducts / limit);
  paginationEle.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === page) btn.classList.add("active");
    btn.addEventListener("click", () => {
      page = i;
      fetchProducts();
    });
    paginationEle.appendChild(btn);
  }
};

previewEle.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchProducts();
    updateCurrentPage();
  }
});

nextEle.addEventListener("click", () => {
  const totalPages = Math.ceil(totalProducts / limit);
  if (page < totalPages) {
    page++;
    fetchProducts();
    updateCurrentPage();
  }
});
const currentPageEle = document.getElementById("current-page");

function updateCurrentPage() {
  currentPageEle.textContent = page;
}

fetchProducts();
