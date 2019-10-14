// // // recursive solution:
// //
// /*
//               123
//       23      13       12
//     3   2   3   1     2   1
//
// */
function getPermutations(string) {
      var results = [];

      if (string.length === 1)
      {
        results.push(string);
        return results;
      }

      for (var i = 0; i < string.length; i++)
      {
        var firstChar = string[i];    //1
        var otherChar = string.substring(0, i) + string.substring(i + 1); //23
        var otherPermutations = getPermutations(otherChar);   // after percursive returned 3, it will concatenate with 2 in the j loop
                                                              // next i loop of 23, 2 will concatenate with 3.
        for (var j = 0; j < otherPermutations.length; j++) {
          results.push(firstChar + otherPermutations[j]);   // 2 + 3
        }

      }
      return results;
    }

console.log(getPermutations('123'));

//     // var permutation = getPermutations('1234').filter((el, idx, self) => (self.indexOf(el) === idx));
//     var permutation1 = getPermutations('123')
//     // console.log("Total permutation: "+permutation.length);
//     // console.log(permutation);
//     console.log("Total permutation: "+permutation1.length);
//     console.log(permutation1);
// //
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
