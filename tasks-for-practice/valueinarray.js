/* Является ли каждое значение в массиве массивом?
Это должно проверить только второе измерение массива. 
Значения вложенных массивов не обязательно должны быть массивами.

Примеры:
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false */

const arr1 = [[1], [2]];
const arr2 = ['1', '2'];
const arr3 = [{1:1}, {2:2}];

const areValuesArr1 = arr1.every(item => Array.isArray(item));
console.log(areValuesArr1);

const areValuesArr2 = arr2.every(item => Array.isArray(item));
console.log(areValuesArr2);

const areValuesArr3 = arr3.every(item => Array.isArray(item));
console.log(areValuesArr3);