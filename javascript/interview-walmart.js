/*
1
Create a function named getLength
which takes a string as an argument and returns the length of the string.
For example:
getLength('foo') should return 3
getLength('hello') should return 5

const getLength = function(str) {
    return str.length;
}
console.log(getLength('hello'))
*/


/* 
Create a function named concatenate which takes two strings as arguments and returns a single string composed of those two strings without spaces.
For example:
concatenate('foo','bar') should return 'foobar'
concatenate('hello','world') should return 'helloworld'

const concatenate = function(str1, str2) {
    return str1.concat(str2)
}

console.log(concatenate('hello','world'))
*/

/*
Create a function named difference which takes two integers as arguments and returns the absolute value of the diff erence.
For example:
difference(1, 2) should return 1
difference(-5, 5) should return 10

const difference = function(int1, int2) {
    let result = Math.abs(int1 - int2); 
    return result;
}
console.log(difference(-5, 5))
*/

/* 
Create a function named isOdd which accepts an integer as an argument and returns true if the value is odd. An odd integer is not wholly divisible by two.
For example:
isOdd(4) should return false
isOdd(5) should return true

const isOdd = function(int) {
    if(int % 2 === 0) {
        return true; 
    }else {
        return false;
    }
}
console.log(isOdd(5))
*/

/*
Create a function named addTwo which takes an array of integers as an argument and returns an array where each value has been incremented by two.
For example:
addTwo([1, 2, 3]) should return [3, 4, 5]
addTwo([0, 0]) should return [2, 2]

const addTwo = function(arr) {
    let newArr = arr.map(el => el + 2)
    return newArr;
}

console.log(addTwo([1, 2, 3, 0, 0]))
*/

/*
Create a function named convertHexadecimal which takes as an argument a string representing a hexadecimal integer (base-16) and returns a decimal integer (base-10).
For example:
convertHexadecimal('10') should return 16
convertHexadecimal('af') should return 175

const convertHexadecimal = function(str) {
    return parseInt(str, 16);
}

console.log(convertHexadecimal('10'))
*/


/*
7
Create a function named onlyTruthy which takes as an argument an array of values and returns an array consisting of only those values which are truthy (equivalent to true).
For example:
onlyTruthy([false, true, true]) should return [true, true]
onlyTruthy([0, 1, '', 'a']) should return [1, 'a']

const onlyTruthy = function(arr) {
    let result = arr.filter(el => {
        if (el) {
            return el;
        }
    })
    return result;
}

console.log(onlyTruthy([0, 1, '', 'a', false, true]))
*/


/*
Create a function named sum which takes as an argument a non-empty array of integers and returns the sum of those integers.
For example:
sum([1, 2, 3]) should return 6
sum([0, 4, 4, 4]) should return 12

const sum = function(arr) {
    let result = arr.reduce((acc, el) => {
        return acc += el; 
    })
    return result; 
}
console.log(sum([0, 4, 4, 4, 4]))
*/

/*
9
Create a function named removeVowels which takes a string as an argument and returns that string with all vowels removed. Vowels are considered the following characters: a, e, i, o, u, A, E, I, O, U
For example:
removeVowels('Hello World') should return 'Hll Wrld'
removeVowels('FOOBAR') should return 'FBR'

const removeVowels = function(str) {
    let newStr = str.replace(/[a,e,i,o,u]/ig, '')
    // a callback also worked
    let newStr2 = str.replace(/[A,E,I,O,U]/ig, function(char) {
        return char = '';
    })
    console.log(newStr2)
    return newStr
}
console.log(removeVowels('Hel lo World'))
*/


/*
10
Create a function removeDuplicates which takes a non-empty array as a value and returns an array with only one copy of any of the original array's values.
For example:
removeDuplicates([0, 0, 1, 2, 2]) should return [0, 1, 2]
removeDuplicates(['a', 'a', 'a']) should return ['a']

const removeDuplicates = function(arr) {
    // if the el include in previous acc, do not do anything 
    let newArr = arr.reduce((acc, el) => {
        if(!acc.includes(el)) {
            acc.push(el)
            return acc;
        }
        return acc; 
    }, [])
    return newArr; 
}
console.log(removeDuplicates(['a', 'a', 'a', 'b', 'c']))
*/


