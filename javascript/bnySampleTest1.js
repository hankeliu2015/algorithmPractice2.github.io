// var i = 1,
// 	f = 'Fizz',
// 	b = 'Buzz',
// 	out = '';
// for (; i <= 100; i++) {
// 	out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;

//// if divive by 3, it move to divid by 5. if divid by 5 also true, return f and b.
//// if not divided by 5, it is fizz.
//// if not divided by 3, it will jump to the second : , continue the conditions.

// 5. counting closed path:
// function closedPaths(num) {
//   let numArr = Array.from(String(num), Number);
//   let counter = 0;
//   numArr.forEach(el => {
//     console.log(el);
//     if (el === 0 || el === 4 || el === 6 || el === 9) {
//       counter ++;
//     }else if (el === 8) {
//       counter += 2
//     }
//   })
//   return counter;
// }
//
// console.log(closedPaths(1234567890))


// 6. distance matrix
// function distanceMatrix(arr) {
//   // nest loop between each element and the rest of the element.
//   // set condition if elements equal, calculate distance and add to counter
//   let matrixArr = []
//
//   for(i=0; i<arr.length; i++) {
//
//     matrixArr[i] = 0;
//
//     for(j=0; j<arr.length; j++) {
//
//       let currentMatrix = 0;
//       // if both elements are equal and not the same one
//       if (arr[i] === arr[j] && i !==j) {
//         currentMatrix = Math.abs(i - j);
//         matrixArr[i] += currentMatrix;
//       }
//     }
//   }
//   return matrixArr;
// }
//
// console.log(distanceMatrix([1,2,1,1,2,3]))

// 8. sort an array - return the least element move.
//
// function miniMove(arr) {
//   let counter = 0
//
//   arr.forEach((el, index) => {
//     for (i = index+1; i < arr.length; i ++) {
//       if (el > arr[i]) {
//         counter ++;
//         break;  // need to break the loop avoid duplicate counts.
//       }
//     }
//   })
//   return counter;
// }
// console.log(miniMove([5,6,1,3,2]))