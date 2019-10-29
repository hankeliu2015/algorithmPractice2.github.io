// let cards = [2,5, 1000, 900, 45, 2, 3]

// constand time O(1)

/*
  swapping values
  1. create function call swap()
  2. pass in 3 arguments
    - array
    - frist swap
    0 second swap
  3. set the value of the first swap location item
  4. update the first swap location wiht the value from the 2nd swap.
  5. update the 2nd swap location

*/

// const swap = (array, firstIndex, secondIndex) => {
//   const firstValue = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = firstValue;
// }

 // console.log("origial value", cards)
 // swap(cards, 1,2)
 // console.log("new swapped value:", cards)

/*
  findIndexOfMin

Steps:
1. find smallest number and swap it with the first element of the sortedArray
2. find the 2nd smallest element and repalce it with index 1

*/

// const findIndexOfMin = (array, startingPoint) =>  {
//   let minVal = array[startingPoint];
//   let minIndex = startingPoint;
//   let arrayLength = array.length;
//
//   for (var i = startingPoint +1; i< arrayLength; i++ ) {
//     if (array[i] < minVal) {
//       minVal = array[1];
//       minIndex = i;
//     }
//   }
//   return minIndex;
// }

/*
  selection sort
  use the findIndexOfMin and swap function to sort the array.
*/

// const selectionSort = (array) => {
// // find miniml value and swap by uts inddex.
//   const arrayLength = array.length;
//
//   for (var i = 0; i < arrayLength; i ++) {
//     const minIndex = findIndexOfMin(array, i);
//     swap(array, i, minIndex)
//   }
//   return array;
// }
//
// console.log(selectionSort(cards));
