const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = [];
let cartItems = []; // each item: { id, title, price, quantity }

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

// Add to cart with quantity logic
function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  const existing = cartItems.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ id: product.id, title: product.title, price: product.price, quantity: 1 });
  }
  updateCart();
}

// Remove from cart or decrease quantity
function removeFromCart(id) {
  const index = cartItems.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems[index].quantity -= 1;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
    updateCart();
  }
}

// Update cart display
function updateCart() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice.toFixed(2);
  document.getElementById("cartModalTotal").textContent = totalPrice.toFixed(2);

  const cartList = document.getElementById("cartItemsList");
  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart(${item.id})">Remove</button>
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
categoryFilter.addEventListener("change", filterAndDisplay);
searchInput.addEventListener("input", filterAndDisplay);

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
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submit
  document.getElementById("thankYouMsg").classList.remove("hidden");
  this.reset(); // reset form fields
});
//  Buy option in cart
document.getElementById("buyNowBtn").addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  alert(`Thank you for your purchase!\nTotal Amount: ₹${total.toFixed(2)}`);
  cartItems = []; // Clear cart
  updateCart();
  toggleCart();   // Hide cart after buying
});
