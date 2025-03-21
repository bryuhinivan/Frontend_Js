const user = {
  name: 'Александр',
  age: 28,
  city: 'Москва',
}

const userKeys = Object.values(user);

console.log('userKeys:', userKeys);

userKeys.forEach((value) => {
  console.log('Значение свойства:', value);
})