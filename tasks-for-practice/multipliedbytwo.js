/* Дан массив целых чисел, вернуть новый массив с каждым удвоенным значением.
Например:
[1, 2, 3] --> [2, 4, 6] */

/* const numbers = [1, 2, 3];

const mulByTwo = numbers.map(num => num * 2);
console.log(mulByTwo); */



const numbers = [1, 2, 3];

function arrResult(arr) {
  const numbersX2 = arr.map(num => num * 2);
  return numbersX2;
}

console.log(arrResult(numbers));