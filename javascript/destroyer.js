
// // mehod1
// function destroyer(arr) {
//   // var args = Array.from(arguments);
//   let args = [...arguments];
//   // let args = Array.prototype.slice.call(arguments);
//   let initialArray = arguments[0];
//
//   for (let i = 1; i < args.length; i++) {
//
//     if (initialArray.includes(args[i])) {
//       let newArray = initialArray.filter(el => el !== args[i]);
//       initialArray = newArray;
//     }
//   }
//   return initialArray;
//
//
// }



//// method 2
// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//
//   return arr.filter(Boolean);
// }

////method 3

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }

// method 3:

const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valuesToRemove.includes(elem));

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
