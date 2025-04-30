/* Задана строка слов, верните длину самого короткого слова(слов).
Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных. */

/* const strWords= 'Сегодня самый замечательный день во вселенной!'; 

const arrWords = strWords.split(' ');
console.log(arrWords);

const minLength = Math.min(...arrWords.map(word => word.length));
console.log(minLength); */

const message = 'Добрый день уважаемые родители';

function findShortestWordLength(str) {
  const words = str.split(' ');
  console.log(words);
  let shortestLength = words.map(word => word.length);
  console.log(shortestLength);
  shortestLength = Math.min(...shortestLength);
  return shortestLength;
}

console.log(findShortestWordLength(message));
