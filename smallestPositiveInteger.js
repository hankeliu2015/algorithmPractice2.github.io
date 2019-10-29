// function solution(A) {
//   const set = new Set(A);
//   let i = 1;
//   while (set.has(i)) {
//     i++;
//   }
//   return i;
// }

// // soltuion 2 - forEach not an ideal method. it only return undefined

// function solution(A) {
//
//   const numSet = new Set(A.filter(n => n > 0).sort((a, b) => a - b));
//
//   let counter = 1;
//   numSet.forEach(n => {
//     if (n !== counter) {
//       console.log('inside counter:', counter)
//       return counter
//     }
//     counter += 1;
//   });
//   return counter
// }

// solution 3
// function solution(A) {
//
//   let sorted = A.filter(a => {
//       return a > 0
//     })
//   .sort((a,b) => {
//       return a - b
//     })
//
//   let unique = sorted.filter((number,index)=> {
//       return number != sorted[index+1]
//   })
//
//   for(let i = 0; i <= unique.length; i ++){
//     if( i+1 != unique[i]){
//     return i+1
//     }}
// }
//
// console.log('Smallest Postive Interger is:', solution([1,9,7,2,3,5, 100]))

//foreach examples:

// const arraySparse = [1,3,,7];
// let numCallbackRuns = 0;
//
// arraySparse.forEach(function(element){
//   console.log(element);
//   numCallbackRuns++;
// });

// console.log("numCallbackRuns: ", numCallbackRuns);

// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }
// [2, 5, , 9].forEach(logArrayElements);

//filter method examples
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
//
// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
// };
//
// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']


//map object
// var myMap = new Map();
//
// var keyString = 'a string',
//     keyObj = {},
//     keyFunc = function() {};
//
// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');
//
// console.log(myMap); // 3


//prototype map

// var array1 = [1, 4, 9, 16];
//
// // pass a function to map
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);

// var numbers = [4, 9, 16];
// var roots = numbers.map(function(num) {
// return Math.sqrt(num)
// });
// console.log(roots)

//arrow function for callbacks

// class Event {
//     constructor(title, keywords) {
//         this.title = title;
//         this.keywords = keywords;
//     }
// }
//
// class User {
//     constructor(name, interests) {
//         this.name = name;
//         this.interests = interests;
//     }
//
//     matchInterests(event) {
//         return event.keywords.some(
//             function(word) {
//                 return this.interests.includes(word);
//             }.bind(this)
//         );
//     }
// }
//
// let billy = new User('billy', ['music', 'art', 'movies']);
// let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
//
// console.log(billy.matchInterests(freeMusic));
