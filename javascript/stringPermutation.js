// // // recursive solution:

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
//
//         var otherPermutations = getPermutations(otherChar);
//         // after recursive returned 3, it will concatenate with 2 in the j loop
//         // next i loop of 23, 2 will concatenate with 3.
//         for (var j = 0; j < otherPermutations.length; j++) {
//           results.push(firstChar + otherPermutations[j]);   // 2 + 3,
//         }
//
//       }
//       return results;     // results is 23, which concat with 1 in j loop.
//     }
//
//     // console.log(getPermutations('123'));
//     var permutation = getPermutations('1234')
//     console.log("Total permutation: "+permutation.length);
//     console.log(permutation);

    // might use following remove duplications.
    // var permutation2 = getPermutations('1234').filter((el, idx, self) => (self.indexOf(el) === idx));
    // console.log("Total permutation: "+permutation2.length);
    // console.log(permutation2);

//retest | recursive method

// function findPerms(str) {
//   if (str.length === 1) return [str]  //base case
//
//   let all = []
//   for (let i = 0; i < str.length; i++) {
//     const currentLetter = str[i]
//     const remainingLetters = str.slice(0,i) + str.slice(i+1)
//
//     const permsOfRemainingLetters = findPerms(remainingLetters)
//
//     // recursive function finally return wo and ow at the end of first loop.
//     // how permsOfRemainingLetters get the array??
//
//
//     // the following combine the first letter from avove with remain letters retured from recursive function, then push to all array.
//     permsOfRemainingLetters.forEach(subPerm => {
//       all.push(currentLetter + subPerm)
//     })
//   }
//
//   return all;
// }
//
// console.log(findPerms("TWO"))


// none recursive solution:

// function stringPermutation(str) {
//     let letters = str.split('');
//     let results = [[letters.shift()]];
//
//     while (letters.length) {
//         const currLetter = letters.shift()
//         let tmpResults = []
//         results.forEach(result => {
//             let rIdx = 0
//             while (rIdx <= result.length) {
//
//                 const tmp = [...result]
//                 tmp.splice(rIdx, 0, currLetter)
//                 tmpResults.push(tmp)
//                 rIdx++
//                 // debugger;
//             }
//         })
//         results = tmpResults
//     }
//
//     let finalResult = results
//       .map(letterArray => letterArray.join(''))
//       .filter((el, idx, self) => (self.indexOf(el) === idx))
//       .sort()
//     console.log(finalResult)
//
// }
//
// console.log(stringPermutation('123'))
