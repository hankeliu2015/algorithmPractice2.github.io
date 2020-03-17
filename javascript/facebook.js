// function funWithAnagrams(text) {
//
//     let textObj = text.reduce((acc, el) => {
//       acc[el] = el;
//       return acc
//     }, {})
//
//     let textObj2 = {};
//
//     for (const key in textObj) {
//       let currentSortedValue = textObj[key].split("").sort().join("");
//       textObj[key] = currentSortedValue
//       if (!textObj2[currentSortedValue]) {
//         textObj2[currentSortedValue] = [];
//         textObj2[currentSortedValue].push(textObj[key])
//       } else {
//         textObj2[currentSortedValue].push(textObj[key])
//       }
//     }
    // let combinedArr = []
    // for (const key in textObj2) {
    //   let single = textObj2[key].sort()
    //   console.log(single)
    // }

//     return textObj2;
// }
//
// console.log(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]))

// 1. Artisan Martians:

function stickers_for(phrase) {
  let phraseArr = phrase.split("").filter(el => el)
  let phraseObj = phraseArr.reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 1
    } else {
      acc[el] ++
    }
    return acc
  }, {})

  let maxCharKey = 0;
  if (!phraseObj["a"]) {

    maxCharKey = Object.keys(phraseObj).reduce((a,b) => phraseObj[a] > phraseObj[b] ? a : b);
    // maxCharKey = Math.max(Object.values(phraseObj).map(el => el))
  } else {
    phraseObj["a"] = Math.ceil(phraseObj["a"] / 2);
    maxCharKey = Object.keys(phraseObj).reduce((a,b) => phraseObj[a] > phraseObj[b] ? a : b);
  }
  return phraseObj[maxCharKey];
}

// "instagram"
console.log(stickers_for("artisan martins"))
console.log(stickers_for("taming giant gnats"))
console.log(stickers_for("tiara"))
console.log(stickers_for("tttiaraaaaaa"))


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
