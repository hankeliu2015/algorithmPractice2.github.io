// // user a loop and forEach to pair up all elements.
// // if there is a match, counter add one.
//
//
// function divisibleSumPairs(n, k, ar) {
//   let counter = 0;
//   for (let i = 0; i < ar.length; i ++) {
//     ar.slice(i+1).forEach(el => {
//       if ((ar[i]+el)%k === 0) {
//         counter++;
//       }
//     })
//   }
//   console.log(counter);
//   return counter;
// }
//
// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))
