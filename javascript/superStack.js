//// stack using es6

// class Stack1 {
//   constructor() {
//     this.items = [];
//     this._length = 0;
//   }
//   pop(){
//     this._length--;
//     return this.items.pop();
//   }
//   push(item) {
//     this._length++;
//     this.items.push(item);
//     return this.items;
//   }
//   peek() {
//     return this.items[this._length-1];
//   }
//   inc(a, b) {
//     this.items[a-1] += b;
//     return this.items;
//   }
//   printStack() {
//     let str = '';
//
//     this.items.forEach((el, index) => {
//       console.log(`Items ${index + 1} is: ${el}`);
//       str = str.concat(' ', el);
//     });
//     return str;
//   }
//
//   isEmpty() {
//     this.items = [];
//     this._length = 0;
//     console.log("current stack is emptied")
//   }
// }

//Stack implementation with JavaScript | my own test with function declaration.

// function Stack1() {
//   let items = [];
//   // this.items = []
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
//   this.displayItems = function() {
//     console.log(items);
//   }
//
//   this.inc = function(a, b) {
//     items[a-1] += b;
//     return items;
//   }
// }


//// use bind(s1) for this function

// let showItems = function() {
//   return console.log(this.items);
// }

//// function syntax test with hash object

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

// retest on prototype property

// let Stack1 = function() {
//   this.count = 0;
//   this.collect = {};
// }
//
// Stack1.prototype.push = function(item) {
//   this.count++;
//   this.collect[this.count] = item;
//   return this.collect;
// }
//
// Stack1.prototype.pop = function() {
//   delete this.collect[this.count];
//   this.count--;
//   return this.collect;
// }
//
// Stack1.prototype.size = function() {
//   return this.count;
// }
//
// Stack1.prototype.inc = function(a, b) {
//   this.collect[a] += b;
//   return this.collect;
// }
//
// let s3 = new Stack1();
// s3.push(1)
// s3.push(2)
// s3.push(3)
// let s1 = new Stack1();
// s1.push('item1')
// s1.push('item2')
// s1.push('item3')
// console.log(s1.size())
// console.log(s1.pop())
// console.log(s1.peek())
// console.log(s1.isEmpty())
// console.log(s1.clear())

//// use hash object to implement

// class Stack5 {
//   constructor(){
//     this.count = 0;
//     this.storage = {}
//   }
//
//   push(value) {
//     this.storage[this.count] = value;
//     this.count++;
//     console.log(`totle storage after push is:`);
//     console.log(this.storage)
//   }
//
//   pop() {
//     if (this.count === 0 ) {
//       return undefined;
//     }
//     this.count --;
//     var result = this.storage[this.count];
//     // debugger
//     delete this.storage[this.count];
//     return result;
//   }
//
//   size() {
//     return this.count;
//   }
//
// }

// let stackTest1 = new Stack5();
// stackTest1.push(1);
// stackTest1.push(2);
// stackTest1.push(3);
// console.log(stackTest1.size());
// console.log(stackTest1.pop());
// console.log(stackTest1.size());

// let stackTest2 = new Stack5();
// stackTest2.push(1);
// stackTest2.push(2);
// console.log(stackTest2.size());
// stackTest2.pop();
// console.log(stackTest2.size());

// final versin should like the following:
// function superStack(operations) {
//   let ops = operations.split(' ');
//   if (ops[0] === "push") {
//     let pushValue = ops[1];
//     // perform push operation with above value.
//   }
//
//   if (ops[0] === "inc") {
//     let incValue1 = ops[1];
//     let incValue2 = ops[2];
//     // perform inc operation with above value
//   }
//
//   if (ops[0] === "pop") {
//     // perform inc operation with above value
//   }
// }
