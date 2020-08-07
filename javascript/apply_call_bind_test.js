// using apply to append array

// const array = ['a', 'b']
// const elements = [0,1,2];
// array.push.apply(array, elements)
// console.info(array)

//apply and build in funciton

// const nums = [1,2,3,4,4]
//
// let max = Math.max.apply(null, nums);
//
// console.log(max)


// Function.prototype.construct = function(aArgs) {
//   let oNew = Object.create(this.prototype);
//   this.apply(oNew, aArgs);
//   return oNew;
// };
//
// function MyConstructor() {
//   for (let nProp = 0; nProp < arguments.length; nProp++) {
//     this['property' + nProp] = arguments[nProp];
//   }
// }
//
// let myArray = [4, 'Hello world!', false];
// let myInstance = MyConstructor.construct(myArray);
//
// console.log(myInstance.property1);                // logs 'Hello world!'
// console.log(myInstance instanceof MyConstructor); // logs 'true'
// console.log(myInstance.constructor);              // logs 'MyConstructor'
