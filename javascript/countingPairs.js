function countingPairs(numbers, k) {

  let counter = 0;
  let pairArr = [];

  for (let i = 0; i < numbers.length; i ++) {
    for (let j = i+1; j < numbers.length; j ++) {

      if (numbers[i] + k === numbers[j]) {

        if (pairArr.length > 0) {
          // check if the new pair is unique in the pairArr
          let uniquePair = pairArr.map(el => {
            if (el[0] === numbers[i] && el[1] === numbers[j]) {
              return false;
            } else if (el[1] === numbers[i] && el[0] === numbers[j]) {
              return false;
            } else {
              return true;
            }
          }).reduce((a,b) => a && b)

          if (uniquePair) {
            pairArr.push([numbers[i], numbers[j]]);
          }
        } else {
          pairArr.push([numbers[i], numbers[j]]);
        }

      }
    }
  }
  console.log(pairArr.length);
}

countingPairs([ 1, 1, 2, 2, 3, 3, 4, 4], 1)
// 3
