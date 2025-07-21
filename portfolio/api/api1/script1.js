const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = [];
let cartItems = [];

// Fetch products from DummyJSON API
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data.products;
    displayProducts(allProducts);
  })
  .catch((error) => console.error("Error fetching products:", error));

// Display products
function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="card-content">
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

// Add to cart
function addToCart(id) {
  const product = allProducts.find((p) => p.id === id);
  if (product) {
    cartItems.push(product);
    updateCart();
  }
}

// Remove from cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Update cart and cart modal
function updateCart() {
  cartCount.textContent = cartItems.length;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
  document.getElementById("cartModalTotal").textContent = total.toFixed(2);

  const cartList = document.getElementById("cartItemsList");
  cartList.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} - ₹${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });
}

// Toggle cart modal display
function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Filter by category and search
categoryFilter.addEventListener("change", () => {
  filterAndDisplay();
});

searchInput.addEventListener("input", () => {
  filterAndDisplay();
});

function filterAndDisplay() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = allProducts.filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchSearch =
      product.title.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });

  displayProducts(filtered);
}
