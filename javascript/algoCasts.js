/*
1. reverse string 
const reverseStr = function(str) {
    // return str.split('').reverse().join(); 

    // let newStr = ''
    // for (i = 0; i < str.length; i ++) {
    //     newStr = str[i] + newStr
    // }
    // return newStr

    // return str.split('').reduce((acc, el) => el + acc)  // concat reversely 
}

console.log(reverseStr('abcdefgh'))
*/

/* 
2. Palindromes 
const palindromes = function(str) {
    //method 1 - reduce
    // let newStr = str.split('').reduce((acc, el) => el + acc)
    // return newStr === str

    // method 2 loop
    //set the index backward 
    // let result = false
    // for (i = 0; i < str.length; i ++) {
    //     if(str[i] !== str[str.length - 1 - i]) {
    //         result = false
    //         break
    //     } else {
    //         result = true
    //     }
    // }
    // return result

    // method 3 every method
    //convert to array and use every method. 
    // return str.split('').every((el, index) => {
    //     return el === str[str.length - 1 - index];
    // })
}

// method 4 - recursive solution 
const getFirst = (str) => str.slice(0,1)
const getLast = (str) => str.slice(-1)
const chopFirstLast = (str) => str.slice(1, -1)
// if first and last are equal pass the chopped string into recursive function until there is nothing left 
// base case is when str length is one or 0 or there is an unequal between first and last 

const palindromes2 = function(str) {
    if (str.length === 1 || str.length === 0) {
        return true
    } 
    if (getFirst(str) !== getLast(str)) {
        return false;
    }
    return palindromes2(chopFirstLast(str))     // without return will show undefined. 
}

// console.log(palindromes2("abbabba"))
// console.log(palindromes2("abbcbba"))
// console.log(palindromes2("aaab"))
// console.log(palindromes2("a"))
// console.log(palindromes2(""))
*/

