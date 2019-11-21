// if the slower one starting point is less than the faster one, return no.
// when the slower one left behine, return false
// when the faster one step ahead, return false.
//

function kangaroo(x1, v1, x2, v2) {
  if ( x1 >= x2 && v1 < v2) {
    console.log("NO");
  } else if ( x1 === x2 || x1 + v1 === x2 + v2) {
    console.log("YES");
  }

  let vX1=v1;
  let vX2=v2;

  while ( x1 + vX1 !== x2 + vX2 ) {
    vX1 = vX1 + v1;
    vX2 = vX2 + v2;
    // console.log(x1+vX1, x2+vX2)
    // the slower left behind faster one, return false
    // faster on ahead of slower one, return false
    if (v1 <= v2 && x1 + vX1 < x2 + vX2  ) {
      console.log("NO");
      return false;
    } else if (v1 >= v2 && x1 + vX1 > x2 + vX2 ) {
      console.log("NO");
      return false;
    }
  }

  if (x1 + vX1 === x2 + vX2) {
    console.log("YES");
    return 'YES';
  }

}

console.log(kangaroo(0,3,4,2))
console.log(kangaroo(0,2,5,3))
