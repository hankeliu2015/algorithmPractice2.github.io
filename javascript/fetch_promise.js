// curry

const add = a => b => a + b;

console.log(add(1)(2));

// const curry = f => g => x => f(g(x));
// const double = n => n * 2;
// const inc = n => n + 1;
// console.log(curry(double)(inc)(3));

// compostion function

// const toSlug = input => encodeURIComponent(
//   input.split(' ')
//     .map(str => str.toLowerCase())
//     .join('-')
// );
//
//
// const curry = fn => (...args) => fn.bind(null, ...args);
//
// const map = curry((fn, arr) => arr.map(fn));
//
// const join = curry((str, arr) => arr.join(str));
//
// const toLowerCase = str => str.toLowerCase();
//
// const split = curry((splitOn, str) => str.split(splitOn));

// closure on MDN

// function init(message) {
//   var name = message; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init("this is a closure test");

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }
//
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
//
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//
//     decrement: function() {
//       changeBy(-1);
//     },
//
//     value: function() {
//       return privateCounter;
//     }
//   }
// };
//
// var counter1 = makeCounter();
// var counter2 = makeCounter();
//
// console.log(counter1.value());  // 0.
//
// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // 2.
//
// counter1.decrement();
// console.log(counter1.value()); // 1.
// console.log(counter2.value()); // 0.

// function showHelp(help) {
//   document.getElementById('help').innerHTML = help;
// }
//
// function setupHelp() {
//   var helpText = [
//       {'id': 'email', 'help': 'Your e-mail address'},
//       {'id': 'name', 'help': 'Your full name'},
//       {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//
//   for (var i = 0; i < helpText.length; i++) {
//     let item = helpText[i];
//     document.getElementById(item.id).onfocus = function() {
//       showHelp(item.help);
//     }
//   }
// }
//
// setupHelp();

// closure EE

// const secret = (msg) => () => msg;
// const theSecret = 'Closures are easy.';
// const mySecret = secret(theSecret);
// const actual = mySecret();
//
// console.log(actual);


// const add = (a, b) => a + b;
// const add10 = partialApply(add, 10);
// add10(5);

// const partialApply = (fn, ...fixedArgs) => {
//   return function (...remainingArgs) {
//     // debugger
//     return fn.apply(this, fixedArgs.concat(remainingArgs));
//   };
// };

// const partialApply = (fn, fixedArgs) => {
//   return function (remainingArgs) {
//     // debugger
//     return fn.apply(null, [fixedArgs, remainingArgs]);
//   };
// };
//
// const add = (a, b) => a + b;
// const add10 = partialApply(add, 10);
//
// console.log(add10(5));



// functional programing

// const x = {
//   val: 2
// }
//
// // const x1 = () => x.val += 1;
// // const x2 = () => x.val *= 2;
//
// const x1 = (x) => Object.assign({}, x, {val: x.val + 1})
// const x2 = (x) => Object.assign({}, x, {val: x.val * 2})
//
// // x1();
// // x2();
// // console.log(x.val);
//
// console.log(x1(x2(x)).val);
//
// const y = {
//   val: 2
// };
//
// x2(y);
// x1(y);
//
// console.log(x1(x2(y)).val)

//
// const a = Object.freeze({
//   foo: { greeting: 'Hello' },
//   bar: 'world',
//   baz: '!'
// });
//
// const b = Object.create({
//   foo: { greeting: 'Hello' },
//   bar: 'world',
//   baz: '!'
// });
//
// a.foo.greeting = 'Goodbye';
// b.foo2 = 'Goodbye2';
//
// // console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`);
// console.log(b.foo2);



