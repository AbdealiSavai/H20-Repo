const storeProducts = {
    apple: { price: 1.0, quantity: 10 },
    banana: { price: 0.5, quantity: 8 },
    orange: { price: 0.8, quantity: 5 },
    milk: { price: 2.0, quantity: 6 }
};

const shoppingCart = [
    ["apple", 2],
    ["banana", 3],
    ["milk", 1]
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


const storeItems = {
    apple: 1.0,
    banana: 0.5,
    orange: 0.8,
    milk: 2.0
};

let domCartTotal = 0;

window.addEventListener("DOMContentLoaded", () => {
    const storeItemsDiv = document.getElementById("store-items");
    const cartList = document.getElementById("cart");
    const cartTotalSpan = document.getElementById("cart-total");

    
    for (const item in storeItems) {
        const button = document.createElement("button");
        button.textContent = `${item}`;
        button.addEventListener("click", (event) => {
            const clickedItem = event.target.textContent;
            addToCart(clickedItem);
            updateTotal(storeItems[clickedItem]);
        });
        storeItemsDiv.appendChild(button);
    }

    
    function addToCart(itemName) {
        const cartItem = document.createElement("li");
        const textNode = document.createTextNode(itemName);
        cartItem.appendChild(textNode);
        cartList.appendChild(cartItem);
    }

    
    function updateTotal(price) {
        domCartTotal += price;
        cartTotalSpan.innerHTML = domCartTotal.toFixed(2);
    }
});