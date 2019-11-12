
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

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53))

//// method 2
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  return arr.filter(Boolean);
}
