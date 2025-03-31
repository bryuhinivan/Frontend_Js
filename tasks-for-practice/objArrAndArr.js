/*
Задача: сделать из объекта массив с массивами.
Input: {Alex: 22,George: 32}
Output: [[Alex, 22], [George, 32]]
*/

const users = {
  Alex: 22,
  George: 32,
  James: 31,
  Rose: 25,
}

const formatUsers = users => {
  const arr = Object.entries(users);
  return arr;
}

console.log(formatUsers(users));