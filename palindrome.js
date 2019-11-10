firstCharacter = (str) => {
  return str.slice(0,1)
}
lastCharacter = (str) => {
  return str.slice(-1)
}
chopString = (str) => {
  return str.slice(1, -1)
}

isAPalindrome = (str) => {				//check for empty string
  							                  //check string length to be 1
  if (typeof str !== typeof 'string') {
    return false
  }

  if (str.length <= 1) {
   return true
 }							                  //base case - when the last compare is equal, return true for the final function

 if (firstCharacter(str) !== lastCharacter(str)){
    return false						      //base case - when no equal happens
  }
  return isAPalindrome(chopString(str))  		// recursuive function take in the string, which removed 1st and last char
}

// console.log(isAPalindrome("cattac"))
// isAPalindrome("cattac")
