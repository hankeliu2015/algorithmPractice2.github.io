// take in an array and iterate through.
// use 3 sum variable to store the couter for each senario.
// return the sum with 6 decimal places.

function plusMinus(arr) {
  let sumZ = 0;
  let sumPos = 0;
  let sumNeg = 0;
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 ) {
      sumNeg ++ ;
    } else if(arr[i] == 0 ) {
      sumZ ++ ;
    } else {
      sumPos ++ ;
    }
  }

  // console.log(Number((sumPos/n).toFixed(6)));
  // console.log(parseFloat((sumNeg/n).toFixed(6)));
  // console.log((sumZ/n).toFixed(6));

}

// plusMinus([-4, 3, -9, 0, 4, 1])
