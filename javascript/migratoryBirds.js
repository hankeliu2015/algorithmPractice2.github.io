 // if two or more types of birds are equally common, choose the type with the smallest ID number.

// convert bird id to object key and occurance to object values.
// the top occurance will be the return value.
// if there is a tie, the least id number will be returned. Use greater or equal in reduce callback.

// function migratoryBirds(arr) {
//   let objOccurence = {};
//
//   arr.forEach(el => {
//     if (!objOccurence[el]) {
//       objOccurence[el] = 1;
//     }else {
//       objOccurence[el]++;
//     }
//   })
//   // not quite how following reduce worked
//   let maxBird = Object.keys(objOccurence).reduce((a,b) => objOccurence[a] >= objOccurence[b] ? a : b)
//   // console.log(objOccurence);
//   return maxBird;
// }
//
// console.log(migratoryBirds([1,1,2,2,3]));
// console.log(migratoryBirds([1,4,4,4,5,3]));
// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
