//
// // set conditions without mentioned in code challenge
// // space is not count as characters.
// // choose console log as output format
//
// // Split paragraph by space and combine chars into a string.
// // convert chars string into object, set key/value as char/occurence.
// // seperate the unique characters and store them into an array
//
// // apply conditions total characters length and unique chars array length on the output.
//
// // x is the all characters and y is the unique characters, w is the larget unique set of chararctors can be removed.
// //when x - y >= 50, all elements of w can be removed
// // when x - y < 50, (x - 50) elements of w can be removed
//
//
// let p1 = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'
//
// let p2 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//
// let p3 = "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum + - ) ( ! @ # $ % ^ & / ? > < . "
//
// let p4 = " dolor Lorem ipsum + - ) ( ! @ # $ . "
//
// let p5 = "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum Lorem ipsum abcf"

// function removeCharsFromParagraph(paragraph) {
//
//   let totalChars = paragraph.split(' ').join('');
//
//   if (totalChars.length < 50) {
//     console.log("Paragraph characters Length is less than 50 charractors. Can not proceed.")
//   } else {
//     let charsObj = {};
//     for (let i = 0; i < totalChars.length; i++) {
//       if ( charsObj[totalChars.charAt(i)] !== undefined ) {
//         charsObj[totalChars.charAt(i)] ++
//       } else {
//         charsObj[totalChars.charAt(i)] = 1
//       }
//     }
//
//     let charsObjKeys = Object.keys(charsObj)
//
//     let uniqueCharsArray = charsObjKeys.filter(key => charsObj[key] === 1 )
//
//     if (uniqueCharsArray.length === 0) {
//       console.log("There is no unique characters in the paragraph.")
//     } else {
//       if (totalChars.length - uniqueCharsArray.length >= 50) {
//         console.log("Here is the largest unique Charactors can be removed:", uniqueCharsArray)
//       } else if (totalChars.length - uniqueCharsArray.length < 50) {
//         let removeCharsCount = totalChars.length - 50;
//         console.log("Here is the largest unique Charactors can be removed:", uniqueCharsArray.slice(removeCharsCount))
//       }
//     }
//   }
// }
//

// re-test
// split and rejoin the paragraph
// convert the chars to object key and value as occurence.
// store the unique chars into an array.
// set conditions:
//if all chars less than 50, nothing removed.
// if allchars minus unique chars greater than 50, unique chars all can be removed.
// if allchars minus unique chars less than 50, the reminder of all chars - 50 is the unique chars can be removed.

// function removeCharsFromParagraph(p) {
//   let allChars = p.split(' ').join('');
//   let allCharsObj = {};
//
//   for(i = 0; i < allChars.length; i++) {
//     if(!allCharsObj[allChars[i]] === true) {
//       allCharsObj[allChars[i]] = 1;
//     }else {
//       allCharsObj[allChars[i]] += 1;
//     }
//   }
//
//   let uniqueChars = Object.keys(allCharsObj).filter(key => allCharsObj[key] === 1)
//   let allCharsLength = allChars.length;
//   let uniqueCharsLength = uniqueChars.length;
//
//   if (allCharsLength <= 50) {
//     console.log("No chars can be removed")
//   } else if (allCharsLength - uniqueCharsLength > 50 ) {
//     console.log(`largest unique set of characters that can be removed is: ${uniqueCharsLength}`)
//   } else if (allCharsLength - uniqueCharsLength <= 50 ) {
//     console.log(`largest unique set of characters that can be removed is: ${allCharsLength - 50}`)
//   }
// 
// }

// removeCharsFromParagraph(p1)
// removeCharsFromParagraph(p2)
// removeCharsFromParagraph(p3)
// removeCharsFromParagraph(p4)
// removeCharsFromParagraph(p5)
