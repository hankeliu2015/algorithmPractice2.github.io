// firstCharacter = (str) => {
//   return str.slice(0,1)
// }
// lastCharacter = (str) => {
//   return str.slice(-1)
// }
// chopString = (str) => {
//   return str.slice(1, -1)
// }
//
// isAPalindrome = (str) => {				//check for empty string
//   							                  //check string length to be 1
//   if (typeof str !== typeof 'string') {
//     return false
//   }
//
//   if (str.length <= 1) {
//    return true
//  }							                  //base case - when the last compare is equal, return true for the final function
//
//  if (firstCharacter(str) !== lastCharacter(str)){
//     return false						      //base case - when no equal happens
//   }
//   return isAPalindrome(chopString(str))  		// recursuive function take in the string, which removed 1st and last char
// }

// function isAPalindrome(str) {
  //reverse the string and compare if it is equal
  // base case is the string length is 0
//   let revStr;
//   let reverseString = (str) => {
//     // base case when str length equal to 0
//     if (str.length === 1){
//       return str;   // return the origin first char.
//     } else {
//       // use substring as recursive function argument
//       // use the last char concat the recursive function with substring as argument
//       let subStr = str.substring(0, str.length - 1)
//       return str[str.length -1].concat(reverseString(subStr))
//     }
//   }
//
//   if (reverseString(str) === str) {
//     return true;
//   } else {
//     return false;
//   }
//
// }
//
// console.log(isAPalindrome("cattac"))
// console.log(isAPalindrome("12345"))
// console.log(isAPalindrome("catac"))
