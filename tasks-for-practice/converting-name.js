/* Напишите функцию для преобразования имени в инициалы. 
Эта ката строго принимает два слова с одним пробелом между ними.
Вывод должен состоять из двух заглавных букв с точкой между ними.

Это должно выглядеть так:
Sam Harris => S.H
patrick feeney => P.F */

function convertNameInitials(str) {
  const nameSurName = str.split(" ");
  // console.log(nameSurName);
  const firstName = nameSurName[0][0];
  const secondName = nameSurName[1][0];


  return `${firstName.toUpperCase()}.${secondName.toUpperCase()}`;
}

console.log(convertNameInitials("Sam Harris"));
console.log(convertNameInitials("patricr feeney"));
