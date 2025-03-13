/* Напишите функцию createIdGenerator(), 
которая будет генерировать уникальные идентификаторы каждый раз, 
когда она вызывается. Используйте замыкание, 
чтобы сохранить текущий счётчик идентификаторов.*/

function createIdGenerator() {
  let count = 1;

  return function () {
    return count++;
  };
}

const generateId = createIdGenerator();
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3