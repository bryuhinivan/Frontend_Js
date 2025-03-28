/* Дана строка, сделайте заглавными буквы, 
которые занимают четные и нечетные индексы по отдельности,
и верните, как показано ниже. Индекс 0 будет считаться четным.

Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. См. тестовые случаи для дополнительных примеров.
Входными данными будет строка в нижнем регистре без пробелов. */


function capitalize (str) {
  const chars = str.split('');
  
  const evenCaps = chars.map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join('');
  
  const oddCaps = chars.map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('');
  
  return [evenCaps, oddCaps];
}

const str = 'abcdef';
console.log(capitalize(str));
