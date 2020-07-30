// // let array =  [2, 1, 7, 6, 8, 3, 4, 5]
// let firstHalf =  [1, 2, 6, 7, 12]
// let secondHalf =  [3, 4, 5, 9, 11]
//
// function findMinAndRemove(firstHalf, secondHalf){
//   let minfirstHalf = firstHalf[0]
//   let minsecondHalf = secondHalf[0]
//
//   if(minfirstHalf < minsecondHalf){
//     return firstHalf.shift()
//   } else {
//     return secondHalf.shift()
//   }
// }
//
// function merge(firstHalf, secondHalf){
//   let sorted = []
//   let currentMin;
//
//   while(firstHalf.length != 0 && secondHalf.length != 0){
//     let currentMin = findMinAndRemove(firstHalf, secondHalf)
//     sorted.push(currentMin)
//   }
//   return sorted.concat(firstHalf).concat(secondHalf)
// }
//
// // console.log(merge(firstHalf, secondHalf))
//
// function mergeSort(array){
//     let midpoint = array.length/2;
//     let firstHalf = array.slice(0, midpoint);
//     let sortedArr;
//     let secondHalf = array.slice(midpoint, array.length)
//     if(array.length < 2){
//       console.log(`firstHalf: ${firstHalf}, secondHalf: ${secondHalf}`);
//       // debugger
//       return array    //base case relturn value when length === 2;
//     } else {
//       sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf)) ////recursive here
//     }
//     console.log(`sorted array: ${sortedArr}`);
//     return sortedArr;   // must have a return here.
//   }

// let array =  [2, 1, 7, 6, 8, 3, 4, 5]
// let array =  [2, 1, 7, 6]
// console.log(mergeSort(array))
//
// //// BigO cheatsheet solution test ( skip for now ) // skip for now .
//
// let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
// mergeSort(array, 0, array.length - 1)
// alert(array)
//
// // main function that sorts array[start..end] using merge()
// function mergeSort(array, start, end) {
//   // base case
//   if (start < end) {
//     // find the middle point
//     let middle = Math.floor((start + end) / 2)
//
//     mergeSort(array, start, middle) // sort first half
//     mergeSort(array, middle + 1, end)  // sort second half
//
//     // merge the sorted halves
//     merge(array, start, middle, end)
//   }
// }
//
// // merges two subarrays of array[]
// function merge(array, start, middle, end) {
//   // create temp arrays
//   let leftArrayLength = middle - start + 1  // ??
//   let rightArrayLength = end - middle       //[1,2,3,4]; middle = 2; end = 4; start = 0
//
//   let leftArray = []
//   let rightArray = []
//
//   // fill in left array
//   for (let i = 0; i < leftArrayLength; ++i)
//     leftArray[i] = array[start + i]
//
//   // fill in right array
//   for (let i = 0; i < rightArrayLength; ++i)
//     rightArray[i] = array[middle + 1 + i]
//
//   // merge the temp arrays
//
//   // initial indexes of first and second subarrays
//   let leftIndex = 0, rightIndex = 0
//
//   // the index we will start at when adding the subarrays back into the main array
//   let currentIndex = start;
//
//   // compare each index of the subarrays adding the lowest value to the currentIndex
//   while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
//     if (leftArray[leftIndex] <= rightArray[rightIndex])
//       array[currentIndex] = leftArray[leftIndex++]
//     else
//       array[currentIndex] = rightArray[rightIndex++]
//     currentIndex++
//   }
//
//   // copy remaining elements of leftArray[] if any
//   while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]
//
//   // copy remaining elements of rightArray[] if any
//   while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
// }
