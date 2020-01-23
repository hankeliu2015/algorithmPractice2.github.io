function diagonalDifference(arr) {

  let sum1 = 0;
  let sum2 = 0;
  let n = arr.length;

  for(let i = 0; i < n; i++){
      sum1 = sum1 + arr[i][i];
      sum2 = sum2 + arr[i][n-1-i];
      console.log(sum1, sum2)
  }
  return Math.abs(sum1 - sum2);

}   //end of function

// console.log(diagonalDifference([[11,2,4], [4,5,6], [10, 8, -12]]))
