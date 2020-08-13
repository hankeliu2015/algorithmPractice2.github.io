// let s = 6;
// let array1 = [5, -2, 4, 9, 1]
// console.log(twoSum(array1, s))

// [5 ,1]
//
// function twoSum(arr, sum) {
//   let sum2 = [];
//   let hashTable = {};
//
//   for (i = 0; i < arr.length; i++) {
//     let numMinusBySum = sum - arr[i];
//     if (hashTable[numMinusBySum.toString()] !== undefined) {
//       sum2.push(arr[i], numMinusBySum)
//     } else {
//       hashTable[arr[i].toString()] = arr[i];
//     }
//   }
//   return sum2;
// }

// soluton 1 | slow
// function twoSum(sum, array){
//   let twoEl = [];
//   for(i = 0; i < a.length; i++) {
//     for (j = i + 1; j < a.length; j++) {
//       if (a[i] + a[j] === sum) {
//         twoEl.push(a[i], a[j]);
//       }
//     }
//   }
//   return twoEl;
// }

// solution 2
// function twoSum(arr, S) {
//   var sums = [];
//   var hashTable = {};
//   for (var i = 0; i < arr.length; i++) {
//     var sumMinusElement = S - arr[i];
//     if (hashTable[sumMinusElement.toString()] !== undefined) {
//       sums.push([arr[i], sumMinusElement]);
//     }
//     hashTable[arr[i].toString()] = arr[i];
//   }
//   return sums;
// }
