// var i = 1,
// 	f = 'Fizz',
// 	b = 'Buzz',
// 	out = '';
// for (; i <= 100; i++) {
// 	out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;

//// if divive by 3, it move to divid by 5. if divid by 5 also true, return f and b.
//// if not divided by 5, it is fizz.
//// if not divided by 3, it will jump to the second : , continue the conditions.

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

function miniMove(arr) {
  let counter = 0

  // find the least element not in order and move it to the end
  // find all the elements greater than ant later element. move the least of them to the end first.
  // counter increment
  arr.forEach((el, index) => {
  // if el greater than any of the rest elements, counter increment
    for (i = index+1; i < arr.length; i ++) {
      if (el > arr[i]) {
        counter ++;
        break;
      }
    }
  })

  return counter;
}

console.log(miniMove([5,6,1,3,2]))
