// // get the max length of the longest el length.
// function getMax(arr) {
//
//   let max = 0;
//   for (let num of arr) {
//       if (max < num.toString().length) {
//           max = num.toString().length
//       }
//   }
//   return max
// }
//
// // get the single digit number from the 10s, 100s etc. 933 +> 9
// function getPosition(num, place){
//  return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
// }
//
// function radixSort(arr) {
//
//     const max = getMax(arr); // length of the max digit in the array
//
//     for (let i = 0; i < max; i++) {
//         let buckets = Array.from({ length: 10 }, () => [ ])
//
//         for (let j = 0; j < arr.length; j++) {
//           buckets[getPosition(arr[ j ], i)].push(arr[ j ]); // pushing into buckets
//         }
//         arr = [ ].concat(...buckets);
//     }
//     return arr
// }
//
// console.log(radixSort([4, 57, 7, 3, 933])) // [3,4,7,57,933]
