let Stack1 = function() {
  this.count = 0;
  this.storage = {}
}

Stack1.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack1.prototype.pop = function() {
  if (this.count === 0 ) {
    return undefined;
  }

  this.count --;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack1.prototype.size = function() {
  return this.count;
}

let stackTest1 = new Stack1();
stackTest1.push(1);
stackTest1.push(2);
console.log(stackTest1.size());
stackTest1.pop();
console.log(stackTest1.size());



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
