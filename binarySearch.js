// linary search - slow then binary search
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let numbersLength = numbers.length;
// let count = 1;
//
// for (let i = 0; i < numbersLength; i++) {
//   console.log(count);
//   if ( numbers[i] === 7) return i;
//   count++
// }

// Binary Search : Algorithm Lectures in JavaScript
// indexOf is the js function.

// let primes = [1,2,3,4,5,6,7,8,9,10]
//
// function binarySearch(sortedArray, targetValue) {
//   let min = 0;
//   let max = sortedArray.length
//   let guess;
//   while (min <= max) {
//     guess = (min + max ) /2 | 0 //bitwise
//     // guess = Math.floor((min + max) /2);
//     element = sortedArray[guess];
//     if (element === targetValue) {
//       return guess
//     } else if (element < targetValue) {
//       min = guess + 1
//     } else {
//       max = guess - 1
//     }
//   }
//   return -1
// }
//
// console.log(binarySearch(primes, 10))
