


console.log(quickSort([5,8,1,3,7,9,2]))

function quickSort(array) {     // [3,2]

  let left = [];
  let right = [];
  let equal = [];
  let pivot = array[0];
  let sortedArray;

  if (array.length < 2 ) {
    return array
  } else if (array.length === 2 ) {

    if (array[0] < array[1]) {
      console.log(array)
      return array
    } else if (array[0] > array[1]) {
      let reversedArr = array.reverse();
      console.log(reversedArr);
      return reversedArr;
    }

  } else {
    array.forEach( x => {
      if (x < pivot) {
        left.push(x);
      } else if ( x > pivot ) {
        right.push(x);
      } else {
        equal.push(x);
      }
    })

    sortedArray = [...quickSort(left), ...equal, ...quickSort(right)];

    console.log(sortedArray);

    return sortedArray;
  }

}



console.log(quickSort([4,3,2,1,5,6,7,10, 100, 500,-1001]))

// // 2nd option for quick sort:
//
// // Create an array to sort
// var array = [9, 1];
//
// // Basic implementation (pivot is the first element of the array)
// function quicksort(array) {
//     if (array.length == 0) return [];
//
//     var left = [], right = [], pivot = array[0];
//
//     for (var i = 1; i < array.length; i++) {
//         if(array[i] < pivot)
//             left.push(array[i])
//         else
//             right.push(array[i]);
//     }
//
//     return quicksort(left).concat(pivot, quicksort(right));
// }
//
// // console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// console.log(quicksort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
