// my solution:
// use filter to filter out the first argument object array meet the condition.
// inside the filter, use for-in loop for 1st argument as outter loop.
// within the outer for-in loop, declare another for-in loop for 2nd argument,
// 2nd loop make sure the first argument contails all the elements of the 2nd arguments. not the other way around.
// also same element object mush has the same value.

// follow by a condition, if the 1st and 2nd has the same key, and value are the same, also 2nd argument has less keys than the 1st argument, return true.
//
// function whatIsInAName(collection, source) {
//   let matchedArray = collection.filter(obj => {
//
//     for (const key in obj ) {
//       for (const k in source) {
//         if ( !obj.hasOwnProperty(k) || source[k] !== obj[k]) {
//           return false;    //not has the key or has the same key with fifferent value.
//         }
//       }
//       if (obj[key] === source[key] && Object.keys(obj).length >= Object.keys(source).length ) {
//         return true;     //has the same key value pair. also the collection element can have more objects.
//       }
//     }
//   })
//   // console.log(matchedArray);
//   return matchedArray;
// }

//re-test // logic is better than above.

// function whatIsInAName(collection, source){
//   let matchedData = collection.filter(collectData => {
//     for(let collectKey in collectData) {
//       for(let sourceKey in source){
//
//         if(!collectData.hasOwnProperty(sourceKey)) {
//           return false;
//         }else if( collectData[sourceKey] !== source[sourceKey]){
//           return false;
//         }else if (Object.keys(source).length > Object.keys(collectData).length){
//           return false;
//         }
//       }
//       return true;
//     }
//   })
//   return matchedData;
// }


// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
//
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
//
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))


// solution:

// the reduce method will verify if all the source objects are included in the source objects.


// function whatIsInAName(collection, source) {
//
//   var srcKeys = Object.keys(source);
//   let data =  collection.filter(function(obj) {
//               //filters function will filter all element when return srcKeys
//     return srcKeys.map(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key]; // check if it has the same key and if the same key has the same value.
//       })
//       .reduce(function(a, b) {  // if this return 2 true element in an array, the reduce will make it one true (accumulator). if there one element is false, all array will return false.
//         return a && b;
//       }
//     );
//
//     });
//
//   return data;
// }

//retest

// function whatIsInAName(collection, source){
//   let srcKeys = Object.keys(source);
//
//   let data = collection.filter(el => {
//     return srcKeys.map(srcKey => {
//       return el.hasOwnProperty(srcKey) && el[srcKey] === source[srcKey];
//     }).reduce((a,b) => a && b)
//   })
//   return data;
// }
