
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    const cartItem = { product, price };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    alert(`${product} added to cart!`);
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    if (!cartList || !cartTotal) return; // Exit if not on cart.html

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Only run updateCart if on the cart page
document.addEventListener('DOMContentLoaded', updateCart);
