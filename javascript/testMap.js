// const array1 = [1, 4, 9, 16];
//
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);

// let kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//                {key: 3, value: 30}]
//
// let reformattedArray = kvArray.map(obj => {
//    let rObj = {}
//    rObj[obj.key] = obj.value
//    return rObj
// })
//
// console.log(reformattedArray)

let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
  // return x
})


// let testString1 = 'Hello World'
// let b = [...testString1].forEach(char => {
//     console.log(char.charCodeAt(0));
//   })

// console.log(a)
// console.log(b)

// let testnumbers = [1, 2, 3, 4]
// let filteredtestnumbers = testnumbers.map(function(num, index) {
//   if (index < 3) {
//      return num
//   }
// })
// console.log(filteredtestnumbers)
