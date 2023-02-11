const numbers = [45, 234, 543, 324, 322];
// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number)
// }
// for of loop
// for (const number of numbers) {
//     console.log(number)
// }

const products = [
    { id: 1, name: 'walton phone', price: 12908 },
    { id: 2, name: 'Iphone', price: 11908 },
    { id: 3, name: 'smartPhone', price: 129 },
    { id: 4, name: 'laptop', price: 5908 },
    { id: 5, name: 'desktop', price: 44448 },
    { id: 6, name: 'Laptop', price: 3242 },
    { id: 7, name: 'LG PHone', price: 32432 },
];
// for (const product of products) {
//     console.log(product)
// }
function mathchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = mathchedProducts(products, 'Phone');
console.log(result)