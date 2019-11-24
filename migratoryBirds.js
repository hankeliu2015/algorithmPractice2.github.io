 // if two or more types of birds are equally common, choose the type with the smallest ID number.

// convert bird id to object key and occurance to object values.
// the top occurance will be the return value.
// if there is a tie, the least id number will be returned. Use greater or equal in reduce callback. 

function migratoryBirds(arr) {
  let objArr = {};

  arr.forEach(el => {
    if (!objArr[el]) {
      objArr[el] = 1;
    }else {
      objArr[el]++;
    }
  })

  let maxBird = Object.keys(objArr).reduce((a,b) => objArr[a] >= objArr[b] ? a : b)
  // console.log(objArr);
  return maxBird;
}

// console.log(migratoryBirds([1,1,2,2,3]));
// console.log(migratoryBirds([1,4,4,4,5,3]));
// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
