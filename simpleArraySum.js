
function simpleArraySum(ar) {
  let sum = 0;
  if (ar.length > 1 ) {
      return sum = ar[ar.length-1] + simpleArraySum(ar.splice(0, ar.length-1));
  } else {
      return ar[0];
  }
}

console.log(simpleArraySum([1,2,3,4, 10,11]))
