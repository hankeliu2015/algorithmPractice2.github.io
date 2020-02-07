const array1 = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce((acc, curr) => acc + curr))
// console.log(array1.reduce((acc, curr) => acc + curr, 5))

console.log(array1.reduce((acc, curr) => {

  console.log("acc;", acc + curr)
  console.log("curr;", curr)
  return acc + curr;
}, 0))

// map reduce solution

let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x )
let maxCallback2 = ( max, cur ) => Math.max( max, cur )

let mapReduceSolution = [ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity )


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
