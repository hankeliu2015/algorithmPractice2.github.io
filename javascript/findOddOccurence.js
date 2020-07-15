
// function findOddOccurence(arr) {
//   var arrHash = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (arrHash[arr[i]] !== undefined) {
//       arrHash[arr[i]] ++
//     } else {
//       arrHash[arr[i]] = 1
//     }
//   }
//   console.log(arrHash)
//   let counter = 0
//   for ( var key in arrHash) {
//
//     if (parseInt(key) % 2 !== 0) {
//       console.log("inside condition: ", key);
//       counter += arrHash[key]
//     }
//   }
//   return counter;
// }

// retest
// change the array into object , element as the key and value as the occurance
// if the element equal to a key, the value will increment. if not, create a key value pair.
// undeclared object key return undefined, not false.

// function findOddOccurence(arr) {
//   let obj = {};
//   for(i = 0; i < arr.length; i++) {
//     if(!obj[arr[i]] === false){
//       obj[arr[i]] += 1;
//     }else {
//       obj[arr[i]] = 1;
//     }
//   }
//
//   //set up a counter for the obj odd keys
//   let counter = 0;
//   for(const key in obj) {
//     if(parseInt(key) % 2 !== 0){
//       counter += obj[key];
//     }
//   }
//   return counter;
// }
//
// const input = [1,2,4,2,2,4,1,4,3,3,3];
// console.log(findOddOccurence(input))
