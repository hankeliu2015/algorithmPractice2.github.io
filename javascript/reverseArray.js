// // retest
// let newArr = [];
// function reverseArray(arr) {
//   //base case is the last element
//   if (arr.length < 1) {
//     return true;
//   } else {
//   // need to pass in the sub array into recursive function
//   // debugger
//     newArr.push(arr.splice(arr.length -1)[0]);
//     reverseArray(arr);
//   }
//   return newArr;
// }
//
// // reversed the array and returned the new array.
//
// function reverseArray(array) {
//   let reversedArr = [];
//
//   reverser = (array) => {
//     if (array.length === 0 ) {
//       return ;
//     }
//     reversedArr.push(array[array.length - 1]);
//     reverser(array.slice(0, array.length -1));
//   }
//
//   reverser(array);
//   console.log(reversedArr);
//   return reversedArr.join(' ');
//
//   console.log(array.reverse().join(' '));
//   return array.reverse(); //
// }
//
//
// // console.log(reverseArray([1,2,3,4,5,6]))
// console.log(reverseArray([1,2,3,4]))
