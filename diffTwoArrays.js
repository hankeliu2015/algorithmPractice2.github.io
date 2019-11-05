function diffTwoArrays(arr1, arr2) {

  let newArr = [];
  // //method 1
  // function firstArrayOnly(arr1, arr2) {
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.indexOf(arr1[i]) === -1) {
  //       newArr.push(arr1[i]);
  //     }
  //   }
  // }
  //
  // firstArrayOnly(arr1,arr2);
  // firstArrayOnly(arr2, arr1);
  // return newArr;

  ////method 2

  newArr = arr1.concat(arr2);
  let filteredArr = newArr.filter(el => !arr1.includes(el) || !arr2.includes(el));
  return filteredArr;

}

console.log(diffTwoArrays([1,2,3,5], [1,2,3,4,5]))
console.log(diffTwoArrays([1,2,3,4,5], [1,2,3,5]))
