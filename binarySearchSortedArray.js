//
// Binary Search for sorted array : Algorithm Lectures in JavaScript
// indexOf is the js function.


function binarySearch(sortedArray, targetValue) {
  let min = 0;
  let max = sortedArray.length
  let guessIndex;      //wills guess in the half way of the array

  while (min <= max) {
    guessIndex = (min + max ) /2 | 0 //bitwise
    // guessIndex = Math.floor((min + max) /2);
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
  console.log('Target number is not found')
  return -1
}

// let primes = [1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(primes, 11));
// console.log(binarySearch(primes, 1));
