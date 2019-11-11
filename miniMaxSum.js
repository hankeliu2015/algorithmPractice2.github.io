//Math min and max mathod need spread operator for array variable.
// need to slice the array twice and concatenate.
// the maxArray is the one without min number. vice versa.
// reduce method need a zero intial value, pass in accumulator and current value.


function miniMaxSum(arr) {
  let minNum = Math.min(...arr);
  let minIndex = arr.indexOf(minNum);
  let maxArray = arr.slice(0, minIndex).concat(arr.slice(minIndex+1));

  let maxNum = Math.max(...arr);
  let maxIndex = arr.indexOf(maxNum);
  let minArray = arr.slice(0, maxIndex).concat(arr.slice(maxIndex+1));

  let minSum = minArray.reduce((acc, cur) => acc + cur, 0)
  let maxSum = maxArray.reduce((acc, cur) => acc + cur, 0)

  return [minSum, maxSum]
}

console.log(miniMaxSum([1,2,3,4,5]))
