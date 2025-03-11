// src/js/modules/cart.js

const cart = {
    items: [],

    addItem(item) {
        this.items.push(item);
        this.updateCart();
    },

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateCart();
    },

    viewCart() {
        return this.items;
    },

    updateCart() {
        // Logic to update the cart display on the website
        console.log('Cart updated:', this.items);
    }
};

export default cart;