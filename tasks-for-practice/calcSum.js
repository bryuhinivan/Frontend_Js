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

function purchasesSum(arr) {
  const arrElements = arr.map(element => element.price);
  const elementsSum = arrElements.reduce((acc, element) => acc + element, 0)
  return elementsSum;
}

console.log('Сумма всех покупок:', purchasesSum(purchases), 'руб.');