/* 
Create a function named join which takes two arrays as argument and returns a single array consisting of all the values of those two arrays.
For example:
join([0, 1], [1, 2]) should return [0, 1, 1, 2]
join(['a', 'b'], ['c']) should return ['a', 'b', 'c']

const join = function(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(join(['a', 'b'], ['c']))
*/


/* 
Create a function named getLast which takes a non-empty array of unspecified length and returns the last element of the array.
For example:
getLast([1, 2, 3]) should return 3
getLast([9, 7, 5]) should return 5

const getLast = function(arr) {
    return arr[arr.length - 1]
}
console.log(getLast([9, 7, 5, 6]))
*/


/* 
13
Create a function named reverse which takes a non-empty array as an argument and returns a reversed array
without mutating the input.
For example:
reverse([1, 2, 3]) should return [3, 2, 1]
reverse([1, 0]) 2 should return [0, 1]

const reverse = function(arr) {
    let newArr = arr.reduce((acc, el) => {
        acc.unshift(el)
        return acc; 
    }, [])
    return newArr; 
}

console.log(reverse([1, 2, 3]))

*/


/* 
 Created a function named toArray which takes an unspecified number of arguments and returns an array with those arguments as values.
For example:
toArray(1, 2, 3) should return [1, 2, 3]
toArray('a') should return ['a']

const toArray = function(...args) {
    return args; 
}
*/

/*
15 Create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.
For example:
allGreaterThanThree(1, 3, 5) should return false
allGreaterThanThree(4, 6) should return true

const allGreaterThanThree = function(...args) {
    let res = args.every(el => {
        return el > 3
    })
    return res
}
*/

/* 
Create a function named anyGreaterThanThree which accepts an unspecified number of integer arguments and returns true if any passed argument is greater than 3.
For example:
anyGreaterThanThree(2, 3) should return false
anyGreaterThanThree10(2, 3, 4) should return true
*/
const anyGreaterThanThree10 = function(...args) {
    let res = false;
    args.forEach(el => {
        if(el > 3) { 
            res = true
        }})

    // every method
    // let res2 = args.every(el => {
    //     el <= 3
    // })
    // return !res2
    return res
}

/* 
17
Create a function named getValues which takes an object and returns an array of the enumerable property values of the object.
For example:
getValues({ a: 1, b: 2}) should return [1, 2]
getValues({ c: 'foo' }) should return ['foo']
*/
// An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method.

const getValues = function(obj) {
    // let result = [];
    // for(key in obj) {
    //     result.push(obj[key])
    // }
    let result = Object.values(obj)
    return result;
}

/* 
18 
Create a function named arity which takes a function as an argument and returns the number of defined arguments the function accepts.
For example:
If,
const add = (a, b) => a + b
const addOne = (a) => a + 1
Then,
arity(add) should return 2
arity(addOne) should return 1
*/

const arify = function(fn) {
    return fn.length
}

/*
Create a function called functionalize which takes a value and returns a function, which when executed, returns that value.
For example:
functionalize('a')() should return 'a'
functionalize(false)() should return false
*/

function functionalize(val) {
    // let newFun = () =>  {
    //     console.log(val)
    //     return val
    // }

    // non arrow function
    //shadowing - make 2 varaibles the same name 
    const newFun = function() { 
        return val
    }
    return newFun;
}

/* 
20
Create a function named compose which accepts an unspecified number of single-argument functions as arguments and returns a function which executes those functions from left to right.
For example:
If,
should return 8.

*/
const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

const compose = (...fns) => (val) => {
    let result = fns.reduce((acc, currentFn) => {
        return acc = currentFn(acc); 
    }, val)  
    return result
}

// console.log(compose(addOne, multiplyByTwo)(3)) 

/*
Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault
.
For example:
setDefault(72)(true) should return true
setDefault('foobar')(false) should return 'foobar'


const setDefault = (defaultV) => (val) => {
    return  function innerFn() {
        if (val === false) {
            return defaultV;
        } else {
            return true;
        }
    }
}

console.log(setDefault(72)(true)()); 
console.log(setDefault('foobar')(false)()); 

*/

