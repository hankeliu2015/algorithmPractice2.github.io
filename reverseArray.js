

// reversed the array and returned the new array.

function reverseArray(array) {
  let reversedArray = [];

   reverser = (array) => {
    if (array.length === 0 ) {
      return ;
    }
    reversedArray.push(array[array.length - 1]);
    reverser(array.slice(0, array.length -1));
  }

  reverser(array);
  return reversedArray;
}

// console.log(reverseArray([1,2,3,4,5,6]))
