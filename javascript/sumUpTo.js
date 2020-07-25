// let sum = 0
//
// function sumUpTo(n){
// console.log(n)						//must have console.log to show the value.
//   if(n > 1){
//     return sumUpTo(n - 1) + n;
//   } else {
//     return 1;						//base case
//   }
//   return sum;
// }
//
// console.log(sumUpTo(5));


// retest


function sumUpTo(n) {
  //base case

  if (n === 1) {
    console.log(n);
    return n;
  } else {
    // debugger
    console.log(n);
    n = n + sumUpTo(n-1);
  }

  return n;
}

console.log(sumUpTo(5))
