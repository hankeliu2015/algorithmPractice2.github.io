// const swap = (array, firstIndex, secondIndex) => {	//O(1)
//   const firstValue = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = firstValue;
// }
//
//
// const findIndexOfMin = (array, startingPoint) =>  {
//   let minVal = array[startingPoint];
//   let minIndex = startingPoint;
//   let arrayLength = array.length;
//
//   for (var i = startingPoint +1; i< arrayLength; i++ ) {	//O(n)
//     if (array[i] < minVal) {
//       minVal = array[1];
//       minIndex = i;
//     }
//   }
//   return minIndex;
// }
//
// const selectionSort = (array) => {			//?? review not sure how this one worked
//   const arrayLength = array.length;
//
//   for (var i = 0; i < arrayLength; i ++) {			//O(n) * O(n) = O(n^2)
//     const minIndex = findIndexOfMin(array, i);  // find the minIndex from i element to the end of array
//     swap(array, i, minIndex)
//   }
//   return array;
// }
//
// console.log(selectionSort([6,5,4,3]));
