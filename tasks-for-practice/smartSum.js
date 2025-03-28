/* Ваша задача — написать функцию smartSum, 
которая возвращает сумму произвольного числа аргументов. 
Но будьте осторожны, некоторые из ваших аргументов могут быть массивами чисел
или вложенными массивами.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21*/

function smartSum(...args) {
  const arr = args.flatMap(arg => Array.isArray(arg) ? smartSum(...arg) : Number(arg));
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(smartSum(1,2,3,[4,5],6));
console.log(smartSum(1,2,[[3,4],5],6));