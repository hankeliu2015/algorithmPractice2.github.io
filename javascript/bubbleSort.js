// function bubbleSort(array) {
//   let n = array.length
//   while (n > 0) {
//     let lastModifiedIndex = 0 // reset the value back to 0 when each loop started. If the following conditin meet, the value will be greater than 0.
//     for (let currentIndex = 1; currentIndex < n; currentIndex++) {
//       // if the item at the previous index is greater than the item at the `currentIndex`, swap them
//       if (array[currentIndex - 1] > array[currentIndex]) {
//         // swap
//         let temp = array[currentIndex - 1]
//         array[currentIndex - 1] = array[currentIndex]
//         array[currentIndex] = temp
//         // save the index that was modified
//         lastModifiedIndex = currentIndex
//       }
//     }
//     // save the last modified index so we know not to iterate past it since all proceeding values are sorted
//     n = lastModifiedIndex
//   }
// }
//
// // retest
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp = 0;
//     let lastModifiedIndex = 0
//
//     for(let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         lastModifiedIndex = j;
//       }
//     } // inner loop
//
//     if (!lastModifiedIndex) {
//       break;
//     }
//   } // outer loop
//   return arr;
// }
//
// let arrayBubbleSort = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
// // let arrayBubbleSort = [12, 11, 15, 10]
// console.log(bubbleSort(arrayBubbleSort))
// // // alert(arrayBubbleSort)
