//turn the array into an objects collection, same key value will increase value by 1
// use Math.max to find the max value, that value also the key of new objects.
// user a forEach iteration to assign each object kyy/values. Key is the array element, value is the counter.


function birthdayCakeCandles(ar) {
  let obj = new Object()

  ar.forEach(el => {
    if (obj[el]) {
      obj[el] ++ ;
    } else {
      obj[el] = 1;
    }
  })

  let maxNum = Math.max(...ar);
  console.log(obj[maxNum]);

}

// birthdayCakeCandles([3,2,1,3]);
