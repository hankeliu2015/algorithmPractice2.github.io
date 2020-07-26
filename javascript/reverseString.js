// let myString = 'Algorithm';
//
// // Set 'myString' equal to a substring of itself minus the last letter...
// myString = myString.substring(0, myString.length - 1) +
// // ...and then add the last letter back:
// myString[myString.length - 1];
//
// // myString still contains 'Algorithm'!
// console.log(myString);
// // => "Algorithm"

//// print a string

// function printString(str) {
//   let subString;
//   if (str.length === 0){
//     return true;
//   } else {
//     console.log(str[0]);
//     subString = str.substring(1, str.length);
//     printString(subString);
//   }
// }
//
// console.log(printString("string"))

// let newString = ''

// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;				//base case. Return value will show.
//   } else {
//     // console.log(myString)	// show the substring. following return value won’t show because the recursive
//     // newString = newString + myString + '|';
//     // debugger
//     return reverseString(myString.substring(1)) + myString[0];
// //put the first character to the end, the substring break up with the first element until the last one.
//   }
// }

////retest ververstring

function reverseString(str) {
  //base case
  if ( str.length < 2) {
    return str;
  } else {
    let char = str.substring(str.length - 1)
    let subStr = str.substring(0, str.length -1)
    return char.concat(reverseString(subStr));
  }
}

console.log(reverseString("lissa"))
// let newString = reverseString('pizza')
// console.log(newString)
// console.log(reverseString('pizza'))


//reverse string - easy solution.

// function reverseArray(string) {
//   if (string.length === 0 ) {
//     return string;
//   } else {
//     return string[string.length - 1] + reverseArray(string.slice(0, string.length -1)) 	//take one element each time
//   }
// }
// console.log(reverseArray("123456"))
