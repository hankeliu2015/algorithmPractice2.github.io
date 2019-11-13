// my solution:
// use filter to filter out the first argument object array meet the condition.
// inside the filter, use for-in loop for 1st argument as outter loop.
// within the outer for-in loop, declare another for-in loop for 2nd argument,
// 2nd loop make sure the first argument contails all the elements of the 2nd arguments. not the other way around.
// also same element object mush has the same value.

// follow by a condition, if the 1st and 2nd has the same key, and value are the same, also 2nd argument has less keys than the 1st argument, return true.

// function whatIsInAName(collection, source) {
//   let matchedArray = collection.filter(obj => {
//     for (const key in obj ) {
//
//       for (const k in source) {
//         if ( !obj.hasOwnProperty(k) || source[k] !== obj[k]) {
//           return false;
//         }
//       }
//
//       if (obj[key] === source[key] && Object.keys(obj).length >= Object.keys(source).length ) {
//         return true;
//       }
//     }
//   })
//   console.log(matchedArray);
//   return matchedArray;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
//
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))


// solution:

// function whatIsInAName(collection, source) {
//
//   var srcKeys = Object.keys(source);
//
//   let data =  collection.filter(function(obj) {
//
//     return srcKeys
//       .map(function(key) {
//
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       })
//       .reduce(function(a, b) {
//
//         return a && b;
//       }
//     );
//
//     });
//
//     return data;
// }
