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

/* 
reverse an integer n
const reverseInteger = function(n) {
    // convert into a string and reverse back 
    const newInt = n.toString().split('').reverse().join('')
    return parseInt(newInt) * Math.sign(n)
}

console.log(reverseInteger(123456))
console.log(reverseInteger(-123456))
*/ 

/* 
MaxChar Problem 
// convert to array and use key value pair to count each one. 
const maxChar = function(str) {
    // loop throught the chars to create the key/value object
    // get obj key/value pair which has max value
    // const obj = {}
    // const arr = str.split('')
    // for(i = 0; i < arr.length; i ++) {
    //     if (!obj[arr[i]]) {
    //         obj[arr[i]] = 1
    //     } else {
    //         obj[arr[i]] += 1
    //     }
    // }
    // let maxCharKey; 
    // let maxCharValue = 0
    // for(let key in obj) {
    //     if(maxCharValue < obj[key]) {
    //         maxCharKey = key
    //     }
    // }
    // return `${maxCharKey}: ${obj[maxCharKey]}`

    // method 2 
    // declare max, maxChar and charMap
    // loop through each char with for of, create the charMap 
    // inner loop through each charMap to compare the max value. 
    let max = 0
    let maxChar = str[0]
    let charMap = {}; 

    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1
        for(let key in charMap) {
            if(charMap[key] > max) {
                max = charMap[key]
                maxChar = key
            }
        }
    }
    return `${maxChar}: ${max}`

}
console.log(maxChar('aaaaaaaabbccccddddd'))
*/

/* 
fizzbuzz
const fizbuz = function(n) {
    // divide by 3 is fiz and divid by 5 is buz, divid by both is fizbuz
    let result 
    if(n % 3 === 0&& n % 5 === 0) {
        return 'fizzbuzz'
    }else if (n % 3 === 0 && n % 5 !== 0) {
        return 'fizz'
    }else if (n % 3 !== 0 && n % 5 === 0) {
        return 'buzz'
    }
    return n 
}

console.log(fizbuz(15))
console.log(fizbuz(10))
console.log(fizbuz(6))
console.log(fizbuz(2))
*/ 


/*
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

const chunk = function(arr, size) {

    let newArr = []
    let lastChunk

    // for(let i = 0; i < arr.length; i +=size ) {
    //     if ((arr.length - i) <= size) {
    //         lastChunk = arr.slice(i, arr.length)
    //         newArr.push(lastChunk)
    //         break 
    //     } else {
    //         newArr.push(arr.slice(i, i + size))
    //     }
    // }

    // method 2 while loop
    // use while loop, as long as the index is less than arr length keep slice from the arr
    let index = 0
    while(index < arr.length) {
        newArr.push(arr.slice(index, index + size))
        index += size 
    }

    return newArr
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2))
*/

