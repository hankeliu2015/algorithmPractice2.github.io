////review
// let sum = [0,1,2,3].reduce((acc, el) => {
//   return 10;
// }, 2)
//
// console.log(sum);

// let sum = [{x: 1},{x: 2},{x: 3},].reduce((acc, el) => {
//   return acc + el.x;
// }, 0)
//
// console.log(sum)

// let flatArr = [[1,2], [3,4], [5,6]].reduce((acc, cur) => {
//   return acc.concat(cur);
// })
//
// console.log(flatArr)

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
//
// let countNames = names.reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur] += 1;
//   } else {
//     acc[cur] = 1
//   }
//   return acc;
// }, {})
//
// console.log(countNames);

//// grouping by peoperty

// let people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Joe', age: 23 },
//   { name: 'Jane', age: 20 }
// ];
//
// let groupByAge = people.reduce((acc, cur) => {
//   if(acc[cur.age]) {
//     acc[cur.age].push(cur.name);
//   } else {
//     acc[cur.age] = [cur.name]
//   }
//   return acc;
// }, {})
//
// console.log(groupByAge)

//// get all the books from an array of objects
// let friends = [{
//   name: 'Anna',
//   books: ['Bible', 'Harry Potter'],
//   age: 21
// }, {
//   name: 'Bob',
//   books: ['War and peace', 'Romeo and Juliet'],
//   age: 26
// }, {
//   name: 'Alice',
//   books: ['The Lord of the Rings', 'The Shining'],
//   age: 18
// }]
//
// let allBooksArray = friends.reduce((acc, el) => {
//   return [...acc, ...el.books];
// }, [])
//
// console.log(allBooksArray)

//// remvoe duplicated items in an array

// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
//
// let noDupArr = myArray.reduce((acc, el) => {
//   if (acc.indexOf(el) === -1) {
//     acc.push(el);
//   }
//   return acc;
// }, [])
//
// console.log(noDupArr)

//// doucle positive number
// const numbers = [-5, 6, 2, 0,];
//
// const doublePosNums = numbers.reduce((acc, el) => {
//   if (el > 0) {
//     acc.push(el * 2);
//   }
//
//   return acc;
// }, [])
//
// console.log(doublePosNums)




// const array1 = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce((acc, curr) => acc + curr))
// console.log(array1.reduce((acc, curr) => acc + curr, 5))

// console.log(array1.reduce((acc, curr) => {
//
//   console.log("acc;", acc + curr)
//   console.log("curr;", curr)
//   return acc + curr;
// }, 0))

// map reduce solution

// let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x )
// let maxCallback2 = ( max, cur ) => Math.max( max, cur )
//
// let mapReduceSolution = [ { x: 22 }, { x: 42 } ].map( el => el.x )
//                         .reduce( maxCallback2, -Infinity )


// console.log(mapReduceSolution)


// How reduce() works

// sum1
// let array2 = [0, 1, 2, 3, 4]
// console.log(array2.reduce(function(accumulator, currentValue, currentIndex, array) {
//   console.log(accumulator);
//   console.log(currentValue);
//   console.log("index;", currentIndex);
//   return accumulator + currentValue
// }))

// console.log([0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   console.log(accumulator);
//   console.log(currentValue);
//   console.log("index;", currentIndex);
//   return accumulator + currentValue
// }))

//sum 2
// let accuSum1 = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue
// }, 0)
// console.log(accuSum1)

//Flatten an array of arrays
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   function(accumulator, currentValue) {
//     return accumulator.concat(currentValue)
//   },
//   []
// )
// console.log(flattened)
// counting instances of values in an object

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
//
// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})

// console.log(countedNames)
