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
debugger
  console.log(typeof((sumPos/n).toFixed(6)), sumPos/n)
  console.log(Number((sumPos/n).toFixed(6)));
  console.log(parseFloat((sumNeg/n).toFixed(6)));
  console.log(parseFloat((sumZ/n).toFixed(6)));
  return [(sumPos/n).toFixed(6), (sumNeg/n).toFixed(6), (sumZ/n).toFixed(6)]


}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
