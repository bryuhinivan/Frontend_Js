/* Добро пожаловать. В этом ката вам предлагается 
возвести в квадрат каждую цифру числа и объединить их.

Например, если мы пропустим 9119 через функцию, то получится 811181, 
потому что 9 в квадрате — это 81, а 1 в квадрате — это 1. (81-1-1-81)

Пример № 2: ввод 765 вернет/должен вернуть 493625, 
потому что 7 в квадрате — это 49, 6 к квадрате — это 36, а 5 в квадрате — это 25. (49-36-25)

Примечание: функция принимает целое число и возвращает целое число.
Удачного кодирования!
 */

const number = 765;

const strNumber = number.toString();
console.log(strNumber);

const arrayStrNumber = strNumber.split('');
console.log(arrayStrNumber);

const arrayNumber = arrayStrNumber.map(Number);
console.log(arrayNumber);

const squareArrayNumber = arrayNumber.map(num => num * num);
console.log(squareArrayNumber);

const concatSquareArrayNumber = squareArrayNumber.join('');
console.log(concatSquareArrayNumber);
console.log(typeof concatSquareArrayNumber);

const result = +concatSquareArrayNumber;
console.log(result);

