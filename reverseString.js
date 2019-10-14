// let newString = ''

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;				//base case. Return value will show.
  } else {
    // console.log(myString)	// show the substring. following return value won’t show because the recursive
    // newString = newString + myString + '|';
    // debugger
    return reverseString(myString.substring(1)) + myString[0];
//put the first character to the end, the substring break up with the first element until the last one.
  }
}

// let newString = reverseString('pizza')
// console.log(newString)
console.log(reverseString('pizza'))


//reverse string - easy solution.

// function reverseArray(string) {
//   if (string.length === 0 ) {
//     return string;
//   } else {
//     return string[string.length - 1] + reverseArray(string.slice(0, string.length -1)) 	//take one element each time
//   }
// }
// console.log(reverseArray("123456"))
