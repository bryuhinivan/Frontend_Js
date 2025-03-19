/* Создайте функцию, которая принимает целое число в качестве аргумента
и возвращает «Even» для четных чисел или «Odd» для нечетных чисел. */

function evenOrOdd(number) {
  if ( number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(0));
console.log(evenOrOdd(-1));