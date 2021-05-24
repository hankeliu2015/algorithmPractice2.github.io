function hourglassSum(arr) {
  // outter loop though the row 
  // inner loop through column
  let maxSum = arr[0][0]; // -64 passed all the test
    for(let i = 0; i < arr.length - 2; i++) {
      for(let j = 0; j < arr.length - 2; j++) {
        let glassTop = arr[i][j] + arr[i][j+1] + arr[i][j+2]; 
        let glassMid = arr[i+1][j+1]; 
        let glassBott= arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        let glassSum = glassTop + glassMid + glassBott;
        if(maxSum < glassSum) {
          maxSum = glassSum; 
        } 
        console.log(maxSum);
      }
    }
    return maxSum;
}

// hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])

// hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])