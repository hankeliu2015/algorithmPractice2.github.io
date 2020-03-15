// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//
//     for (let i = 0; i < str.length; i++) {
//
//         // If character is an opening brace add it to a stack
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//         else {
//             let last = stack.pop();
//
//             //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//             if (str[i] !== map[last]) {return false}; // this statement handle the mismach. map is hash value pairs, and last acting as the key. if they not equal, there is a mismath on the brackets.
//         }
//     }
//     // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//         if (stack.length !== 0) {return false};
//         // this means there is opening or closing bracket saved in the stack.
//
//     return true;
// }

// balancedBracket
// if ( , add it to the stack .
// if ) , pop it out of the stack,
// counting the stack length and return the value

// isMatchingBrackets(s) {
//     let stack = [];
//     let bCounter = 0;
//     let cCounter = 0;
//
//     for (let i = 0; i < s.length; i++) {
//
//         if (s[i] === '(' ) {
//             bCounter ++
//         } else if (s[i] === ')') {
//           cCounter ++
//         }
//     }
//
//     console.log(Math.abs(bCounter-cCounter))
// }

// function isMatchingBrackets(s) {
//     let finalS = s;
//
//     for (let i = 0; i < s.length; i++) {
//
//       if (s[i] === '(' ) {
//
//         // compare with the rest of the string. if there is another ) take then both out the finalS string.
//         // can not take the char out of the string and keep comparing the rest.
//
//         for (let j = i+1; j < s.length; j ++) {
//           if (s[j] === ')') {
//             // console.log("test")
//           }
//         }
//       }
//     }
//     console.log(finalS.length)
// }
//
// function getMin(s) {
//   let stack = [];
//       let bCounter = 0;
//       let cCounter = 0;
//
//       for (let i = 0; i < s.length; i++) {
//
//           if (s[i] === '(' ) {
//               bCounter ++
//           } else if (s[i] === ')') {
//             cCounter ++
//           }
//       }
//
//       return Math.abs(bCounter-cCounter)
//   }

// function isMatchingBrackets(s) {
//     let stack = [];
//     let counter = 0;
//     let ops = 0;
//
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(') {
//         stack.push(s[i]);
//       } else if (s[i] === ')' && stack.length > 0) {
//         stack.pop();
//         counter ++;
//       }
//     }
//
//     ops = s.length - (counter * 2)
//
//     return ops
// }
//
// console.log(isMatchingBrackets("()))"))
// console.log(isMatchingBrackets("()))(("))
