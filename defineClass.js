
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
