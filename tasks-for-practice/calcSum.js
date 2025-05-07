/* Посчитай сумму покупок. */

const purchases = [
  { item: 'Laptop', price: 1000 },
  { item: 'Phone', price: 500 },
  { item: 'Headphones', price: 150 },
  { item: 'Keyboard', price: 100 },
];


/* function countProducts(arr){
  const itemArr = arr.map(item => item.price);
  console.log(itemArr);
  const sum = itemArr.reduce((acc, num) => acc + num, 0);
  console.log(sum);
}

countProducts(purchases); */

function countProducts(arr) {
  return arr.map(item => item.price).reduce((acc, num) => acc + num, 0)
}

console.log(countProducts(purchases));