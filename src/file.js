"use strict";
function foo(product) {
    const { name, price, inStock } = product;
    const availability = inStock ? 'Yes' : 'No';
    return `Product: ${name}, price: ${price}, inStock: ${availability}`;
}
const product = {
    name: 'Apple',
    price: 40,
    inStock: true,
};
console.log(foo(product));
