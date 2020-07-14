// setTimeout(sayHello, 2000)
//
// function sayHello() {
//   console.log("Say Hello");
// }

// explain how setTimeout function worked.
// funciton setTimeout(callback, timeInMilliseconds) {
  //wait for the timeout;
  // callback();
//
let inventory = 20

function removeFromInventory(quantity, callback) {
  setTimeout(() => {
    if (typeof(quantity) !== 'number') {
      return callback("Quantity must be a number")
    }

    if (quantity > inventory) {
      return callback(null, "Quantity must less than inventory")
    }

    if (quantity <= inventory) {
      return callback(null, ` Inventory is down to: ${inventory - quantity}`)
    }
  }, 1000)

}


// removeFromInventory(10, function(err, msg) {
//   if (err) {
//   return console.log(err)
//   }
//   console.log(msg);
// })  // return inv is 10

// removeFromInventory(20, function(err, msg) {
//   if (err) {
//   return console.log(err)
//   }
//   console.log(msg);
// })  // return inv is 10
// //
// removeFromInventory(25, function(err, msg) {
//   if (err) {
//   return console.log(err)
//   }
//   console.log(msg);
// })  // retrn msg remove more than inv
//
// removeFromInventory('25', function(err, msg) {
//   if (err) {
//   return console.log(err)
//   }
//   console.log(msg);
// })  // return mes quantity must be a number.

const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
