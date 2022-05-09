/*
1
Create a function named getLength
which takes a string as an argument and returns the length of the string.
For example:
getLength('foo') should return 3
getLength('hello') should return 5

const getLength = (str) => { return str.length}
console.log(getLength('hello'))
*/


/* 
2
Create a function named concatenate which takes two strings as arguments and returns a single string composed of those two strings without spaces.
For example:
concatenate('foo','bar') should return 'foobar'
concatenate('hello','world') should return 'helloworld'

const concatenate = (str1, str2) => str1.concat(str2)

console.log(concatenate('hello','world'))
*/

/*
3
Create a function named difference which takes two integers as arguments and returns the absolute value of the diff erence.
For example:
difference(1, 2) should return 1
difference(-5, 5) should return 10

const difference = function(int1, int2) {
    return Math.abs(int2 - int1); 
}
console.log(difference(-5, 5))
*/

/* 
4
Create a function named isOdd which accepts an integer as an argument and returns true if the value is odd. An odd integer is not wholly divisible by two.
For example:
isOdd(4) should return false
isOdd(5) should return true

const isOdd = (int) => (int % 2 === 0) ? true : false
console.log(isOdd(6))
*/

/*
5
Create a function named addTwo which takes an array of integers as an argument and returns an array where each value has been incremented by two.
For example:
addTwo([1, 2, 3]) should return [3, 4, 5]
addTwo([0, 0]) should return [2, 2]

const addTwo = (arr) => arr.map(el => el + 2)

console.log(addTwo([1, 2, 3, 0, 2]))
*/

/*
6
Create a function named convertHexadecimal which takes as an argument a string representing a hexadecimal integer (base-16) and returns a decimal integer (base-10).
For example:

convertHexadecimal('10') should return 16
convertHexadecimal('af') should return 175
const convertHexadecimal = function(str) { return parseInt(str, 16); }

console.log(convertHexadecimal('af'))
*/

/*
7
Create a function named onlyTruthy which takes as an argument an array of values and returns an array consisting of only those values which are truthy (equivalent to true).
For example:
onlyTruthy([false, true, true]) should return [true, true]
onlyTruthy([0, 1, '', 'a']) should return [1, 'a']

const onlyTruthy = function(arr) {
    return arr.filter(el => el ? el : false)
}

console.log(onlyTruthy([0, 1, '', 'a', false, true]))
*/


/*
8
Create a function named sum which takes as an argument a non-empty array of integers and returns the sum of those integers.
For example:
sum([1, 2, 3]) should return 6
sum([0, 4, 4, 4]) should return 12

const sum = function(arr) {
    return arr.reduce((acc, el) => {
        return acc += el; 
    })
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
    // a callback also worked
    let newStr2 = str.replace(/[A,E,I,O,U]/ig, function(char) {
        return char = '';       //without return , will got undefined inside the chars returned
    })
    console.log(newStr2)
    
    return str.replace(/[a,e,i,o,u]/ig, '')
}
console.log(removeVowels('Hel lo World'))
console.log(removeVowels('foo bar'))
*/

/*
10
Create a function removeDuplicates which takes a non-empty array as a value and returns an array with only one copy of any of the original array's values.
For example:
removeDuplicates([0, 0, 1, 2, 2]) should return [0, 1, 2]
removeDuplicates(['a', 'a', 'a']) should return ['a']
const removeDuplicates = function(arr) {
    // if the el include in previous acc, do not do anything 
    // return arr.reduce((acc, el) => {
    //     if(!acc.includes(el)) {
    //         acc.push(el)
    //         return acc;
    //     }
    //     return acc; 
    // }, [])

    return arr.filter((el, pos) => {
        if(arr.indexOf(el) === pos) {
            return el
        }
    })

}
console.log(removeDuplicates(['a', 'a', 'a', 'b', 'c','c']))
*/


/* 
11
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
12
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
    return  arr.reduce((acc, el) => {
        acc.unshift(el)
        return acc; 
    }, [])
}

console.log(reverse([1, 2, 3, 4]))
*/


/* 
14
 Created a function named toArray which takes an unspecified number of arguments and returns an array with those arguments as values.
For example:
toArray(1, 2, 3) should return [1, 2, 3]
toArray('a') should return ['a']

const toArray = function(...args) {
    return args; 
}
const toArray2 = function() {
    return Array.from(arguments); 
}
console.log(toArray("abd", 1,2,3, "def"))
console.log(toArray2("abd", 1,2,3, "def"))
*/

