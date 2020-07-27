// // // recursive solution:
// //
// /*
//               123
//       23      13       12
//     3   2   3   1     2   1
//
// */
// function getPermutations(string) {
//       var results = [];
//
//       if (string.length === 1)
//       {
//         results.push(string);
//         return results;          //base case
//       }
//
//       for (var i = 0; i < string.length; i++)
//       {
//         var firstChar = string[i];    //1
//         var otherChar = string.substring(0, i) + string.substring(i + 1); //23
//         var otherPermutations = getPermutations(otherChar);   // after recursive returned 3, it will concatenate with 2 in the j loop
//                                                               // next i loop of 23, 2 will concatenate with 3.
//         for (var j = 0; j < otherPermutations.length; j++) {
//           results.push(firstChar + otherPermutations[j]);   // 2 + 3
//         }
//
//       }
//       return results;
//     }

// console.log(getPermutations('123'));

//     // var permutation = getPermutations('1234').filter((el, idx, self) => (self.indexOf(el) === idx));
//     var permutation1 = getPermutations('123')
//     // console.log("Total permutation: "+permutation.length);
//     // console.log(permutation);
//     console.log("Total permutation: "+permutation1.length);
//     console.log(permutation1);

//retest | recursive method

function findPerms(str) {
  if (str.length === 1) return [str]

  let all = []
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i]
    const remainingLetters = str.slice(0,i) + str.slice(i+1)
    const permsOfRemainingLetters = findPerms(remainingLetters)
    // console.log(permsOfRemainingLetters);

    permsOfRemainingLetters.forEach(subPerm => {
      console.log(subPerm);
      all.push(currentLetter + subPerm)
    })
  }
  return all
}

console.log(findPerms("TWO"))


// // // none recursive solution:
// // //
// // // function stringPermutation(str) {
// // //     let letters = str.split('')
// // //       , results = [[letters.shift()]]
// // //     while (letters.length) {
// // //         const currLetter = letters.shift()
// // //         let tmpResults = []
// // //         results.forEach(result => {
// // //             let rIdx = 0
// // //             while (rIdx <= result.length) {
// // //                 const tmp = [...result]
// // //                 tmp.splice(rIdx, 0, currLetter)
// // //                 tmpResults.push(tmp)
// // //                 rIdx++
// // //             }
// // //         })
// // //         results = tmpResults
// // //     }
// // //
// // //     let finalResult = results
// // //       .map(letterArray => letterArray.join(''))
// // //       .filter((el, idx, self) => (self.indexOf(el) === idx))
// // //       .sort()
// // //
// // //     console.log(finalResult)
// // // }
// //
// // // let str = 'cats'
// // //

// rerest | failed

// function stringPermutation(str) {
//   // push re-ordered strings to array
//   let reOrder = [];
//   let tempStr = str;
//   let tempChar;
//   // outter loop pick one element to swap with each of the rest element of inner loop.
//   for (let i = 0; i < str.length; i++) {
//     // this part of the str stay the same for inner loop
//     temChar = str[i];
//     for (let j = i + 1; j < str.length - (i + 1); j++) {
//       // swap i char with the rest of the chars and push the new string to reOrder.
//       // swap the index of the string
//       // afterStr = str.slice(j + 1, str.length)
//       // tempStr = preStr + str[j] + afterStr;
//       // use over write instead of concat, char[i] become char[j]
//       // the rest of the string are the same.
//       // repalce char[i] with char[j] without change the str.
//       tempStr.replaceAt(i, )
//
//     }
//   }
// }
//
// console.log(stringPermutation("cats"))
