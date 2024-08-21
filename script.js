
let cart = [];

function addToCart(product, price) {
    const cartItem = { product, price };
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