/*
15 Create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.
For example:
allGreaterThanThree(1, 3, 5) should return false
allGreaterThanThree(4, 6) should return true

const allGreaterThanThree = function(...args) {
     return args.every(el => el > 3)
    }
console.log(allGreaterThanThree(1,3,5))
console.log(allGreaterThanThree(4,5))

*/

/* 
16
Create a function named anyGreaterThanThree which accepts an unspecified number of integer arguments and returns true if any passed argument is greater than 3.
For example:
anyGreaterThanThree(2, 3) should return false
anyGreaterThanThree10(2, 3, 4) should return true

const anyGreaterThanThree10 = function(...args) {
    let res = false;
    args.forEach(el => {
        if(el > 3) { 
            res = true
        }})
        
    return res
    // make a negative every method
    // let res2 = args.every(el => {
    //     el <= 3
    // })
    // return !res2
}
*/

/* 
17
Create a function named getValues which takes an object and returns an array of the enumerable property values of the object.
// (An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method.)

For example:
getValues({ a: 1, b: 2}) should return [1, 2]
getValues({ c: 'foo' }) should return ['foo']

const getValues = function(obj) {
    // let result = [];
    // for(key in obj) {
    //     result.push(obj[key])
    // }
    let result = Object.values(obj)
    return result;
}
*/

/* 
18 
Create a function named arity which takes a function as an argument and returns the number of defined arguments the function accepts.

For example:
If,
Then,
arity(add) should return 2
arity(addOne) should return 1
const add1 = (a, b) => a + b
const addOne1 = (a) => a + 1

const arify = function(fn) {
    return fn.length
}

console.log(arify(add1))
console.log(arify(addOne1))
*/

/*
19
Create a function called functionalize which takes a value and returns a function, which when executed, returns that value.
For example:
functionalize('a')() should return 'a'

function functionalize(val) {
    // let newFun = () =>  {
    //     return val
    // }

    // non arrow function
    //shadowing - make 2 varaibles the same name 
    return function() { 
        return val
    }
}

console.log(functionalize('a')())
console.log(functionalize(false)())
functionalize(false)() should return false
*/

/* 
20
Create a function named compose which accepts an unspecified number of single-argument functions as arguments and returns a function which executes those functions from left to right.
For example:
If,
const addOne = (a) => a + 1
const mulitiplyByTwn = (b) => b * 2

compose(addOne, multiplyByTwo), should return 8.

const addOne = (a) => a + 1;
const addTwo = (a) => a + 2;
const multiplyByTwo = (b) => b * 2;

const compose = (...fns) => (val) => {
    let result = fns.reduce((acc, currentFn) => {
        return acc = currentFn(acc); 
    }, val)  
    return result
}

console.log(compose(addOne, multiplyByTwo)(3)) 
console.log(compose(addTwo, multiplyByTwo)(3)) 
*/

/*
21
Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault
.
For example:
setDefault(72)(true) should return true
setDefault('foobar')(false) should return 'foobar'

const setDefault = (defaultV) => {
    return  function innerFn(truthyArg) {
        if (truthyArg === false) {
            return defaultV;
        } else {
            return true;
        }
    }
}

console.log(setDefault(72)(true)); 
console.log(setDefault('foobar')(false)); 

*/

/*
22 - need debugging 
Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter. The function should return the value found after treating each string as a key traversing the object. If the path does not exist, the function should return undefined.
For example:
safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2
safelyTraverse({}, ['a', 'b']) should return undefined
*/

// loop througth the string array
// if the obj(el) are all false return undefined. 

// if one obj(el) is true, return the value till the last key pair. 
const safelyTraverse = (obj, arr) => {
    // let currentVal; 
    // if (typeof(obj[arr[0]]) === 'undefined') {
    //     currentVal = undefined  //base case
    // } else if (typeof(obj[arr[0]]) === 'number') {
    //     currentVal = obj[arr[0]]  //base case
    // }  else if (typeof(obj[arr[0]]) === 'object') {
    //     currentVal = obj[arr[0]]
    //     debugger;
    //     safelyTraverse(obj[arr[0]], arr.slice(1))
    // }
    // return currentVal;
    
    // try a for in loop for the object traversing 
    // use the arry for of loop, using the object key inside to get the value. 
    // need a condition to decide if the loop need to end 
    let currentObj = undefined;
    for(el of arr) {
       // if  obj[el] is an object, use current object keep traversing 
        if (typeof(obj[el] === 'object')) {
            currentObj = obj[el]
        }
        // if currentObj is a number, return the number 
        if (typeof[obj[el]] === 'number') {
            currentObj = obj[el]
        }
    }
    return currentObj;
}

