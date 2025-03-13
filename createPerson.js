/*
Создайте объект с методами для работы с приватными переменными. 
Объект должен иметь метод setName для установки имени и метод getName для получения имени. 
Имя должно быть доступно только через эти методы, а не напрямую.
 */
 
function createPerson() {
  let name;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    }
  }
}

const person = createPerson();
person.setName('Alice');
console.log(person.getName()); // Alice
console.log(person.name); // undefined (нельзя напрямую обратиться)
