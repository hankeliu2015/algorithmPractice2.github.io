// reduce test

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x
// }, initialValue)
//
// console.log(sum) // logs 6

// counting instances of values in an object
//
// let reduceNames = ["hank", "henry", "mike", "michael", "hank", "hank", "henry"]
//
// function reduceCountingNames(names){
//   let result = names.reduce((acc, el) => {
//     if(el in acc){
//       acc[el] ++;
//     }else{
//       acc[el] = 1
//     }
//     return acc;
//   }, {})
//   return result
// }

// console.log(reduceCountingNames(reduceNames));

// sum value of an array
// let reduceArr = [1,2,3,4,5]
//
// function reduceSum(arr) {
//   let arrSum = 0;
//   arrSum = arr.reduce((acc, el) => {
//     return acc + el;
//   }, 0)
//   return arrSum;
// }
//
// console.log(reduceSum(reduceArr));

// sum value in an object array
// let reduceObjArr = [{ a: 1}, {b: 2}, {c: 3}, {d: 14}]
//
// function reduceSumObjArr(objArr) {
//   let objArrSum = 0;
//
//   objArrSum = objArr.reduce((acc, cur) => {
//     let val = Object.values(cur)[0];
//     return acc + val;
//   }, 0)
//   return objArrSum;
// }
//
// console.log(reduceSumObjArr(reduceObjArr))

// flatten an array

// let reduceArr = [[1,2], [3,4], [5,6]]
//
// function reduceFlatArr(arr) {
//   let result = [];
//
//   result = arr.reduce((acc, cur) => {
//     return acc.concat(cur);
//   }, [])
//   return result;
// }
//
// console.log(reduceFlatArr(reduceArr));

// Remove duplicate items in an array

// let reduceDupArr = [1,2,3,4,5,1,2,3]
//
// function reduceRemoveDup(arr) {
//   let result = [];
//   result = arr.reduce((acc, cur) => {
//     if ( acc.indexOf(cur) === -1) {
//       acc.push(cur);
//     }
//     return acc
//   }, [])
//
//   return result;
// }
//
// console.log(reduceRemoveDup(reduceDupArr));

// replace filter and map with reduce
// double the positive elements
// let reduceArr4 = [1, -2, 3, -4, 5]
//
// function replaceFilterMap(arr) {
//   let result = [];
//   result = arr.reduce((acc, cur) => {
//     if(cur > 0) {
//       acc.push(cur * 2)
//     } else {
//       acc.push(cur)
//     }
//
//     return acc;
//   }, [])
//   return result;
// }
//
// console.log(replaceFilterMap(reduceArr4))
