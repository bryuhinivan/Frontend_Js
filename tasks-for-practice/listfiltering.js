/* В этом ката вы создадите функцию, которая принимает 
список неотрицательных целых чисел и строк и возвращает
новый список с отфильтрованными строками.
Пример
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

const mixedArray = [1, 2, 'a', 'b'];

const number = mixedArray.filter(item => typeof item === 'number');
console.log(number);