// console.log(safelyTraverse({ first: { second: 2 } }, ['first', 'second']))
// console.log(safelyTraverse({}, ['a', 'b']))



/*
23
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
24
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.
For example:
await promisify(2) should return 2
await promisify(3).then(val => val + 1) should return 4

const promisifyValue = function(val) {
    return new Promise(function(res, rej) {
        if(val) {
            res(val);
        } else {
            rej(Error("no input value"))
        }
    })
}
*/
async function promisifyValue(val) {
    let myPromise = new Promise(function(res, rej) {
        if(val) {
            console.log(val)
            res(val);
        } else {
            rej(Error("no input value"))
        }
    })

    let data = await myPromise
    return data
}

// console.log(promisifyValue(2))  //return the promise not the value
// console.log(promisifyValue(3).then(val => val + 1))

/*
25 
Create a function named promisifyFunction which takes a synchronous functionfn with
 an unspecified argument signature as an argument and returns a function with the same argument
  signature that returns a promise which resolves to the output of fn with passed arguments.
For example:
If,
const add = (a, b) => a + b
const multiplyBy2 = (c) => c * 2
Then,
await promisifyFunction(add)(1, 1) should return 2
await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7
*/

const add = (a, b) => a + b; 
const multiplyBy2 = (c) => c * 2

function takeInFn(fn) {
    return fn
}

async function promisifyFunction(fn) {
    // take in an function
    // return this fun which could take in ...args
    // need await promise somewhere. 
    const myPromise = function(fn) {
        return new Promise((res, rej) => {
            if(fn) {
                res(fn)
            } else {
                rej(Error("no valid function"))
            }
        })
    }

    let result = await myPromise
    return result                   //only return the function, not invoke it. 
}



// console.log(promisifyFunction(add)(1,1))
// console.log(promisifyFunction(multiplyBy2)(3).then(val => val +1))
// console.log(takeInFn(add)(1,1))
// console.log(takeInFn(multiplyBy2)(3).then(val => val +1))

/*
await review 

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

console.log(f1())

async function f2() {
    const thenable = {
      then: function(resolve, _reject) {
        resolve('resolved!')
      }
    };
    console.log(await thenable); // resolved!
  }
  
f2()

async function f3() {
    var y = await 20;
    console.log(y); // 20
  }
  
  f3();
*/

// console.log(promisifyFunction(add).then(fn => fn(1, 1)))
// console.log(promisifyFunction(multiplyBy2).then(fn=> fn(3)).then(val=>val +1))
//=================
/*
sample question. Write a function:
function solution(A); that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

const missingMinValue = function(a) {
    let minValue;
    let currentMin;
    let maxEl; 

    for (i = 0; i < a.length - 1; i ++) {
        // they all equal. get the maxEl and minValue
        if(a[i+1] === a[i]) {
            minValue ??= a[i] + 1
            maxEl ??= a[i]
        }
        // find smaller one between 2 els to get the currentMin
        if(a[i+1] > a[i]) {
            maxEl = a[i+1];     //need to get the max when els in a squence
            if((a[i + 1] - a[i]) > 1) {
                currentMin = a[i] + 1
            }
        }

        if (a[i+1] < a[i]) {
            maxEl = a[i]; 
            if((a[i] - a[i + 1]) > 1) { 
                currentMin = a[i + 1] + 1; 
            }
        } 

        // if  the intitial minValue is null, assign the currentMin
        if(!minValue) { minValue = currentMin}
        //compare the currentMin and minValue
        if(minValue > currentMin) {
            minValue = currentMin;
        }
    }

    //if all els value are in a sequal, the minValue is the largest one plus one 
    if (!minValue) { 
        minValue = maxEl + 1;
     }

    return minValue <= 0 ? 1 : minValue
}
/*
console.log(missingMinValue([1,1,2,3,6,9,100,300]))
console.log(missingMinValue([6,2,4,10, 100, 50, 1000]))
console.log(missingMinValue([1,2,3,4]))
console.log(missingMinValue([4,3,2,1]))     //wrong output
console.log(missingMinValue([-4,3,-2,1]))   //wrong output
console.log(missingMinValue([-1,-2,-3,-4]))
console.log(missingMinValue([-4,-2,-1,-3]))

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
a strings' first char is digit, lower case of upper case, other chars. 
condition to meet one of the 4. 
testing your regex skills

function firstCharType(s) {
    let char = s.charAt(0)

    if(char.match(/^\d/)) {
        return 'digit'
        //the first char need match [a-z] or [A-Z] 
    }else if ( char.match(/^[a-z]/)) {
        return "lower"
    }else if (char.match(/^[A-Z]/)) {
        return 'upper'
    }else {
        return 'other'
    }
}
console.log(firstCharType('2fadfsfafas'))
*/

