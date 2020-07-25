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
//   let sorted = [];
//   let currentMin;

//   while(firstHalf.length != 0 && secondHalf.length != 0){
//     let currentMin = findMinAndRemove(firstHalf, secondHalf)
//     sorted.push(currentMin)
//           //when first or second become 0, the function will return following.
//   }
//   return sorted.concat(firstHalf).concat(secondHalf)
// }
//
// function mergeSort(array){
//     let midpoint = array.length/2
//     let firstHalf = array.slice(0, midpoint)
//     let secondHalf = array.slice(midpoint, array.length)
//     let sortedArray;
//
//     if(array.length < 2){
//       return array							//base case
//     } else {
//       sortedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))		//recursive here
//     }
//     return sortedArray;
//   }
//
//   console.log("merge sort results: ")
//   console.log(mergeSort([5,2,3,4, -1, -2]))
