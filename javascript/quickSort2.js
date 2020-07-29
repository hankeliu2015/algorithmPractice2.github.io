// function quickSort(array, startIndex, endIndex) {
//   // verify that the start and end index have not overlapped
//   if (startIndex < endIndex) {
//     // calculate the pivotIndex
//     let pivotIndex = partition(array, startIndex, endIndex)
//     // sort the left sub-array
//     quickSort(array, startIndex, pivotIndex)
//     // sort the right sub-array
//     quickSort(array, pivotIndex + 1, endIndex)
//   }
// }
//
// function partition(array, startIndex, endIndex) {
//   let pivotIndex = Math.floor((startIndex + endIndex) / 2)
//   let pivotValue = array[pivotIndex]
//
//   while (true) {
//     // start at the FIRST index of the sub-array and increment
//     // FORWARD until we find a value that is > pivotValue
//     while (array[startIndex] < pivotValue) {
//       startIndex++
//     }
//
//     // start at the LAST index of the sub-array and increment
//     // BACKWARD until we find a value that is < pivotValue
//     while (array[endIndex] > pivotValue) {
//       endIndex--
//     }
//
//     if (startIndex >= endIndex) return endIndex
//
//     // swap values at the startIndex and endIndex
//     let temp = array[startIndex]
//     array[startIndex] = array[endIndex]
//     array[endIndex] = temp
//   }
// }
//
// // let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
// // quickSort(array, 0, array.length - 1)
// // console.log(array)