/*
3. SQL query syntax
*/

/*
4.
want to the minimal cost to remove duplicate
You are given a string S. Deletion of the K-th letter of S costs C(K). after deleting a litter, the costs of deleting other letters do not change. For example, for S='ab' and C=[1,3], after deleting 'a', deletion of 'b' will still cost 3. 
You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string? 
Write a function return the minimum cost of all necessary deletions
example: given S="abccbd" and c= [1,2,3,4,5], the function should return 3, you can delete the first "c" to get 'abcbd'
give s = 'aaaa' and c=[3,4,5,6], should return 12. you need to delete  all but one letter 'a'. 
*/

function minDeleteCost(S, C) {

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
            // must remove the match char from string and its cost array ? 
            if (S[i] === S[j]) {
                 
            }
        }
        // add the cost to the sum
        minCostSum += currentCharSumCost - currentCharMaxCost
    }
    return minCostSum; 
}


/*
code test with Drissly 
*/

/*
sample 
// You are given a two-digit integer n. Return the sum of its digits.
// convert the number to string, split the string into chars, iterate the string with for loop, add them up during the iteration. 
For n = 29, the output should be
solution(n) = 11.
*/

/*
1
Given an array of integers a, calculate how many numbers in the array are equal to the arithmatic mean of their immediate neighbors. a[i] = (a[i+1] + a[i-1]) / 2. If a[i - 1] or a[i + 1] no exists, they should be considered equal to 0. 

example: a [2,4,6,6,3], the output should be 3. 

function arithMeanMatch(a) {
    let counter = 0
    for (i = 0; i < a.length; i++) {
        let current = a[i]
        let previous = a[i - 1] || 0
        let next = a[i + 1] || 0
        
        if((previous + next)/2 === current){
            counter ++
        }
    }
    return counter
}

console.log(arithMeanMatch([2,4,6,6,3]))
*/

/*
2
a string s split into the minimum possible number of increasing substrings. it is case sensitive. b is next for a, but C is not next for b. return an array of these substrings. 
example "ABCDEFFDEfghCBA"
the last edge case with a single char string is not passed. 

function minIncreasingSubStr(s) {
    let previousIndex = 0; 
    let newStrArr = [];

    for (i = 0; i < s.length; i ++) {
        if (s.length === 1) {
            newStrArr.push(s[0])
            break
        }
        if(s[i + 1].charCodeAt() - s[i].charCodeAt() === 1 ) {
            //if the next char is increasing, previouseIndex no need to change
            previousIndex = previousIndex   
            
            // edge case condition for the last char 
            if(i + 1 === s.length - 1) { 
                
                // if i + 1 reach the last index. break the loop. 
                // one conditon is if  the last char is part of previous increasing .  no need run the next loop. 
                newStrArr.push(s.slice(previousIndex))   // the last char index can skip
                break
                 }
        } else {
            // when the increasing stopped. slice the string, push the substring to the newStrArr. 
            newStrArr.push(s.slice(previousIndex, i + 1))
            previousIndex = i + 1
            //edge case condition for the last char. when the last char is not part of any increasing. just push the last char to the newStrArr
            if(i + 1 === s.length - 1) { 
                newStrArr.push(s[i+1])
                break
                 }
        }
    }
    return newStrArr
}

console.log(minIncreasingSubStr('ABCDEFFDEfghCBA'))
console.log(minIncreasingSubStr('TuVwXYZ'))
console.log(minIncreasingSubStr('ZA'))
console.log(minIncreasingSubStr('T'))

*/

/*
Optimal UI Test
3. count duplicated eleements [1,3,3,4,4,4,4] return 2

const countDup = function (arr) {
    //loop over the array and compare each el with occurance
    // delare a charObj 
    // filter out the charObj value greater than 1
    let counter = 0
    let charObj = arr.reduce((acc, el) => {
        acc[el] = acc[el] + 1 || 1
        if (acc[el] === 2) { counter = counter + 1 }    // no need loop though the charObj again 
        return acc
    }, {})

    // for(let key in charObj) {
    //     if (charObj[key] > 1) {
    //         counter ++
    //     }
    // }
    return counter
}

console.log(countDup([1,3,3,4,4,4,5,5,6]))
*/


