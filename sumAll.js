function sumAll(arr) {

  let a, b
  if (arr[0] < arr[1]) {
    a = arr[0]
    b = arr[1]
  } else if (arr[0] > arr[1]) {
    a = arr[1]
    b = arr[0]
  }

  let sum = a
  for (var i = 0; i <= b - a; i++) {
    sum = sum + a + 1
  }
  return sum;
}

console.log(sumAll([10,5]))
