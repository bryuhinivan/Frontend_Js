/* Задача: У тебя есть объект, в котором хранится информация
о пользователях и их возрасте.
Нужно изменить возраст каждого пользователя на 1 год.

Input: {
  user1: { name: "Alice", age: 25},
  user2: { name: "Bob", age: 30},
  user3: { name: "Charlie", age: 35},
}
Output: {
  user1: { name: "Alice", age: 26},
  user2: { name: "Bob", age: 31},
  user3: { name: "Charlie", age: 36},
} */

const u = {
  user1: { name: "Alice", age: 25},
  user2: { name: "Bob", age: 30},
  user3: { name: "Charlie", age: 35},
};

const addOneYearForAge = (users) => {
  const result = {};
  for (const key in users) {
    result[key] = {
      ...users[key],
      age: users[key].age + 1
    };
  }
  return result;
};

console.log(addOneYearForAge(u));