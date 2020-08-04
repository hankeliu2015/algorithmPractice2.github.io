// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);
//
// console.log(result)
//// filter out big enough numbers
// function isBigEnough(value) {
//   return value >= 10; // return true or false
// }
//
// // let filteredElments = [12, 5, 8, 130, 44].filter(isBigEnough)
// let filteredElments = [12, 5, 8, 130, 44].filter(el => el >= 10)
// console.log(filteredElments)

//// filter all prime number
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17];
//
// let primeNum = array.filter(el => {
//   for (i = 2; i <= Math.floor(el / 2) ; i++) {
//     if ((el % i) === 0) {
//       return false;
//     }
//   }
//   return true;
// })
//
// console.log(primeNum);

//// create a filtered json of all elements with non-zero

// let array = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ]
//
// let invalidEntries = 0
//
// let validJson = array.filter(el => {
//   return (Number.isFinite(el.id) && el.id !==0);
// })
// console.log(validJson);

//// search in array

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// function searchArray(array, query) {
//   return array.filter(el => {
//     return el === query;
//   })
// }
// console.log(searchArray(fruits, 'banana'));

//// ES6 implementation

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
//
// const filterItems = (array, query) => {
//   return array.filter(el => el.toLowerCase() === query.toLowerCase() )
// }
//
// console.log(filterItems(fruits, 'mango'))

//// modifying with words
// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
//
// const modifyWords = words.filter((word, index, array) => {
//   array[index + 1] += ' extra';
//   return word.length < 6;
// })
//
// console.log(modifyWords);
// console.log(words);

//// appending new words
// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const wordAppend = words.filter((word, index, array) => {
//   array.push('new');
//   return word.length < 6
// })
//
// console.log(wordAppend);
// console.log(words);

//// deleting words
// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const deletedWords = words.filter((word, index, array) => {
//   array.pop();
//   return word.length < 6;
// })
//
// console.log(deletedWords)
// console.log(words)
