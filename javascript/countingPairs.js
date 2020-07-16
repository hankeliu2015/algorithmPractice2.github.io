//retest
// function countingPairs(num, k) {
//   let matchedPairs = [];
//   let uniquePair = false;
//
//   for(let i = 0; i < num.length; i++){
//     for (let j = i + 1; j < num.length; j++ ){
//       if (((num[i] + k === num[j]) || (num[j] + k === num[i])) && (matchedPairs.length == 0)){
//           matchedPairs.push([num[i], num[j]]);
//         } else if (((num[i] + k === num[j]) || (num[j] + k === num[i])) && (matchedPairs.length !== 0)) {
//
//           uniquePair = matchedPairs.map(el => {
//             if ((el[0] === num[i]) && (el[1] === num[j])){
//               return false;
//             } else if ((el[1] === num[i]) && (el[0] === num[j])){
//               return false;
//             } else {
//               return true;
//             }
//           }).reduce((a,b) => a && b)
//
//           if (uniquePair) {
//             matchedPairs.push([num[i], num[j]]);
//           }
//         }
//     }
//   }
//
//   console.log(matchedPairs.length)
// }

// original test
// function countingPairs(numbers, k) {
//
//   let counter = 0;
//   let pairArr = [];
//
//   for (let i = 0; i < numbers.length; i ++) {
//     for (let j = i+1; j < numbers.length; j ++) {
//
//       if (numbers[i] + k === numbers[j]) {
//
//         if (pairArr.length === 0) {    //first matched pair
//           pairArr.push([numbers[i], numbers[j]]);
//         } else {
//           // check if the new pair is unique in the pairArr.
//           let uniquePair = pairArr.map(el => {
//             if (el[0] === numbers[i] && el[1] === numbers[j]) {
//               return false;
//             } else if (el[1] === numbers[i] && el[0] === numbers[j]) {
//               return false;
//             } else {
//               return true;
//             }
//           }).reduce((a,b) => a && b)
//
//           if (uniquePair) {
//             pairArr.push([numbers[i], numbers[j]]);
//           }
//         }
//       }
//     }
//   }
//   console.log(pairArr.length);
// }

// countingPairs([ 1, 2], 1)
// countingPairs([ 1, 1, 2, 2], 1)
// countingPairs([ 1, 1, 2, 2, 3, 3, 4, 4], 1)
// countingPairs([ 1, 1, 2, 2, 3, 3, 4, 4, 5, 6], 1)
// countingPairs([ 6,5,4,4,3,3,2,2,1,1], 1)
// 3
