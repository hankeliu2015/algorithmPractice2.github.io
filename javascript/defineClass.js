//// class review on MDN

//// hoist and declaration
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// const p = new Rectangle();


//// class expresions (names and unnamed )
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
//
// let Square = class Square {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
//
// console.log(Rectangle.name)
// console.log(Square.name)

//// prototype method

// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//
//   //getter
//   getArea() {
//      return this.calcArea() ;
//   }
//   // method
//   calcArea() {
//     return this.height * this.width
//   }
// } //end of class
//
// let r1 = new Rectangle(3, 4)
// console.log(r1.getArea());

//// static method - point class distance

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   static distance(p1, p2) {
//     console.log(p1.x, p1.y, p2.x, p2.y);
//     return Math.hypot(p1.x - p2.x, p1.y - p2.y);
//   }
// }
//
// let p1 = new Point(1,1);
// let p2 = new Point(3,3);
// console.log(Point.distance(p1, p2))

//// boxing with prototype methods and static methods
//// When a static or prototype method is called without a value for this, the this value will be undefined inside the method.
// class Animal {
//   speak(){
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }
//
// let a1 = new Animal();
// let s1 = a1.speak;
// console.log(s1())

// console.log(Animal.eat())
// let e1 = Animal.eat
// console.log(e1())

//// in functional based syntax this will be set to global.

// function Animal() { }
//
// Animal.prototype.speak = function() {
//   return this;
// }
//
// Animal.eat = function() {
//   return this
// }
//
// let a1 = new Animal;
// let e1 = Animal.eat;
// console.log(a1.speak());
// console.log(e1());

//// instance property defined inside class methods:
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
//
// Rectangle.staticWidth = 20;
// Rectangle.prototype.prototypeWidth = 25;

//// public and private field declaration // skipped

//// static(class-side) properties and prototype data properties defined outside the class mehtod

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   speak() {
//     console.log(`${this.name} makes a noise`)
//   }
// }
//
// let a1 = new Animal('fido');
// a1.speak();
//
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//
//   speak() {
//     super.speak();
//     console.log(`dog ${this.name} bark`)
//   }
// }
//
// let d1 = new Dog('charlie')
// d1.speak();


//// functional based class extends skipped

//// inherit regular object methods

// const Animal = {
//   speak() {
//     console.log(`${this.name} make a noise`)
//   }
// }
//
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// Object.setPrototypeOf(Dog.prototype, Animal);
// let d1 = new Dog("charlie");
// d1.speak();

//// spieces skipped

//// super class call with super. previous class tested.

//// mix-ins

// let sayHiMixin =  {
//     sayHi() {
//       console.log(`Hello ${this.name}`);
//     }
//   }
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// Object.assign(User.prototype, sayHiMixin);
//
// let u1 = new User("henry");
// u1.sayHi();

//// getter
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   get area() {
//     return this.calcArea();
//   }
//
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//
// const square = new Rectangle(10, 10);
//
// // console.log(square.calcArea())
// console.log(square.area)

////static method - class method
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//
//     return Math.hypot(dx, dy);
//   }
// }
//
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
//
// console.log(Point.distance(p1, p2));

////setter - instance variable
// var language = {
//   set current(name) {
//     this.log.push(name);
//   },
//   log: []
// }
//
// language.current = 'EN';
// language.current = 'FA';
//
// console.log(language.log);

// // generator
// function* generator(i) {
//   yield i;
//   yield i + 10;
// }
//
// var gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);

//yield
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// var g = gen(); // "Generator { }"
// console.log(g.next());      // "Object { value: 1, done: false }"
// console.log(g.next());      // "Object { value: 2, done: false }"
// console.log(g.next());      // "Object { value: 3, done: false }"
// console.log(g.next());      // "Object { value: undefined, done: true }"

// //boxing with prototype and static method:
// class Animal {
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }
//
// let obj = new Animal();
// console.log(obj.speak()); // Animal {}
// let speak = obj.speak;
// console.log(speak()); // undefined
//
// Animal.eat() // class Animal
// let eat = Animal.eat;
// console.log(eat(); // undefined

// class MyArray extends Array {
//   // Overwrite species to the parent Array constructor
//   static get [Symbol.species]() { return Array; }
// }
//
// let a = new MyArray(1,2,3);
// let mapped = a.map(x => x * x);
//
// console.log(mapped instanceof MyArray); // false
// console.log(mapped instanceof Array);   // true

//// Difference Between Class & Prototypal Inheritance

//// delegate prototype | old way
function Greeter(name) {
  this.name = name || "Joe Smith"
}

Greeter.prototype.hello = function hello() {
  return 'hello, my name is' + this.name;
}

let george = new Greeter('George')

// new way
const proto = {       // create a prototype and pass that to object by object create.
  hello: function hello() {
    return 'Hello, my name is ' + this.name;
  }
};

var george = Object.create(proto);
george.name = 'George'  //// "name" is a property set on "george", but not on "greeter"
console.log(george.hello());
