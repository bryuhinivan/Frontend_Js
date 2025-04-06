/* Задача. У тебя есть массив объектов с данными о студентах (имя и оценка).
Необходимо отсортировать студентов по оценке и оставить только тех, у кого оценки выше 50. */

const students = [
  {name: "Anna", grade: 45},
  {name: "Ivan", grade: 67},
  {name: "Maria", grade: 80},
  {name: "Alex", grade: 52},
];
students.sort((a, b) => a.grade - b.grade)
const arrStudentGrade = students.filter(item => item.grade > 50);
console.log(arrStudentGrade);