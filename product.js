const products = [
    { id: 1, name: "Product 1", price: 19.99, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 29.99, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 39.99, img: "https://via.placeholder.com/150" },
];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.appendChild(productDiv);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} has been added to your cart!`);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}

// Initialize the product display and cart count
displayProducts();
updateCartCount();
