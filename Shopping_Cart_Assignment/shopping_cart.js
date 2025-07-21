const storeProducts = {
    apple: { price: 1.0, quantity: 10 },
    banana: { price: 0.5, quantity: 8 },
    orange: { price: 0.8, quantity: 9 },
    milk: { price: 2.0, quantity: 12 },
    eggs: { price: 6.0, quantity: 10 },
    cookies: { price: 2.5, quantity: 8 }
};

const shoppingCart = [
    ["apple", 2],
    ["banana", 3],
    ["milk", 1],
    ["cookies", 5]
];

const calculateCartTotal = (cart) => {
    let total = 0;
    for (const [item, quantity] of cart) {
        if (storeProducts[item]) {
            if (storeProducts[item].quantity >= quantity) {
                total += storeProducts[item].price * quantity;
                storeProducts[item].quantity -= quantity;
                if (storeProducts[item].quantity === 0) {
                    console.log(`${item} is now out of stock.`);
                    delete storeProducts[item];
                }
            } else {
                console.log(`Not enough ${item} in stock. Only ${storeProducts[item].quantity} left.`);
            }
        } else {
            console.log(`${item} is out of stock.`);
        }
    }
    return total;
};

const totalAmount = calculateCartTotal(shoppingCart);
console.log(`Total cart amount: $${totalAmount.toFixed(2)}`);
console.log("Updated store inventory:", storeProducts);
