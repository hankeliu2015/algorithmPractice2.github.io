// sort b's array.

// iterate the sorted b array. Find all factors.
//
// find the factor for each element from min to max.
// the smallest element is the largetst factor for sortedB.
//
// all b's commen factors could divide a's elements.

function getTotalX(a, b) {
  let sortedB = b.sort((a,b) => a - b);
  let sortedBFactors = [];
  let factors;
  let finalFactors;

  for (let i = 2; i <= Math.floor(sortedB[0]/2); i++ ) {
    if (sortedB[0]%i === 0) {
      sortedBFactors.push(i);
    }
  }
  sortedBFactors.push(sortedB[0]);

  // filter them by divid other b elements.
  // remove the element from sortedBFactors if they can not be divided by any other b elements.

  sortedB.forEach(el => {
    sortedBFactors = sortedBFactors.filter(factor => el%factor === 0)
  })

  // filter factors elements can be divided by a's element.
  finalFactors = sortedBFactors.filter(el => {
    for (let i = 0; i < a.length; i++) {
      if (el%a[i]!==0) {
        return false;
      }
    }
    return true;
  })

  console.log(sortedBFactors, finalFactors)
  return finalFactors.length;
}

console.log(getTotalX([2,4], [16,32,96]))
