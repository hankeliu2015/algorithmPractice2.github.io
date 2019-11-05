function diffTwoArrays(arr1, arr2) {

  let newArr = [];
  for (let i = 0; i < arr1.length; i ++) {
    if (arr2 && arr2.includes(arr1[i])) {
      let j = arr2.indexOf(arr1[i])
      arr2.splice(j, 1)
    } else {
      newArr = newArr.push(arr1[i])
    }

    console.log(arr1, arr2, newArr)
  }

  console.log(arr1, arr2, newArr)
  return newArr.concat(arr2)

}

console.log(diffTwoArrays([1,2,3,5], [1,2,3,4,5]))
