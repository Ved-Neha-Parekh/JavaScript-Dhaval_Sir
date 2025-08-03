const dummyProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "./imgs/WirelessHeadphones.avif",
    stock: 15,
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 199.99,
    image: "./imgs/Smartwatch.avif",
    stock: 10,
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: 49.99,
    image: "./imgs/PortableSpeaker.avif",
    stock: 20,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 79.99,
    image: "./imgs/GamingMouse.avif",
    stock: 8,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "./imgs/MechanicalKeyboard.avif",
    stock: 12,
  },
  {
    id: 6,
    name: "4K Monitor",
    price: 349.99,
    image: "./imgs/4KMonitor.avif",
    stock: 7,
  },
];

const productList = document.getElementById("productList");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalDisplay = document.getElementById("cartTotal");
const cartItemCountBadge = document.getElementById("cartItemCount");
const emptyCartMsg = document.getElementById("emptyCartMsg");

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(dummyProducts));
}

const products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col");
    productCard.innerHTML = `
                <div class="card product-card h-100">
                    <img src="${
                      product.image
                    }" class="card-img-top product-image" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text fw-bold text-success">₹${product.price.toFixed(
                              2
                            )}</p>
                            <p class="card-text text-muted">Stock: ${
                              product.stock
                            }</p>
                            <button class="btn btn-primary btn-add-to-cart mt-auto" data-id="${
                              product.id
                            }">
                                    Add to Cart
                            </button>
                        </div>
                </div>
            `;
    productList.appendChild(productCard);
  });
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartItemCount();
}

function addToCart(productId) {
  const product = products.find((p) => p.id == productId);
  const cartItem = cart.find((item) => item.id == productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function displayCart() {
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    emptyCartMsg.style.display = "block";
  } else {
    emptyCartMsg.style.display = "none";
    cart.forEach((item) => {
      const cartItemElm = document.createElement("div");
      cartItemElm.classList.add("cart-item");

      cartItemElm.innerHTML = `
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <h6 class="mb-0">${item.name}</h6>
                            <small class="text-muted">₹${item.price.toFixed(
                              2
                            )}</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center quantity-control">
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${
                          item.id
                        }, 1)">+</button>
                        <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart(${
                          item.id
                        })">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    `;
      cartItemsContainer.appendChild(cartItemElm);
    });
  }
  updateCartTotal();
}

function changeQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id == productId);
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalDisplay.textContent = `₹${total.toFixed(2)}`;
}

function updateCartItemCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemCountBadge.textContent = totalItems;
}

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-to-cart")) {
    const productId = e.target.dataset.id;
    addToCart(productId);
  }
});

displayProducts();
updateCart();
