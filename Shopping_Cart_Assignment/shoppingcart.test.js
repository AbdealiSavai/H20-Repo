const { storeProducts, calculateCartTotal } = require('./shopping_cart');


describe('calculateCartTotal', () => {

    test('correct total for basic cart', () => {
        const cart = [
            ['apple', 2], // 1.0 * 2 = 2.0
            ['banana', 4] // 0.5 * 4 = 2.0
        ];
        const clonedStore = JSON.parse(JSON.stringify(storeProducts)); // avoid mutation
        const total = calculateCartTotal(cart);
        expect(total).toBe(4.0);
    });

    test('handles item not in store', () => {
        const cart = [
            ['unicorn', 1], // not in store
            ['milk', 1]     // 2.0 * 1 = 2.0
        ];
        const clonedStore = JSON.parse(JSON.stringify(storeProducts));
        const total = calculateCartTotal(cart);
        expect(total).toBe(2.0);
    });

});