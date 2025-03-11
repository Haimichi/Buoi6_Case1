// src/js/modules/products.js

const products = [];

// Fetch product data from an API or local source
async function fetchProducts() {
    try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        products.push(...data);
        displayProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products on the website
function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span>$${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add a product to the cart
function addToCart(productId) {
    // Logic to add the product to the cart
    console.log(`Product ${productId} added to cart.`);
}

// Initialize the products module
fetchProducts();

export { fetchProducts, displayProducts, addToCart };