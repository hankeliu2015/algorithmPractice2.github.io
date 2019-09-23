// // let array =  [2, 1, 7, 6, 8, 3, 4, 5]
//   let firstHalf =  [1, 2, 6, 7, 8]
//   let secondHalf =  [3, 4, 5, 9, 10]
//
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
// // debugger
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
//     let midpoint = array.length/2
//     let firstHalf = array.slice(0, midpoint)
//     let secondHalf = array.slice(midpoint, array.length)
//     if(array.length < 2){
//       debugger
//       return array                                       //base case 
//     } else {
//       merge(mergeSort(firstHalf), mergeSort(secondHalf)) ////recursive here

//     }
//   }
//
// let array =  [2, 1, 7, 6, 8, 3, 4, 5]
// mergeSort(array)
