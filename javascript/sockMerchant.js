// // first element equal to another element, splice them and add counter.
// // need to break for for loop when conditin matches.
//
//
// function sockMerchant(n, ar) {
//   let counter = 0
//   let arrayLength = ar.length;
//   ar.forEach((el, index) => {
//     for (let i = index +1 ; i < arrayLength; i++) {
//       if (el === ar[i]) {
//         counter++;
//         ar.splice(i,1);
//         arrayLength--;
//         break;
//       }
//     }
//   })
//
//   return counter;
// }
//
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
