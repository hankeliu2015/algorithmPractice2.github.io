
// ////solution | Kadane’s Algorithm
//
// function largestSubarraySum(array){
//   let currentSum = 0;
//   let maxSum = 0
//
//   for( i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//
//     currentSum = Math.max((currentSum + currentNum), 0)
//     // console.log(currentSum);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//
//   return maxSum;
// }
//
// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// // let array = [-2, -1, -3, 4, -1, 2, 1, -5, 4]
//
// console.log(largestSubarraySum(array))
// // 16
