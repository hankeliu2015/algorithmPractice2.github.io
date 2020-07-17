// reduce test

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x
// }, initialValue)
//
// console.log(sum) // logs 6

// counting instances of values in an object

let reduceExample1 = ["hank", "henry", "mike", "michael", "hank", "hank", "henry"]
function countingInstance(elements) {
  let result = {};

  for(let el of elements){
    if(el in result){
      result[el] ++;
    }else {
      result[el] = 1;
    }
  }
  return result;
}

console.log(countingInstance(reduceExample1));
