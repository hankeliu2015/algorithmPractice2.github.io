// sort b's array.

// iterate the sorted b array. Find all factors.
//
// find the factor for each element from min to max.
// the smallest element is the largetst factor for sortedB.
//
// all b's common factors could divide a's elements.

function getTotalX(a, b) {
  let sortedB = b.sort((a,b) => a - b);
  let sortedA = a.sort((a,b) => a - b);
  let sortedBFactors = [];
  let finalFactors;

  // another soltion: the least in b will be the iterated range.
  // loop range set the min element value from b. find all the factors for a.
  // elimiate above from not factors for b.
  // find those factors between the Max of a and min of b, include both of them.

  for (let j = sortedA[a.length-1]; j <= sortedB[0]; j++) {

    for (let i = 0; i < a.length; i++) {
      if (j%a[i] ===0) {
        sortedBFactors.push(j);     // find a away to push one j.
      }
    }
  }

  // console.log(sortedBFactors)

  sortedB.forEach(el => {
    sortedBFactors = sortedBFactors.filter(factor => el%factor === 0)
  })


  finalFactors = sortedBFactors.filter((v,i) => sortedBFactors.indexOf(v) ===i);
  console.log(finalFactors)
  return finalFactors.length;


  // filter factors elements can be divided by a's element.
  // finalFactors = sortedBFactors.filter(el => {
  //   for (let i = 0; i < a.length; i++) {
  //     if (el%a[i]!==0) {
  //       return false;
  //     }
  //   }
  //   return true;
  // })

  // console.log(sortedBFactors, finalFactors)
  // return finalFactors.length;
}

console.log(getTotalX([2,4], [16,32,96]))
console.log(getTotalX([3,4], [24, 48]))
// getTotalX([2,6], [24,36])
