function quickSort(arr) {

  let left = [];
  let right = [];
  let equal = [];
  let pivot = arr[0];

  arr.forEach( x => {
      if (x < pivot) {
          left.push(x);
      } else if ( x > pivot ) {
          right.push(x);
      } else {
          equal.push(x);
      }

  })

  let array = [...left, ... equal, ... right];
  console.log(`Original array: ${arr}`)
  return `Sorted array: ${array}`
}

// console.log(quickSort([4,3,2,1]))
// console.log(quickSort([4, 3, 5, 7, 8]))
