function Stack( {
  let items = [];
  let top = 0; 
})




// let Stack1 = function() {
//   this.count = 0;
//   this.storage = {}
// }
//
// Stack1.prototype.push = function(value) {
//   this.storage[this.count] = value;
//   this.count++;
// }
//
// Stack1.prototype.pop = function() {
//   if (this.count === 0 ) {
//     return undefined;
//   }
//
//   this.count --;
//   var result = this.storage[this.count];  //store the current storage property
//   delete this.storage[this.count];        // delete the original storage property
//   return result;                          // return the updated storage property
// }
//
// Stack1.prototype.size = function() {
//   return this.count;
// }
//
// class Stack2 {
//   constructor(){
//     this.count = 0;
//     this.storage = {}
//   }
//
//   push(value) {
//     this.storage[this.count] = value;
//     this.count++;
//   }
//
//   pop() {
//     if (this.count === 0 ) {
//       return undefined;
//     }
//     this.count --;
//     var result = this.storage[this.count];
//     debugger
//     delete this.storage[this.count];
//     return result;
//   }
//
//   size() {
//     return this.count;
//   }
//
// }

// let stackTest1 = new Stack1();
// stackTest1.push(1);
// stackTest1.push(2);
// stackTest1.push(3);
// console.log(stackTest1.size());
// console.log(stackTest1.pop());
// console.log(stackTest1.size());

// let stackTest2 = new Stack1();
// stackTest2.push(1);
// stackTest2.push(2);
// console.log(stackTest2.size());
// stackTest2.pop();
// console.log(stackTest2.size());




// function superStack(operations) {
//   let ops = operations.split(' ');
//   if (ops[0] === "push") {
//     let pushValue = ops[1];
//     // perform push operation with above value.
//   }
//
//   if (ops[0] === "inc") {
//     let incValue1 = ops[1];
//     let incValue1 = ops[2];
//     // perform inc operation with above value
//   }
//
//   if (ops[0] === "pop") {
//     // perform inc operation with above value
//   }
// }
