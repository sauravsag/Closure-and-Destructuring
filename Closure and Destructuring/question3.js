
function shoppingCart() {
    let cart = [];

    return {
        addItem: function(item) {
            cart.push(item);
        },
        getCartItems: function() {
            return cart;
        }
    };
}

const cartInstance = shoppingCart();
cartInstance.addItem('apple');
cartInstance.addItem('banana');
cartInstance.addItem('mango');

console.log('Cart Items:', cartInstance.getCartItems()); 
