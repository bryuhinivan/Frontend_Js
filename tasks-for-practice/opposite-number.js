/* Очень просто: дано число (целое / десятичное / и то, и другое в зависимости от языка),
найти его противоположность (аддитивное обратное число). */


function additiveNumber (number) {
  return -number;
}

console.log(additiveNumber(-0.12));


/* function oppositeNum(number) {
  if (number > 0 || number < 0) {
    return -number;
  } else {
    return 0;
  }
}

console.log(oppositeNum(23));
console.log(oppositeNum(-5));
console.log(oppositeNum(0));
console.log(oppositeNum(0.25));
console.log(oppositeNum(-0.57)); */


// Альтернативное решение
/* function oppositeNum(number) {
  return number !== 0 ? -number : 0
} */ 

