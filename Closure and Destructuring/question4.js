function shoppingCart() {
    let cart = [];

    return {
        addItem: function(product) {
            const existingProductIndex = cart.findIndex(item => item.productId === product.id);
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({
                    productId: product.id,
                    name: product.name,
                    quantity: 1,
                    price: product.price
                });
            }
        },
        getCartItems: function() {
            return cart;
        }
    };
}

const product1 = { id: 1, name: 'product 1', price: 10 };
const product2 = { id: 2, name: 'product 2', price: 20 };

const cartInstance = shoppingCart();
cartInstance.addItem(product1);
cartInstance.addItem(product2);
cartInstance.addItem(product1);

console.log('Cart Items:', cartInstance.getCartItems());