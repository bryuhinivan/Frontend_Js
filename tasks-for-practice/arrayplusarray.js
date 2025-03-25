/* Я новичок в программировании и теперь хочу получить 
сумму двух массивов... На самом деле сумму всех их элементов. 
Буду признателен за помощь.
P.S. Каждый массив включает только целые числа. Вывод тоже является числом. */

const arr1 = [1, 2, 3, 4, 5, 5, 6, 6, 7];
const arr2 = [-1, 2, -13, 44, 5, 90, 140, -6, -7];

const resultArr1Arr2 = arr1.concat(arr2);
console.log(resultArr1Arr2);

const sumResultArr1Arr2 = resultArr1Arr2.reduce((sum, num) => sum + num, 0);
console.log(sumResultArr1Arr2);