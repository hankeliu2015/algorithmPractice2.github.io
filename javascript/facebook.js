// //both strings has same size and same chars.
// //remove each string taht is an anagram of an earlier string, then return the remianing array in sorted order.

function funWithAnagrams(text) {
    let textObj = {}
    textObj = text.reduce((acc, el) => {
      acc[el] = el;
      return acc
    }, {})

    let objArr = [];
    for (let i = 0; i < text.length ; i++) {
      if ( !text[i + 1]) {
          let lastEl = text[i].split('').sort().join('');
          objArr[i] = {};
          objArr[i][lastEl] = [text[i]];
          break;
        }
      for(let j = i + 1; j < text.length; j++) {
        let textA = text[i].split('').sort().join('');
        let textB = text[j].split('').sort().join('');
        // debugger

        if (text[i].length === text[j].length && textA === textB) {
          if (!objArr[i]) {
            objArr[i] = {};
            objArr[i][textA] = [text[i]]
            objArr[i][textA].push(text[j])
            text.splice(j, 1);
            j -=1;
          } else {
              objArr[i][textA].push(text[j]);
              text.splice(j, 1);
              j -=1;
          }

        }

        if (!objArr[i]) {
          objArr[i] = {};
          objArr[i][textA] = [text[i]];
        }
      } //outer loop
    }
// debugger
    // for (const key in textObj) {
    //   let currentSortedValue = textObj[key].split("").sort().join("");
    //   textObj[key] = currentSortedValue
    //   if (!textObj2[currentSortedValue]) {
    //     textObj2[currentSortedValue] = [];
    //     textObj2[currentSortedValue].push(textObj[key])
    //   } else {
    //     textObj2[currentSortedValue].push(textObj[key])
    //   }
    // }
    // let combinedArr = []
    // for (const key in textObj2) {
    //   let single = textObj2[key].sort()
    //   console.log(single)
    // }
    //
    // return text;
    console.log(objArr)
}
//
console.log(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]))
// console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"]))

// 1. Artisan Martians:
//
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

// // function with Object.keys().Map

// function stickers_for(phrase) {
//   let phraseArr = phrase.split("").filter(el => el != " ")
//
//   let phraseObj = phraseArr.reduce((acc, el) => {
//     if (!acc[el]) {
//       acc[el] = 1
//     } else {
//       acc[el] ++
//     }
//     return acc
//   }, {})
//
//   let phraseFrq = Object.keys(phraseObj).map((key, index) => {
//     if (key === 'a') {
//       return Math.ceil(phraseObj[key] / 2);
//     } else {
//       return phraseObj[key]
//     }
//   })
//   return Math.max(...phraseFrq)
// }
//
// // "instagram"
// console.log(stickers_for("artisan martins"))
// console.log(stickers_for("taming giant gnats"))
// console.log(stickers_for("tiara"))
// console.log(stickers_for("i n s t a g r a m"))


// test code before test.
// function findNumber(arr, k) {
//
//   let j = "NO"
//   for(let i = 0; i < arr.length; i ++) {
//     if (k === arr[i]) {
//       j = "YES";
//       break;
//     }
//   }
//   return j;
// }
//
// console.log(findNumber([1,2,3,4,5], 6))

// function oddNumbers(l, r) {
//   let oddNums = [];
//   for (let i = l; i <= r; i ++) {
//     if ( i % 2 !== 0) {
//       oddNums.push(i);
//     }
//   }
//   return oddNums;
// }
//
// console.log(oddNumbers(2,7));

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
