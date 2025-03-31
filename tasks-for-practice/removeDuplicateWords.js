/* Ваша задача — удалить все повторяющиеся слова из строки, оставив только отдельные (первые) слова.

Пример:

Ввод:

'альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта'

Вывод:

'альфа бета гамма дельта' */

function removeDuplicates (str) {
  const words = str.split(' ');
  const seen = new Set();
  const uniqueWords = [];
  for (const word of words) {
    if (!seen.has(word)) {
      seen.add(word);
      uniqueWords.push(word);
    }
  }
  return uniqueWords.join(' ');
}

const str = 'альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма гамма дельта';
const outputStr = removeDuplicates(str);
console.log(outputStr);