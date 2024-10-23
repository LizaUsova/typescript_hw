interface  Product {
    name: string,
    price: number,
    inStock: true
}

function foo (product: Product): string {
    const {name, price, inStock} = product;
    const availability = inStock ? 'Yes' : 'No';

    return `Product: ${name}, price: ${price}, inStock: ${availability}`
}

const product: Product = {
    name: 'Apple',
    price: 40,
    inStock: true,
};

console.log(foo(product));
