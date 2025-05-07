// Задача. Создать собственную реализацию метода map и метода filter

const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (fn) {
  const arr = this;
  const result = [];

  arr.forEach((item) => {
    const transformedItem = fn(item);
    result.push(transformedItem);
  });

  return result;
};

Array.prototype.myFilter = function (fn) {
  const result = [];

  this.forEach((item) => {
    if (fn(item)) {
      result.push(item);
    }
  });

  return result;
};
