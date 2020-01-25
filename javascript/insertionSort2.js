//use the following element compare with previous elements and sort.
// use iteration the do above from index 1 to the end.
// apply previous method for each iteration.

// function insertionSort2(n, arr) {
//
//   for (let i = 1; i < n; i ++) {
//     let lastEl = arr[i];
//     for (let j = i - 1; j >= 0; j -- ) {
//       if (lastEl < arr[j]) {
//         arr[i] = arr[j];
//         console.log(arr);
//       } else if ( lastEl >= arr[j]) {
//         arr[i] = lastEl;
//         break;
//       }
//     }
//     if( lastEl < arr[0]) {
//       arr[0] = lastEl;
//     }
//     console.log(arr)
//   }
//
// }

function insertionSort1(n, arr) {
  let lastEl = arr[n -1];
  for (let i = n-2; i >= 0; i--) {
    if (lastEl < arr[i] ) {
      arr[i+1] = arr[i];
      // console.log(arr);
    } else if ( lastEl >= arr[i]) {
      arr[i+1] = lastEl;
      break;
    }
  }
  if( lastEl < arr[0]) {
      arr[0] = lastEl;
    }
  // console.log(arr)
  return arr;
}

function insertionSort2(n, arr) {
  let currentArr = [arr[0]];

  for ( let j = 1; j < n; j ++) {

    let currentN = j + 1;
    currentArr.push(arr[j])

    //currentArr start from arr[0], must stay consistance after each loop cycle.
    // the last element arr[j] must added to the currentArr.

    currentArr = insertionSort1(currentN, currentArr)
    let combinedArr = currentArr.concat(arr.slice(j + 1))
    // console.log(combinedArr.map(function(x) { return parseInt(x, 10); }))
    console.log(combinedArr.join(' '))
    // return combinedArr.map(function(x) { return parseInt(x, 10); });
  }
  // return currentArr;
}

// console.log(insertionSort2(7, [3,4,7,5,6,2,1]))
// console.log(insertionSort2(6, [1,4,3,5,6,2]))
// console.log(insertionSort2(3, [4,3,1]))   // the 3rd element can not compare with previous 2.
