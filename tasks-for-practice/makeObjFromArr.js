/* Задача: сделать из массива объект.
input: ['meat', 'milk', 'carrot', 'apple', 'water']
output: {
  "0": "meat",
  "1": "milk",
  "2": "carrot",
  "3": "apple",
  "4": "water",
} */

const products = ['meat', 'milk', 'carrot', 'apple', 'water'];

const getProductsObject = arr => {
  return obj = {...arr};
}

console.log(getProductsObject(products));