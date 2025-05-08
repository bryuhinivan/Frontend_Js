/* Посчитай сумму покупок. */

const purchases = [
  { item: 'Laptop', price: 1000 },
  { item: 'Phone', price: 500 },
  { item: 'Headphones', price: 150 },
  { item: 'Keyboard', price: 100 },
];

function purchasesSum(arr) {
  const sumElements = arr
    .map(element => element.price) // [1000, 500, 150, 100]
    .reduce((acc, num) => acc + num, 0); // 1750
  return sumElements;
}

console.log('Сумма всех покупок:', purchasesSum(purchases), 'руб.');