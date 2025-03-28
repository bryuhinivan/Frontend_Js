/* Задача
Вам будет дан массив чисел. 
Вам нужно отсортировать нечетные числа в порядке возрастания, 
оставив четные числа на исходных позициях.

Примеры
[7, 1] => [1, 7]
[5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortOdd (arr) {
  const oddNumbers = arr.filter(num => num % 2 !==0).sort((a, b) => a - b);

  let oddIndex = 0;
  return arr.map(num => {
    if (num % 2 !== 0) {
      return oddNumbers[oddIndex++];
    }
    return num;
  });
}

console.log(sortOdd([7, 1]));
console.log(sortOdd([5, 8, 6, 3, 4]));
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));


