// user map to get the true of false if the element is in range,
// use filter to filter out the false element.
// console log the array length, which are true elements.


function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let applesArray = apples.filter(el => {
    if (el + a >= s && el + a <= t) {
      return true;
    }
  })

  let orangesArray = oranges.filter(el => {
    if (el + b >= s && el + b <= t) {
      return true;
    }
  })

  console.log(applesArray.length);
  console.log(orangesArray.length); // output formate request to print twice.

}

console.log(countApplesAndOranges(7, 11, 4, 12,[2, 3, -4], [3,-2,-4]));
console.log(countApplesAndOranges(7, 11, 5, 15,[-2, 2, 1], [5, -6]));

// solution 2: user a counter instead of filter.
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let applesCounter=0, orangesCounter=0;
//   let applesArray = apples.map(el => {
//     if (el + a >= s && el + a <= t) {
//       applesCounter++;
//     }
//   })
//
//   let orangesArray = oranges.map(el => {
//     if (el + b >= s && el + b <= t) {
//       orangesCounter++;
//     }
//   })
//
//   console.log(applesCounter);
//   console.log(orangesCounter); // output formate request to print twice.
//
// }

//Solutions by reduce:			??

// Array.prototype.sum = function(f) {
//     return this.reduce((s, v) => s + f(v), 0);
// }
//
// console.log( apple.sum(d => s - a <= d && d <= t - a));
// console.log(orange.sum(d => s - b <= d && d <= t - b));
