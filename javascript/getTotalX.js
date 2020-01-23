// // sort both arrays.
// // find those number can be divided by those between the Max of a and min of b, include Mac and min.
// //use map and reduce to get all the true return element to single true
// // push the number to new array.
// // filter out the new array element is not a factor of any elements in b
//
// function getTotalX(a, b) {
//   let sortedB = b.sort((a,b) => a - b);
//   let sortedA = a.sort((a,b) => a - b);
//   let sortedBFactors = [];
//   let finalFactors;
//
//
//   for (let j = sortedA[a.length-1]; j <= sortedB[0]; j++) {
//
//   let match = sortedA.map(el => {
//       return j%el === 0
//     }).reduce(function(a,b) {
//       return a && b;
//     })
//
//     if (match) {
//       sortedBFactors.push(j);
//     }
//   }
//
//   sortedB.forEach(el => {
//     sortedBFactors = sortedBFactors.filter(factor => el%factor === 0)
//   })
//
//   console.log(sortedBFactors)
//   return sortedBFactors.length;
//
// }
//
// console.log(getTotalX([2,4], [16,32,96]))
// console.log(getTotalX([3,4], [24, 48]))
// // getTotalX([2,6], [24,36])
