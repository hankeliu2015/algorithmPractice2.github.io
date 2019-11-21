// if the slower one starting point is less than the faster one, return no.
// when the slower one left behine, return false
// when the faster one step ahead, return false.
//

function kangaroo(x1, v1, x2, v2) {
  if ( x1 >= x2 && v1 < v2) {
    return false;
  } else if ( x1 === x2 || x1 + v1 === x2 + v2) {
    return true;
  }

  let vX1=0;
  let vX2=0;

  while ( x1 + vX1 !== x2 + vX2 ) {
    vX1 = vX1 + v1;
    vX2 = vX2 + v2;
    console.log(vX1, vX2)

  }

  if (x1 + vX1 === x2 + vX2) {
    return true;
  }

}

console.log(kangaroo(0,3,4,2))
