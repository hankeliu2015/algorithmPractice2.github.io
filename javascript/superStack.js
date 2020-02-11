// //Stack implementation with JavaScript
//
// function Stack() {
//   let items = [];
//
//   this.push = function(element){
//     return items.push(element);
//   }
//
//   this.pop = function(){
//     return items.pop();
//   }
//
//   this.peek = function() {
//     return items[items.length - 1]
//   }
//
//   this.isEmpty = function () {
//     return `the stack is empty: ${items.length === 0}`;
//   }
//
//   this.clear = function () {
//     items.length = 0;
//     return `stack is cleared ${items.length}`
//   }
//
//   this.size = function(){
//     return `the stack length is: ${items.length}`;
//   }
//
// }
//
// // stack using es6
//
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   pop(){
//     return this.items.pop();
//   }
// }
//
// let stack3 = new Stack();
// stack3.push('item1')
// stack3.push('item2')
// stack3.push('item3')
// console.log(stack3.size())
// console.log(stack3.pop())
// console.log(stack3.peek())
// console.log(stack3.isEmpty())
// console.log(stack3.clear())


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
class Stack2 {
  constructor(){
    this.count = 0;
    this.storage = {}
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
    console.log(`totle storage after push is:`);
    console.log(this.storage)
  }

  pop() {
    if (this.count === 0 ) {
      return undefined;
    }
    this.count --;
    var result = this.storage[this.count];
    // debugger
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

}

// let stackTest1 = new Stack1();
// stackTest1.push(1);
// stackTest1.push(2);
// stackTest1.push(3);
// console.log(stackTest1.size());
// console.log(stackTest1.pop());
// console.log(stackTest1.size());

let stackTest2 = new Stack2();
stackTest2.push(1);
stackTest2.push(2);
console.log(stackTest2.size());
stackTest2.pop();
console.log(stackTest2.size());




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
