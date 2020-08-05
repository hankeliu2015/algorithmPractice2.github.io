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
//
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

var p1 = new Promise((resolve, reject) => {
  resolve('Success!');
  // or
  // reject(new Error("Error!"));
});

p1.then(value => {
  console.log(value); // Success!
}, reason => {
  console.error(reason); // Error!
});

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
