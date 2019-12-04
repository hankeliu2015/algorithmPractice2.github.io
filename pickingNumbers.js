// the maxium subarray, difference of any 2 elements less than 1. maxium length is 5.
// push the element meet critiria into a new string.
// if the  2nd meet, push 2nd in,
// if the 2nd and the 3rd meet, push the 3rd in.


// if the condition is not meet, start a new loop or recursion.

// what is the recursion base case.

function pickingNumbers(a) {

  let newArray = [];
  for (let i = 0; i < a.length; i++) {
      newArray[i] = [a[i]];
    for (let j = 0; j < a.length; j++) {
      if ( (Math.abs(a[i] - a[j]) <= 1) && (i !== j) ) {
        if (!newArray[i]) {
          newArray[i].push(a[j]);
        } else {  //need compare to the rest of the New array element
          let trueFalseArray = newArray[i].map(el => {
            if (Math.abs(el-a[j]) > 1) {
              return false;
            } else {
              return true;
            }
          })

          let reducedArray = trueFalseArray.reduce((acc, cur) => acc && cur )
          if (reducedArray) {
            newArray[i].push(a[j])
          }
        }
        // console.log(newArray)
      }
    }
  }

  let maxLength = 0;
  newArray.forEach(el => {
    if (el.length > maxLength) {
      maxLength = el.length;
    }
  })

  return maxLength;

}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
console.log(pickingNumbers([1, 2, 2, 4, 4, 5, 5, 5]))
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
