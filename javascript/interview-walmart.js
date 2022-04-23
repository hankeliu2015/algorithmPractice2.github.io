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
    let argNum = fn.length
    return argNum 
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
const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;
Then,
compose2(addOne, multiplyByTwo)(3) should return 8.
*/

const compose = (...fns) => (val) => {
    let result = fns.reduce((acc, currentFn) => {
        return acc = currentFn(acc); 
    }, val)  
    return result
}

/*
Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault
.
For example:
setDefault(72)(true) should return true
setDefault('foobar')(false) should return 'foobar'
*/

const setDefault = function(val) {
    // create a interanl function here. 
}

/*
Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter. The function should return the value found after treating each string as a key traversing the object. If the path does not exist, the function should return undefi ned.
For example:
safelyTraverse({ fi rst: { second: 2 } }, ['fi rst', 'second']) should return 2
safelyTraverse({}, ['a', 'b']) should return undefi ned
*/

/*
Create a function named throwOn2 which accepts an integer as an argument and returns the integer if it is not 2. If it is 2, the function should throw an error with message "2 is not allowed."
For example:
throwOn2(3) should return 3
throwOn2(2) should throw an error and error.message should be "2 is not allowed"
Answer given:
function throwOn2(int) {
throw()
}
Words: 5
*/

/*
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.
For example:
await promisify(2) should return 2
await promisify(3).then(val => val + 1) should return 4
*/

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