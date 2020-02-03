
// solution include sorting uniqueChars array and remove from the largest occurence chars.
// to test it need to de comment and make some adjustment
// function removeCharsFromParagraoh(paragraph) {
//
//   let totalChars = paragraph.split(' ').join('');
//   console.log("totalChars's Length:", totalChars.length);
//
//   if (totalChars.length < 50) {
//     console.log("Paragraph charactors Length is less than 50 charractors. Can not proceed.")
//   } else {
//
//     let charsObj = {};
//
//     for (let i = 0; i < totalChars.length; i++) {
//       if ( charsObj[totalChars.charAt(i)] !== undefined ) {
//         charsObj[totalChars.charAt(i)] ++
//       } else {
//         charsObj[totalChars.charAt(i)] = 1
//       }
//     }
//
//     console.log("charsObj:",charsObj)
//
//     let charsObjKeys = Object.keys(charsObj)
//
//     // let charsDescendingArray = charsObjKeys.sort( (key1, key2) => {charsObj[key2] - charsObj[key1]})
//     // console.log(charsDescendingArray)
//
//     //sort out the unique set of charactors from chars string.
//     let uniqueCharsArray = charsObjKeys.filter(key => charsObj[key] === 1 )
//
//     console.log("uniqueChars:", uniqueCharsArray.length )
//
//
//     if (uniqueCharsArray.length === 0) {
//       console.log("There is no unique charactors in the paragraph.")
//     } else {
//
//       if (totalChars.length - uniqueCharsArray.length >= 50) {
//         console.log("Here is the larget unique Charactors can be removed:", uniqueCharsArray)
//       } else if (totalChars.length - uniqueCharsArray.length < 50) {
//         let removeCharsCount = totalChars.length - 50;
//         console.log("Here is the larget unique Charactors can be removed:", uniqueCharsArray.slice(removeCharsCount))
//       }
//
//       // let charsLength = totalChars.length;
//       // let subtractChars = [];
//       // subtract the unique set of charactors.
//
//       // while ( charsLength >= 50 && uniqueCharsArray.length ) {
//       //   let currentChar = uniqueCharsArray.pop();
//       //   charsLength --
//       //   if (charsLength >= 50) { subtractChars.push(currentChar)}
//       // }
//
//       // while ( charsLength >= 50 ) {
//         //   let currentChar = charsDescendingArray.pop();
//         //   let currentCount = charsObj[currentChar];
//         //   charsLength -= currentCount;
//         //   if (charsLength >= 50) { subtractChars.push(currentChar)}
//         // }
//         // console.log(subtractChars)
//
//     }
//   }
// }
