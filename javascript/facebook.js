// // //both strings has same size and same chars.
// // //remove each string taht is an anagram of an earlier string, then return the remianing array in sorted order.
// //
//
// //// ABE solution:
// // The word "dict" means dictionary - which all javascript objects are (key-value stores)
// // Here, I create a dictionary from each word of the counts of characters
// // I then check if any previous words have those same number of characters
// // If yes, I keep going
// // If no, I add that word to 'result' and the dicts I've seen.
// //
// // function funWithAnagrams(words) {
// //   const prevWordDicts = []
// //   const result = []
// //
// //   for (let word of words) {
// //     let wordDict = createDictionaryFromWord(word)
// //     if (isSameAsAnyPrevDict(prevWordDicts, wordDict)) {
// //       continue
// //     }
// //
// //     prevWordDicts.push(wordDict)
// //     result.push(word)
// //   }
// //
// //   return result
// // }
// //
// // function isSameAsAnyPrevDict(prevWordDicts, wordDict) {
// //   for (let prevWordDict of prevWordDicts) {
// //     if (isSameDict(prevWordDict, wordDict)) {
// //       return true     // the end of the loop return true, the function will return true
// //     }
// //   }
// //   return false
// // }
// //
// // function isSameDict(dict1, dict2) {
// //   if (Object.keys(dict1).length !== Object.keys(dict2).length) {
// //     return false
// //   }
// //
// //   for (let key in dict1) {
// //     if (dict1[key] !== dict2[key]) {
// //       return false
// //     }
// //   }
// //
// //   return true
// // }
// //
// // function createDictionaryFromWord(word) {
// //   const wordDict = {}
// //
// //   for (let char of word) {
// //     if (char in wordDict) {
// //       wordDict[char] += 1
// //     } else {
// //       wordDict[char] = 1
// //     }
// //   }
// //
// //   return wordDict
// // }
// //
// // console.log(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]))
// // console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"]))
//
//
// //// anagrams solution | iterate through anagrams, find and remove anagrams. sort out the element left by alphabetically.
// //
// // function funWithAnagrams(text) {
// //
// //   for (let i = 0; i < text.length ; i++) {
// //     // the last element will have no anagrams. stop it compare to the last + 1 element.
// //     if ( !text[i + 1]) {
// //         break;
// //       }
// //     for(let j = i + 1; j < text.length; j++) {
// //       let currentElSortChars = text[i].split('').sort().join('');
// //       let nextELSortChars = text[j].split('').sort().join('');
// //       // there is a matched anagram, remove that from orignal array and reset the index backward.
// //       if (text[i].length === text[j].length && currentElSortChars === nextELSortChars) {
// //           text.splice(j, 1);
// //           j -=1;
// //       }
// //       // for element without any anagrams
// //     } //end of outer loop
// //   }
// //   return text.sort();
// // }
//
// // anagrams | use array inside array to group anagrams, remove anagrams and sort the final array.
//
// // function funWithAnagrams(text) {
// //
// //     let anagramArr = [];
// //     for (let i = 0; i < text.length ; i++) {
// //       // the last element will have no anagrams. stop it compare to the last + 1 element.
// //       if ( !text[i + 1]) {
// //           let lastEl = text[i].split('').sort().join('');
// //           anagramArr[i] = [];
// //           anagramArr[i] = [text[i]];
// //           break;
// //         }
// //       for(let j = i + 1; j < text.length; j++) {
// //         let textA = text[i].split('').sort().join('');
// //         let textB = text[j].split('').sort().join('');
// //         // there is a matched anagram, remove that from orignal array and reset the index backward.
// //         if (text[i].length === text[j].length && textA === textB) {
// //           if (!anagramArr[i]) {
// //             anagramArr[i] = [];
// //             anagramArr[i].push(text[i]);
// //             anagramArr[i].push(text[j]);
// //             text.splice(j, 1);
// //             j -=1;
// //           } else {
// //               anagramArr[i].push(text[j]);
// //               text.splice(j, 1);
// //               j -=1;
// //           }
// //         }
// //         // for element without any anagrams
// //         if (!anagramArr[i]) {
// //           anagramArr[i] = [];
// //           anagramArr[i] = [text[i]];
// //         }
// //       } //end of outer loop
// //     }
// //     ////iterate anagramArr and remove anagrams.
// //     uniqueArr = anagramArr.map(el => {
// //       // reset el's length to one.
// //       el.length = 1;
// //       return el;
// //     }).reduce((a,b) => a.concat(b), []).sort()
// //     return(uniqueArr);
// //   }
//
//   // console.log(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]))
//   // console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"]))
//   // console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce", "aaagmnsr", "anagarms"]))
//
//
// // 1. Artisan Martians:
// // Daniel Dawson's example:
// function stickers_for(phrase) {
//   // keep track of letter frequencies
//   const freq = {};
//   let maxFreq = 0;
//   // iterate through string
//   for (const char of phrase) {
//     if (char === ' ') continue; // skip spaces
//     if (char in freq) {
//       freq[char]++;
//     } else {
//       freq[char] = 1;
//     }
//     // account for second 'a' in 'instagram'
//     const currentFreq = char === 'a' ? Math.ceil(freq[char] / 2) : freq[char];
//     // update max
//     if (currentFreq > maxFreq) {
//       maxFreq = currentFreq;
//     }
//   }
//   return maxFreq;
// }
//
// //// my solution 1
// //
// function stickers_for(phrase) {
//   let phraseArr = phrase.split("").filter(el => el != " ")
//   // let phraseArr = phrase.split(" ").join().split("");
//   let phraseObj = phraseArr.reduce((acc, el) => {
//     if (!acc[el]) {
//       acc[el] = 1
//     } else {
//       acc[el] ++
//     }
//     return acc
//   }, {})
//
//   let maxCharKey = 0;
//
//   if (!phraseObj["a"]) {
//     maxCharKey = Object.keys(phraseObj).reduce((a,b) => phraseObj[a] > phraseObj[b] ? a : b);
//     maxCharKey = Math.max(Object.values(phraseObj).map(el => el))
//   } else {
//     phraseObj["a"] = Math.ceil(phraseObj["a"] / 2);
//     maxCharKey = Object.keys(phraseObj).reduce((a,b) => phraseObj[a] > phraseObj[b] ? a : b);
//   }
//   return phraseObj[maxCharKey];
// }
//
// // // function with Object.keys().Map - solution 2
//
// // function stickers_for(phrase) {
// //   let phraseArr = phrase.split("").filter(el => el != " ")
// //
// //   let phraseObj = phraseArr.reduce((acc, el) => {
// //     if (!acc[el]) {
// //       acc[el] = 1
// //     } else {
// //       acc[el] ++
// //     }
// //     return acc
// //   }, {})
// //
// //   let phraseFrq = Object.keys(phraseObj).map((key, index) => {
// //     if (key === 'a') {
// //       return Math.ceil(phraseObj[key] / 2);
// //     } else {
// //       return phraseObj[key]
// //     }
// //   })
// //   return Math.max(...phraseFrq)
// // }
//
//
// // // "instagram"
// console.log(stickers_for("artisan martins"))
// console.log(stickers_for("taming giant gnats"))
// console.log(stickers_for("tiara"))
// console.log(stickers_for("i n s t a g r a m"))
//
// // sample test .
// // function findNumber(arr, k) {
// //
// //   let j = "NO"
// //   for(let i = 0; i < arr.length; i ++) {
// //     if (k === arr[i]) {
// //       j = "YES";
// //       break;
// //     }
// //   }
// //   return j;
// // }
// //
// // console.log(findNumber([1,2,3,4,5], 6))
//
// // function oddNumbers(l, r) {
// //   let oddNums = [];
// //   for (let i = l; i <= r; i ++) {
// //     if ( i % 2 !== 0) {
// //       oddNums.push(i);
// //     }
// //   }
// //   return oddNums;
// // }
// //
// // console.log(oddNumbers(2,7));
