/* Задача
Вы получаете массив чисел, возвращаете сумму всех положительных единиц.

Пример
[1, -4, 7, 12] => 1 + 7 + 12 = 20
1+7+12=20

Примечание
Если суммировать нечего, сумма по умолчанию равна 0. */

const arrNumbers = [1, -4, 7, 12];

const allPosArrNumbers = arrNumbers.filter(num => num > 0);
console.log(allPosArrNumbers);

const sumAllPositivesNumbers = allPosArrNumbers.reduce((acc, current) => acc + current, 0);
console.log(sumAllPositivesNumbers);