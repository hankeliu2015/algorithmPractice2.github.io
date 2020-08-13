// function binarySearch1(array, targetV) {
//   let min = 0;
//   let max = array.length;
//   let found = false;
//   let guessValue;
//
//   while(min <= max) {
//
//     guessIndex = Math.floor((max + min)/2);
//     let guessValue  = array[guessIndex];
//
//     if(targetV === guessValue) {
//       // find the value guessValue
//       found = true;
//       break;
//     } else if (targetV < guessValue) {
//       // go left
//       max = guessIndex - 1;
//     } else if (targetV > guessValue) {
//       // go right
//       // debugger
//       min = guessIndex + 1;
//     } else if (!guessValue) { // must have this condition, other wise loop won't stop.
//       break;
//     }
//   }
//   return found;
//
// }
// console.log(binarySearch1([1,2,3], 3))

// //
// // Binary Search for sorted array : Algorithm Lectures in JavaScript
// // indexOf is the js function.
//
//
function binarySearch2(sortedArray, targetValue) {
  let min = 0;
  let max = sortedArray.length
  let guessIndex;      //wills guess in the half way of the array

  while (min <= max) {
    guessIndex = (min + max ) /2 | 0 //bitwise
    // guessIndex = Math.floor((min + max) /2); //same equations but slower.
    guessValue = sortedArray[guessIndex];

    if (guessValue === targetValue) {

      console.log(`Matched number ${sortedArray[guessIndex]} is found at index : ${guessIndex}.`);
      return 1;

    } else if (guessValue < targetValue) {
      min = guessIndex + 1
    } else {
      max = guessIndex - 1
    }
  }

  console.log(`Target number ${targetValue} is not found`)
  return -1
}
//
// //retest
//
// function binarySearch(sortedArr, targetV){
//   let min = 0
//   let max = sortedArr.length;
//   let guessIndex;
//   let diff;
//
//   while(min <= max) {
//     guessIndex = (min + max) / 2 | 0
//     guessValue = sortedArr[guessIndex];
//
//     if (guessValue === targetV) {
//       console.log(`value ${targetV} found at index ${guessIndex}`)
//       return 1;
//     } else {
//       if (targetV < guessValue) {
//         max = guessIndex - 1;
//       } else {
//         min = guessIndex + 1;
//       }
//       // else if (!guessValue) {
//       //   console.log(`value ${targetV} is not found.`)
//       //   return -1;
//       // }
//     }
//   }
//
//   console.log(`value ${targetV} is not found.`)
//   return -1;
// }
//
// let primes1 = [1,2,3,4,5,6,7,8,9,10];
// let primes2 = [1,2,3];
//
//
// // console.log(binarySearch(primes1, 11));
// // console.log(binarySearch(primes2, 3));
// console.log(binarySearch(primes2, 4));
// // guessIndex = 1 ; min = 1; max = 3;
// // guessIndex = 1 + 3 / 2 = 2; min = 2; max = 3
// // guessIndex = 2 + 3 / 2 = 2; min = 3; max = 3
// // guessIndex = 3 + 3 / 2 = 3; min = 4; max = 3
// // min > max; loop end
//
// console.log(binarySearch(primes2, -1));
// // guessIndex = 1 ; min = 0; max = 2;
// // guessIndex = 0 + 2 / 2 = 1; min = 0; max = 1
// // guessIndex = 0 + 1 / 2 = 0; min = 0; max = 0
// // guessIndex = 0 + 0 / 2 = 0; min = 0; max = -1
// // min > max; loop end
