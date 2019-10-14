
var arr = [];

function sayDownFrom(n){
   console.log(n)
  if(n > 0){
    arr.push(n)
    sayDownFrom(n - 1) // recursive call. n-1 become the n in if  condition
  } else {
    return 1;       // base case - a stopping point,
  }

  return arr      // the process won't reach here before n > 0
}

console.log(sayDownFrom(10))
