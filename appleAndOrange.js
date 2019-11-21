// count the occurances of apples and oranges arrays fell between the house range t - s .
// conver the apples element to the range from a
// convert the oranges array element to the distance from a



function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // iterate through apples array, add a to each element.

  let applesArray = apples.map(el => {
    return el + a;
  })
  let orangesArray = oranges.map(el => {
    return el + b;
  })



  console.log(applesArray, oranges)

}

console.log(countApplesAndOranges(7, 11, 4, 12,[2, 3, -4], [3,-2,-4]));
