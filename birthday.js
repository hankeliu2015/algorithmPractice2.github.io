// length of the portion is 2, the sum of the portion is 3.
// count above pattern occurance times.

// loop the array one a time to calculate the sums.
// if there is a match, counter add one.


function birthday(s, d, m) {
  let counter = 0;
  let segment = [];
  for (let i = 0; i < s.length; i ++) {

      // if the sum of the elements equal to d, counter add one.
      // use reduce for the sum.
      // m in slice need to be the range, not the end.
      segment = s.slice(i, m+i)
      if (segment.reduce((acc,el)=> acc+el, 0) === d) {
        counter++;
      }
  }

  console.log(counter)
  return counter
}

console.log(birthday([1,2,1,3,2],3,2))
console.log(birthday([2,2,1,3,2],4,2))
