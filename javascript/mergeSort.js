// // let array =  [2, 1, 7, 6, 8, 3, 4, 5]
// let firstHalf =  [1, 2, 6, 7, 12]
// let secondHalf =  [3, 4, 5, 9, 11]
//
//
function findMinAndRemove(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]

  if(minfirstHalf < minsecondHalf){
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf, secondHalf){
  let sorted = []
  let currentMin;
// debugger
  while(firstHalf.length != 0 && secondHalf.length != 0){
    let currentMin = findMinAndRemove(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

// console.log(merge(firstHalf, secondHalf))

function mergeSort(array){
    let midpoint = array.length/2;
    let firstHalf = array.slice(0, midpoint);
    let sortedArr;
    let secondHalf = array.slice(midpoint, array.length)
    if(array.length < 2){
      console.log(firstHalf, secondHalf);
      // debugger
      return array                                       //base case
    } else {
      sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf)) ////recursive here
    }
    return sortedArr;   // must have a return here. 
  }

//// curriculum solution

// function findMinAndRemoveSorted(array){
//   return array.shift()
// }
//
// function merge(firstSubarray, secondSubArray){
//   let sorted = []
//   while(firstSubarray.length != 0 && secondSubArray.length != 0){
//     if(firstSubarray[0] < secondSubArray[0]){
//       sorted.push(findMinAndRemoveSorted(firstSubarray))
//     } else {
//       sorted.push(findMinAndRemoveSorted(secondSubArray))
//     }
//   }
//   return sorted.concat(firstSubarray).concat(secondSubArray)
// }
//
// function mergeSort(array){
//   let midpoint = array.length/2
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//   let sorted;
//
//   if(array.length < 2){
//     return array
//   } else {
//     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
//   }
//   return sorted
// }

// let array =  [2, 1, 7, 6, 8, 3, 4, 5]
let array =  [2, 1, 7, 6]
console.log(mergeSort(array))
