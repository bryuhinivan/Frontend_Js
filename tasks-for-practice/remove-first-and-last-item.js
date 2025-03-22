/* Это довольно просто. Ваша цель — создать функцию, 
которая удаляет первый и последний символы строки. 
Вам дан один параметр — исходная строка. 
Вам не нужно беспокоиться о строках, содержащих менее двух символов. */

function removeFirstAndLastItem (str) {
  const firstAndLastItem = str.slice(1, -1);
  
  return `Строка без первого и последнего символа: ${firstAndLastItem}`;
}

console.log(removeFirstAndLastItem("Привет!"));
console.log(removeFirstAndLastItem("Доброе утро! И хорошего дня."));