// //// Asynchronous on Netflix
//
//
// function play(movieId, cancelButton, callback) {
//
//   let movieTicket, playError;
//
//   // track do I have movie ticket and player loaded.
//   let tryFinish = function() {
//     if (playError) {
//       callback(null, playError)
//     }
//     else if ( movieTicket && player.intialized) {
//       callback(null, ticket);
//     }
//   };
//   // tracking the error
//   cancelButton.addEventListener("click", function() {playError = "cancelled"}
//     if (!player.intialized) {
//       player.init(function(error) {
//         playError = error;
//         tryFinish();
//     }
//     authorizeMovie(function(error, ticket) {
//       playError = error;
//       movieTicket = ticket;
//       tryFinish();
//     });
//   });
//
// //// observer pattern
//
// document.addEventListener("mosemove", function next(e) {
//   console.log(e);
// })
//
// } // end of function
//
// //// top rated move collection
//
// var getTopRatedFilms = user =>
//   user.videLists.
//     map(videoList =>                                // return all the video list contains movies rated 5.0. array inside array.
//         videoList.videos.
//           filter(video => video.rating === 5.0)).   //filter return all movies which rated 5.0
//           concatAll();                              // flatten arrays inside array
// getTopRatedFilms(user).
//   forEach(film => cosole.log(film));                // output all elements inside array.
//
// //// mouse drag collection
//
// var getElementDrags = elmt = >
//   elemt.mouseDowns.
//     map(mouseDown =>
//       document.mouseMoves.
//         takeUntil(document.mouseUps)).
//     concatAll();
//
// getElementDrags(image).
//   forEach(pos => image.position = pos);
//
//   //// event subscription
//   //// subscribe
//   var handle = (e) => console.log(e);
//   document.addEventListener("mousemoves", handler);
//   //// unsubscribe
//   document.removeEventListener("mosemoves", handler);
//
// //// expanded Observable.forEach
// // subscribe
// var subscription =
//   mouseMoves.forEach(
//     //next data
//     event => console.log(event),
//     //error
//     error => console.error(error),
//     // completed
//     () => console.log("done"));
// // unsubscribe
//
// subscription.dispose();

//// promise on Eric Elliott
//// simple example
// const wait = time => new Promise((resolve) => setTimeout(resolve, time));
//
// wait(3000).then(() => console.log('Hello!')); // 'Hello!'

//// complex promise example
// const wait = time => new Promise(
//   res => setTimeout(() => res(), time)
// );
//
// promise.then(
//   onFulfilled?: Function,
//   onRejected?: Function
// ) => Promise
//// example II
// wait(200)
//   // onFulfilled() can return a new promise, `x`
//   .then(() => new Promise(res => res('foo')))
//   // the next promise will assume the state of `x`
//   .then(a => a)
//   // Above we returned the unwrapped value of `x`
//   // so `.then()` above returns a fulfilled promise
//   // with that value:
//   .then(b => console.log(b)) // 'foo'
//   // Note that `null` is a valid promise value:
//   .then(() => null)
//   .then(c => console.log(c)) // null
//   // The following error is not reported yet:
//   .then(() => {throw new Error('foo');})
//   // Instead, the returned promise is rejected
//   // with the error as the reason:
//   .then(
//     // Nothing is logged here due to the error above:
//     d => console.log(`d: ${ d }`),
//     // Now we handle the error (rejection reason)
//     e => console.log(e)) // [Error: foo]
//   // With the previous exception handled, we can continue:
//   .then(f => console.log(`f: ${ f }`)) // f: undefined
//   // The following doesn't log. e was already handled,
//   // so this handler doesn't get called:
//   .catch(e => console.log(e))
//   .then(() => { throw new Error('bar'); })
//   // When a promise is rejected, success handlers get skipped.
//   // Nothing logs here because of the 'bar' exception:
//   .then(g => console.log(`g: ${ g }`))
//   .catch(h => console.log(h)) // [Error: bar]
// ;

//// ().then MDN

// var p1 = new Promise((resolve, reject) => {
//   resolve('Success!');
//   // or
//   // reject(new Error("Error!"));
// });
//
// p1.then(value => {
//   console.log(value); // Success!
// }, reason => {
//   console.error(reason); // Error!
// });

//// using promise on MDN

// function successCallback(result) {
//   console.log("Audio file ready at URL: " + result);
// }
//
// function failureCallback(error) {
//   console.error("Error generating audio file: " + error);
// }
//
// createAudioFileAsync(audioSettings, successCallback, failureCallback);
//
// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
//
// const promise = createAudioFileAsync(audioSettings);
// promise.then(successCallback, failureCallback);
