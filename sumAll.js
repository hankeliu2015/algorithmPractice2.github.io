function sumAll(arr) {

  // let a, b
  // if (arr[0] < arr[1]) {
  //   a = arr[0]
  //   b = arr[1]
  // } else if (arr[0] > arr[1]) {
  //   a = arr[1]
  //   b = arr[0]
  // }
  // let sum = 0
  // for (var i = 0; i <= b - a; i++) {
    //   sum = sum + (a + i)
    // }

  // let newArr = arr.sort(el => a-b)
  // let sum = 0
  // for (var i = 0; i <= newArr[1] - newArr[0]; i++) {
  //   sum = sum + (newArr[0] + i)
  // }

  let sum = 0
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([10,5]))
