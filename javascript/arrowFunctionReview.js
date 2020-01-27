//call, apply and bind

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

// console.log(greet()); // my name is , hi!

let person1 = {
    name: 'Bob',
    greet: greet
};

// person1.greet()

let sally = { name: 'Sally' };

// greet.call(sally)




function arrowTest() {
  let obj = {
    test: () => console.log(this)
  }
  return obj
}

// console.log(arrowTest());

class Test15 {
  constructor() {
  this.message = "secret";
  }
  scope = () => console.log(this)
}

// console.log(new Test15())
// console.log(typeof(new Test15()))


class Test16 {
  constructor(message) {
    this.message = message
  }
  scope = () => console.log(this)
}

// console.log(new Test16('secret').scope())
// console.log(typeof(new Test16('secret')))
