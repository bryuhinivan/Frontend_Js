/* Задача: Отфильтровать массив по совершеннолетию и добавить поле id.
Input: [
  {name: 'Alex', age: 14},
  {name: 'Austin', age: 24},
  {name: 'Anthony', age: 32},
]

Output: [
  {name: 'Austin', age: 24, id: 0},
  {name: 'Anthony', age: 32, id: 1},
] */

const usersArr = [
  {name: 'Alex', age: 14},
  {name: 'Austin', age: 24},
  {name: 'Anthony', age: 32},
  {name: 'Paul', age: 17},
  {name: 'Anthony', age: 32},
  {name: 'Cole', age: 21},
];

const getTransformedUsers = users => {
  return usersArr
    .filter(user => user.age >= 18)
    .map((user, index) => ({...user, id: index}));
}

console.log(getTransformedUsers(usersArr));