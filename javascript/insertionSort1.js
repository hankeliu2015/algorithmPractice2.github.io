// if the element less than the previous one, copy the previous on to the last one.
// console log the array.
// if the last one less than current one. store the last value as current element.

//
//
// function insertionSort1(n, arr) {
//   let lastEl = arr[n -1];
//   for (let i = n-2; i >= 0; i--) {
//     if (lastEl < arr[i] ) {
//       arr[i+1] = arr[i];
//       console.log(arr.join(' '));
//     } else if ( lastEl >= arr[i]) {
//       arr[i+1] = lastEl;
//       break;
//     }
//
//   }
//   if( lastEl < arr[0]) {
//       arr[0] = lastEl;
//     }
//   console.log(arr.join(' '))
//   // return arr;
// }
//
// // console.log(insertionSort1(5, [2,4,6,8,6]))
// // console.log(insertionSort1(5, [2,4,6,8,1]))
// // console.log(insertionSort1(5, [2,4,6,8,5]))
// // console.log(insertionSort1(5, [2,4,6,8,3]))
// console.log(insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))
