/* Напишите функцию, которая возвращает количество полученных аргументов.

args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2 */

/* function returnCountArguments () {
  const count = returnCountArguments.arguments.length;

  return `Количество аргументов, переданных в функцию: ${count}`;
}

const a = 1;
const b = '2';
const c = 3;
const d = '4';
const f = '5';
const k = 6;
const l = 'Доброе утро!'

console.log(returnCountArguments());
console.log(returnCountArguments(a));
console.log(returnCountArguments(a, b));
console.log(returnCountArguments(a, b, c));
console.log(returnCountArguments(a, b, c, d));
console.log(returnCountArguments(a, b, c, d, f));
console.log(returnCountArguments(a, b, c, d, f, k));
console.log(returnCountArguments(a, b, c, d, f, k, l)); */



/* // Альтернативное решение
// ...args: Это rest-параметр, который собирает все переданные аргументы в массив args
function returnCountArguments(...args) {

// args.length: Возвращает количество элементов в массиве args, то есть количество переданных аргументов.
  const count = args.length; 
  return `Количество аргументов, переданных в функцию: ${count}`;
} */


function countArguments(...args) {
  return args.length;
}

console.log(countArguments(x = 10, y = 20, 'z'));