// Bài tập 6

const products = [
  { name: "Phone", price: 50 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 }
];

const result = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 100) {
        result.push(products[i]);
    }
 }

console.log(result);

const filtered = products.filter(product => product.price > 100);
console.log(filtered);