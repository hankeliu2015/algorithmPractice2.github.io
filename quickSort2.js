// // // The sort method - takes in an array and returns an array
// // //
// // // If the array length < 2, do nothing it's already sorted.
// // // If the array length = 2; check if first element is greater than the second element and swap.
// // // If the array length > 2, i.
// // // partition the array into two ii. call sort method passing the left array iii. call sort method passing the right array iv. merger the left array with the partition and the right array in this other. iv. print the resulting sub array before every return v. return the sub array.
// //
// //
function quickSort(arr) {

  let left = [];
  let right = [];
  let equal = [];
  let pivot = arr[0];

  if (arr.length < 2 ) {
    return arr
  } else if (arr.length === 2 ) {
    if (arr[0] < arr[1]) {
      return arr
    } else if (arr[0] > arr[1]) {
      return arr.reverse()
    }
  } else {
    arr.forEach( x => {
      if (x < pivot) {
        left.push(x);
      } else if ( x > pivot ) {
        right.push(x);
      } else {
        equal.push(x);
      }
    })

    return array = [...quickSort(left), ...equal, ...quickSort(right)];
  }

}

// console.log(quickSort([4,3,2,1,5,6,7,10, 100, 500,-1001]))

// // 3rd option for quick sort:
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
