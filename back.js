let cart = [];
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  displayCartItems();
  updateTotalPrice();
}

function displayCartItems() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

function updateTotalPrice() {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  totalPriceElement.textContent = total.toFixed(2);
}

function toggleCart() {
  cartPopup.style.display = cartPopup.style.display === 'none' ? 'block' : 'none';
}

function clearCart() {
  cart = [];
  updateCart();
  cartPopup.style.display = 'none';
}