/*
Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter. The function should return the value found after treating each string as a key traversing the object. If the path does not exist, the function should return undefined.
For example:
safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2
safelyTraverse({}, ['a', 'b']) should return undefined
*/


/*
Create a function named throwOn2 which accepts an integer as an argument and returns the integer if it is not 2. If it is 2, the function should throw an error with message "2 is not allowed."
For example:
throwOn2(3) should return 3
throwOn2(2) should throw an error and error.message should be "2 is not allowed"

const throwOn2 = function(int) {
    try {
        if(int === 2) {
            throw "2 is not allowd"
        } else {
            return int;
        }
    }
    catch(err) {
        return err
    }
}

console.log(throwOn2(3))
console.log(throwOn2(2))
*/


/*
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.
For example:
await promisify(2) should return 2
await promisify(3).then(val => val + 1) should return 4
*/

const promisifyValue = function(val) {
    let myPromise = new Promise(function(res, err) {
        if(val) {
            res(2);
        } else {
            err("There is an error")
        }
    })
}


/*
Create a function named promisifyFunction which takes a synchronous function
fn with an unspecifi ed argument signature as an argument and returns a function with the same argument signature that returns a promise which resolves to the output of fn with passed arguments.
For example:
If,
const add = (a, b) => a + b
const multiplyByTwo = (c) => c * 2
Then,
await promisifyFunction(add)(1, 1) should return 2
await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7
*/

/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

const solution = function(a) {
    let max = 0
    let current = 0

    for (i = 0; i < a.length; i ++) {
        if (a[i] > max) {
            max = a[i]
        }
    }
    // change above to compare the nextNum with the currentNum
    // if the next greater than current, max = current + 1

    return max
}
*/

/*

interview accessment by spot and tango
1. 
days of the week 
write  a function that, given a string S repsenting the day of the week and an integer k( 0 to 500), returns the day of the week that is K days later. 
for example, give s = 'Wed' and k - 2, the function return 'Fri'

function daysoftheWeek(s,k) {
    //convert the weekday into numbers, convert the sum back to the weekday
    // weekday => numbers => weekday
    
    let weekdaysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    
    // get the index of the week and add get the number
    let weekDayIndex = weekdaysArr.indexOf(s) + k

    // convert back to index. 7 days is a cycle
    let weekdaysArrIndex = weekDayIndex % 7
    let result = weekdaysArr[weekdaysArrIndex]
    return result
}

console.log(daysoftheWeek('Mon', 5))

*/

/*
2.
*/

// a strings' first char is digit, lower case of upper case, other chars. 
// need split the string to have the first one. 
// confition to meet one of the 4. 

function solution3(s) {
    let char = s.charAt(0)

    if(char.match(/^d/)) {
        return 'digit'
    }else if (char === char.lowerCase()) {
        return "lower"
    }else if (char === char.upperCase()) {
        return 'upper'
    }else {
        return 'other'
    }
}


/*
3.
*/

/*
4.
want to the minimul cost to remove duplicate
You are given a string S. Deletion of the K-th letter of S costs C(K). after deleting a litter, the costs of deleting other letters do not change. For example, for S='ab' and C=[1,3], after deleting 'a', deletion of 'b' will still cost 3. 
You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string? 
*/

function solution4(S, C) {

    let minCostSum = 0 
    for (i = 0; i < S.length; i ++) {
        let currentCharMaxCost = C[i]
        let currentCharSumCost = 0

        
        for (j = 0; j < S.length; j ++) {
            // match the current char with all the rest of duplciate chars. find the lowest cost 
            if (S[i] === S[j] && C[i] < C[j]) {
                // I need to keep the highest one and remove the rest of lower one. 
                // count the total currentCharCost and the highst cost 
                currentCharMaxCost = C[j]
                currentCharSumCost = C[j]
            } 
            // must remove the match char from string and its cost array
            if (S[i] === S[j]) {
                 

            }
        }
        // add the cost to the sum
        minCostSum += currentCharSumCost - currentCharMaxCost
    }

    return minCostSum; 

}


