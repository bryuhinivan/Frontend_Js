/* Напишите функцию findUnique, которая возвращает единственное уникальное число из массива.

Все числа в несортированном массиве присутствуют дважды, за исключением того, которое вам нужно найти. Числа всегда являются допустимыми целыми значениями от 1 до 2147483647, поэтому нет необходимости в проверке типов и ошибок. Массив содержит как минимум одно число и может содержать миллионы чисел. Поэтому убедитесь, что ваше решение оптимизировано для скорости.

Пример
Входные данные:
[ 1, 8, 4, 4, 6, 1, 8 ]
Ожидаемый вывод:
6 */

function findUnique(arr) {
  const unique = new Set();
  const duplicates = new Set();

  arr.forEach(num => {
    if (unique.has(num)) {
      duplicates.add(num);
      unique.delete(num);
    } else if (!duplicates.has(num)) {
      unique.add(num);
    }
  });

  return unique.values().next().value;
}

// Пример:
console.log(findUnique([1, 8, 4, 4, 6, 1, 8 ])); // 1