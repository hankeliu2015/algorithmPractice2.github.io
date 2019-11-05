function diffTwoArrays(arr1, arr2) {

  let newArr = [];

  function firstArrayOnly(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }
  }

  firstArrayOnly(arr1,arr2);
  firstArrayOnly(arr2, arr1);
  return newArr;

  // for (let i = 0; i < arr1.length; i ++) {
  //   if (arr2 && arr2.includes(arr1[i])) {
  //     let j = arr2.indexOf(arr1[i])
  //     arr2.splice(j, 1)
  //   } else {
  //     newArr = newArr.push(arr1[i])
  //   }
  //   console.log(arr1, arr2, newArr)
  // }
  //
  // if (arr2) {
  //   return newArr.concat(arr2)
  // } else {
  //   return newArr
  // }

}

console.log(diffTwoArrays([1,2,3,5], [1,2,3,4,5]))
console.log(diffTwoArrays([1,2,3,4,5], [1,2,3,5]))
