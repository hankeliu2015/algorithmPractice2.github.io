// the maxium subarray, difference of any 2 elements less than 1. return maxium length.
// use 2 loop compare each element with the rest, except itself.

// use the current element as the value of the first element of the array inside matchedElArray.
// each compared element need to compare with the rest of match array. If there is a false, do not push the element.

// return the max length of the array inside matchedElArray.


function pickingNumbers(a) {

  let matchedElArray = [];
  for (let i = 0; i < a.length; i++) {
      matchedElArray[i] = [a[i]];
    for (let j = 0; j < a.length; j++) {
      if ( (Math.abs(a[i] - a[j]) <= 1) && (i !== j) ) {
        if (!matchedElArray[i]) {
          matchedElArray[i].push(a[j]);
        } else {
          let trueFalseArray = matchedElArray[i].map(el => {
            if (Math.abs(el-a[j]) > 1) {
              return false;
            } else {
              return true;
            }
          })

          let reducedArray = trueFalseArray.reduce((acc, cur) => acc && cur )
          if (reducedArray) {
            matchedElArray[i].push(a[j])
          }
        }
        // console.log(matchedElArray)
      }
    }
  }

  let maxLength = 0;
  matchedElArray.forEach(el => {
    if (el.length > maxLength) {
      maxLength = el.length;
    }
  })

  return maxLength;

}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
console.log(pickingNumbers([1, 2, 2, 4, 4, 5, 5, 5]))
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
