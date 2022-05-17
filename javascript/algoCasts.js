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
const fizzbuzz = function(n) {
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

// another one with different output requirements
const fizzbuzz = function(n) {
    // add a loop from 1 to n
    for(let i = 1; i <= n; i ++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        }else if (i % 3 === 0 && i % 5 !== 0) {
            console.log('Fizz')
        }else if (i % 3 !== 0 && i % 5 === 0) {
            console.log('Buzz')
        }else {
            console.log(i)
        }
    }
}

console.log(fizzbuzz(15))
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

/* 
anagrams 
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagram = function(str1, str2) {
    // filter the strings to remove none chars 
    let newStr1 = str1.replace(/\W/, '').toLowerCase()
    let newStr2 = str2.replace(/[^\w]/g, '').toLowerCase()

    // create a dictionary helper function
    const dictionary = function(str) {
        return str.split('').reduce((acc, el) => {
            // acc[el] = acc[el] ? (acc[el] + 1) : 1
            acc[el] = acc[el] + 1 ||  1
            return acc
        }, {})
    }
    // create a object for chars for both strings
    let obj1 = dictionary(newStr1), obj2 = dictionary(newStr2)

    // compare both dics key length. then, compare the values.
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    } else {
        // compare each key value with for in loop 
        let valueComp = true; 
        for(let key in obj1) {
            if(obj1[key] !== obj2[key]) {
                valueComp = false;
            }
        }
        return valueComp
    }
}

console.log(anagram('a b', 'b a'))
console.log(anagram('a B', 'b A'))
console.log(anagram('a B c', 'b A'))
console.log(anagram('rail safety', 'fairy tales'))
console.log(anagram('Hi there', 'Bye there'))
*/

/*
capitalization 
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
const capitalization = function(str) {
    // split the string into phases, each word first char set with toUpperCase()
    let arr = str.split(' ')
    // loop through each word el to set uppper case for the first char
    let newArr = arr.map((el) => {
        return el[0].toUpperCase() + el.slice(1)
    })
    // combine the array into a string with space
    return newArr.join(' ')
}

console.log(capitalization('a short notice'))
console.log(capitalization('a very very short notice'))
*/

/* 
print steps
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = function(n) {
    // there is a numer, there will be a row
    // 2 will be 2 rows
    // column is increament from 1 to n. 
    // iteration on the row 
    // each row, print i times of #
    // print multi times of the char? repeat()
    // for(i = 0; i < n; i ++) {
    //     console.log("#".repeat(i + 1) + '.'.repeat(n-i))
    // }

    // not allow repeat method 
    // concat a string for each row, ### + ... 
    // need a loop for column and an outter loop for the rows 
    
    for (let i = 0; i < n; i ++) {
        //the inner loop create a string of # and dots
        let steps = ''
        for (let j = 0; j < n; j ++) {
            // if j less equal than i, step is #. 
            // else step is dot
            if ( j <= i) {
                steps = steps.concat('#')
            } else {
                steps = steps.concat('.')
            }
        }
        // print out the steps just created
        console.log(steps)
    }
}
console.log(steps(4))
*/


/* 
recursive solution for above

const steps = function(n, row = 0, stair = '') {
    //base case is at row equal to n. return to end the function 
    if (row === n) {
        return 
    }
    // steps.length equal to n is the end of row
    if (stair.length === n) {
        console.log(stair)
        return steps(n, row + 1)
    }
    // on the same row 
    if(stair.length <= row) {
        stair.concat('#')
    } else {
        stair.concat('.')
    }
    steps(n, row, stair)
}
// console.log(steps(8))
*/

/*
Pyramid steps - skip
*/
/*
vowels
*/
/*
spiral matrix
*/

/*
Fibonacci series
[1,2,3,5,8,13,21]

const fib = function(n) {
    // create a loop, n times to get the values 
    let result = []
    for (i = 1; i <= n; i ++) {
        // this is a test from 0 not from 1. 
        // need conditions for 1 and 2. 
        if(i === 1 || i === 2) {
            result.push(i)
        } else {
            result.push(result[i - 2] + result[i - 3])  // i start from 1 not 0. 
        }
    }
    return result

    // recursive method 
    // if(n < 2) {
    //     return n
    // }
    // return fib(n-1) + fib(n - 2)
}

console.log(fib(6))
*/

/* 
skipped node and linkedlist 
*/

/* 
binary search tree 
*/