/*
2.

the five reset api contains info about a stocks 
given a data in the format d-mmmm-yyyy, you have to makea  GET call to the given API to get the stock info for this date. 

API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
example: https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000 
note: the date passed to the url must not have any leading zeros.

the response is a json with the following 5 fields

page: the current page of the results
per_page: the max number of the resultes returned per page
total: the total number of the results. 
data: either an empty array or an array with single object containing the stock record with the following schema: date, open, high, low, close 

example: 
{
    'date': "5-January-2000", 
    'open': 5265.99, 
    'high': 5464.35, 
    'low': 5184.48, 
    'close': 5357
}

note: page 1 is the default page returned on teh API hit. no further page hits are required. 

function description: 
returns: 
a promise that resolved with the stock record object; in the case of an empty array result, the promise resolves with an empty object. 

YOu implementation of the funciton will be tested by a stubbed code on the server input files. each input file contains a date parameter for the functions call. the function getStockInformation will be called with this parameter, and the result of their execution will be printed to the standard output by the provided code. 
The stubbed code prints the open, high, low, and close values of the stock as returned by API. In case the function resolves the promise with an empty object, the subbed code prints 'No Results Founds'. 

sample input:
5-January-2000

sample output:  
Open: 4116.34
High: 4195.01
Low: 4115.35
Close: 4183.73

the output prints the open, high, low and close values of the stock from the API. 

async function getStockInformation(date) {

    let response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
    
    if (!response) {
        throw new Error("Request error: ${response.status")
    }

    let currentStockRes = await response.json()
    let dataObj = currentStockRes.data[0]
    if (dataObj === []) {
        throw new Error('No Results Founds')
    }

    // I might need an array for the output result. 
    let result = {'Open': 0, 'High': 0, 'Low': 0, 'Close':0 }

    result.Open = dataObj.open
    result.High = dataObj.high
    result.Low = dataObj.low
    result.Close = dataObj.close

    for(let key in result) {
        let firstCharUpper = key.charAt(0).toUpperCase() + key.slice(1)
        // assign the value to the resultObject
        console.log(`${key}: ${result[key]}`)
    }

    let printResult = `
        Open: ${result.Open}
        High: ${result.High}
        High: ${result.Low}
        High: ${result.Close}
    
    `
    // console.log(result)
    return printResult 

}

console.log(getStockInformation('5-January-2000'))
*/

/*
Drizly pair-up interview

function getTopProductsForStore
get a list of stores, a list of orders for various stores, and a list of products sold, return the top selling product for a given store 
storeId - the uniqure store identifier 
example: 
getTopProductsForStore(1) 
return: 
{productId: 201, type: "beer', name: "Same Adams Boston Lager}

const stores = [{storeId: 1}, {storeId: 2}, {storeId: 3}]
const orders = [
    {orderId: 100, storeId: 1, productId: 201}, 
    {orderId: 101, storeId: 2, productId: 202}, 
    {orderId: 102, storeId: 1, productId: 202}, 
    {orderId: 103, storeId: 1, productId: 201},
    {orderId: 104, storeId: 3, productId: 203},
    {orderId: 105, storeId: 3, productId: 203}
]; 
const products = [
    {productId: 201, productType: 'beer', name: 'Sam Adams Boston Lager'}, 
    {productId: 202, productType: 'wine', name: 'Barefoot Pinot Grigio'}, 
    {productId: 203, productType: 'liquor', name: 'Titos Vodas'}, 
]

const getTopProductsForStore = function(id) {
    // find all the products ordered from that store
    let ordersObj = {}
    let maxProdId = 0   // declare it as a number. 
    let maxVal = 0
    
    //filter out all products sold from one store
    //create a map object for each product sold
    // find the max value of the product id 
    orders.filter(el => el.storeId === id).forEach(el => {
        ordersObj[el.productId] = ordersObj[el] + 1 || 1
        if(maxVal < ordersObj[el.productId]) {
            maxProdId = el.productId 
            maxVal = ordersObj[el.productIdy]
        }
    })

    // get the prodId with the maxValue from the ordersObj
    // for(let key in ordersObj) {
    //     if(maxVal < ordersObj[key]) {
    //         maxProdId = key 
    //         maxVal = ordersObj[key]
    //     }
    // }

    // return products.filter(el => el.productId === parseInt(maxProdId))[0]
    return products.filter(el => el.productId === maxProdId)[0]

}
console.log(getTopProductsForStore(1))
console.log(getTopProductsForStore(2))
console.log(getTopProductsForStore(3))
*/