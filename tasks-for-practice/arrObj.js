/* Задача. У тебя есть массив объектов, каждый из которых содержит имя и количество товара.
Нужно преобразовать его в объект, где ключами будут имена товаров, а значениями их количество. 
Input: [
 { name: "Apple", count: 100},
 { name: "Banana", count: 60},
 { name: "Orange", count: 90},
 { name: "Apple", count: 40},
]

Output: {
  "Apple": 140,
  "Banana": 60,
  "Orange": 90
  */

const p = [
 { name: "Apple", count: 100},
 { name: "Banana", count: 60},
 { name: "Orange", count: 90},
 { name: "Apple", count: 40},
];
console.log(p);

const result = p.reduce((acc, {name, count}) => {acc[name] = (acc[name] || 0) + count;
return acc;
}, {});

console.log(result);