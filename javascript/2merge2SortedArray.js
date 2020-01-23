// // create a function to return the min for both sorted array. since it is sorted, only need to compare the first element.
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
// //
// // another function loop push each min element in a new array, anything left just concatnate.
// function merge(firstHalf, secondHalf){
//   let sorted = [];
//   let currentMin;
//   while(firstHalf.length != 0 && secondHalf.length != 0){
//     let currentMin = findMinAndRemove(firstHalf, secondHalf)
//     sorted.push(currentMin)
//     // debugger
//   }
//   return sorted.concat(firstHalf).concat(secondHalf)
// }
//
// let firstHalf =  [1]
// let secondHalf =  [2]
//
// console.log(merge(firstHalf, secondHalf))
