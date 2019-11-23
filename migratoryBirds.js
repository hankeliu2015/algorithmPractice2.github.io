 // if two or more types of birds are equally common, choose the type with the smallest ID number.

// convert the elements occurance to hash value.
// the top occurance will be the return value.
// if there is a tie, the least id number will be returned.



function migratoryBirds(arr) {
// convert array to hash

let objArr = {};

arr.forEach(el => {
  if (!objArr[el]) {
    objArr[el] = 1;
  }else {
    objArr[el]++;
  }

})

console.log(objArr)


}

console.log(migratoryBirds([1,1,2,2,3]));
