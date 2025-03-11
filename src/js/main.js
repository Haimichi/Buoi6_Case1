// src/js/main.js

import { login, logout } from './modules/auth.js';
import { addToCart, removeFromCart, viewCart } from './modules/cart.js';
import { fetchProducts, displayProducts } from './modules/products.js';
import { searchProducts } from './modules/search.js';
import { fetchUserProfile, updateUserProfile } from './modules/user.js';

// Initialize the application
function init() {
    // Fetch and display products on the homepage
    fetchProducts().then(displayProducts);

    // Set up event listeners for authentication
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Set up event listeners for cart functionalities
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);
    document.getElementById('removeFromCartBtn').addEventListener('click', removeFromCart);
    document.getElementById('viewCartBtn').addEventListener('click', viewCart);

    // Set up search functionality
    document.getElementById('searchInput').addEventListener('input', (event) => {
        searchProducts(event.target.value);
    });

    // Fetch and display user profile
    fetchUserProfile().then(profile => {
        // Update UI with user profile data
    });

    // Set up event listener for updating user profile
    document.getElementById('updateProfileBtn').addEventListener('click', updateUserProfile);
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);