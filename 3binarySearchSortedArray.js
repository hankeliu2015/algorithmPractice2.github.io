// //
// // Binary Search for sorted array : Algorithm Lectures in JavaScript
// // indexOf is the js function.
//
//
// function binarySearch(sortedArray, targetValue) {
//   let min = 0;
//   let max = sortedArray.length
//   let guess;      //wills guess in the half way of the array
//
//   while (min <= max) {
//     guess = (min + max ) /2 | 0 //bitwise
//     // guess = Math.floor((min + max) /2);
//     element = sortedArray[guess];
//
//     if (element === targetValue) {
//       return `Matched number ${sortedArray[guess]} is found at index : ${guess}.`
//     // } else if (element < targetValue) {
//       min = guess + 1
//     } else {
//       max = guess - 1
//     }
//   }
//   return -1       // add other condition to reflect the targetValue out of range.
// }
//
// let primes = [1,2,3,4,5,6,7,8,9,10]
// console.log(binarySearch(primes, 9))
