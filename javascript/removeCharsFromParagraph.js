
// assuming space is not count as charactors.
// choose console log array as output format

// Split paragraph by space and combine chars into a string.
// seperate the unique charactors and store them into an array
// apply conditions total characters length and unique chars array length on the output.

// x is the all charactors and y is the unique charactors, w is the larget unique set of chararctors can be removed.
//when x - y >= 50, all elements of w can be removed
// when x - y < 50, x - 50 elements of w can be removed

// add condition when to output x and when outout why. when there is no unique set at all.


let p1 = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'

let p2 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let p3 = "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum + - ) ( ! @ # $ % ^ & / ? > < . "

let p4 = " dolor Lorem ipsum + - ) ( ! @ # $ . "

let p5 = "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum Lorem ipsum"

function removeCharsFromParagraoh(paragraph) {

  let totalChars = paragraph.split(' ').join('');

  if (totalChars.length < 50) {
    console.log("Paragraph charactors Length is less than 50 charractors. Can not proceed.")
  } else {
    let charsObj = {};
    for (let i = 0; i < totalChars.length; i++) {
      if ( charsObj[totalChars.charAt(i)] !== undefined ) {
        charsObj[totalChars.charAt(i)] ++
      } else {
        charsObj[totalChars.charAt(i)] = 1
      }
    }

    let charsObjKeys = Object.keys(charsObj)

    let uniqueCharsArray = charsObjKeys.filter(key => charsObj[key] === 1 )

    if (uniqueCharsArray.length === 0) {
      console.log("There is no unique charactors in the paragraph.")
    } else {
      if (totalChars.length - uniqueCharsArray.length >= 50) {
        console.log("Here is the larget unique Charactors can be removed:", uniqueCharsArray)
      } else if (totalChars.length - uniqueCharsArray.length < 50) {
        let removeCharsCount = totalChars.length - 50;
        console.log("Here is the larget unique Charactors can be removed:", uniqueCharsArray.slice(removeCharsCount))
      }
    }
  }
}

removeCharsFromParagraoh(p5)
// removeCharsFromParagraoh(paragraph)
// removeCharsFromParagraoh(paragraph2)




// testing solution 1:


//Exception based on paragraph length
// function ParagraphLengthException(message){
//     this.name = "ParagraphLengthException"
//     this.message = message;
// }
//



// //Tokenizes string based on specified split character
// function tokenize(paragraph,split){
//     return paragraph.split(split);
// }
//
// //Tokenize and convert string to lowercase
// function prepareInput(paragraph,split){
//     return tokenize(paragraph,split).join().toLowerCase();
// }
//
//
// //Get largest unique set
// function getLargestUniqueSet(characterArray,minLength){
//
//     var result = new Set();
//     var limit = characterArray.length - minLength;
//
//
//     if(characterArray.length<minLength) {
//         throw new ParagraphLengthException("Original paragraph is less than min length of " + minLength);
//     }
//
//     characterArray.forEach((element)=> {
//         if(!result.has(element) && limit > 0){
//             result.add(element);
//             limit--; //Simulate removal of element from original character array. Prevents concurrent traversal/deletion access
//         } else if(result.has(element))
//         {
//             limit--; //Simulate removal of element from original character array. Prevents concurrent traversal/deletion access
//         }
//     });
//
//     return result;
// }
//
//
// //Output largest unique set
// function printSet(uniqueSet)
// {
//     var uniqueSetString = "";
//     uniqueSet.forEach((element)=>{
//         uniqueSetString = uniqueSetString + element + " ";
//     })
//     console.log(uniqueSetString);
// }
//
// //Run Program
// function Main(){
//     //Tokenize and prepare original string input
//     var originalParagraph = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";
//     var tokenSplit = " "; //Takes spaces into account. Change to '' in order to include spaces.
//     var characterArray = prepareInput(originalParagraph,tokenSplit).split("");
//
//     var largestUniqueSet;
//
//     //Get larges unique set
//     try {
//         largestUniqueSet = getLargestUniqueSet(characterArray,50);
//         printSet(largestUniqueSet); //Output largest unique set
//     } catch(exception) {
//         console.log(exception.name,":",exception.message);
//     }
// }
//
// //Run Program
// Main();

// solution 2

// function subtractCharsFromParagraph(paragraph) {
//   if (!paragraph.length) throw Error('No characters were passed in!')
//   if (paragraph.length < 50) throw Error('There must be at least 50 characters in the paragraph.')
//   var hash = {};
//   for (var i = 0; i < paragraph.length; i++) {
//     var char = paragraph[i];
//     if (!(char in hash)) hash[char] = 0;
//     hash[char]++;
//   }
//
//   var keys = Object.keys(hash);
//   var charsInDescendingOrder = keys.sort(function(key1, key2) {
//     return hash[key2] - hash[key1];
//   });
//
//   var length = paragraph.length;
//   var answer = [];
//   while (length >= 50 && charsInDescendingOrder.length) {
//     var currentChar = charsInDescendingOrder.pop();
//     var currentCount = hash[currentChar];
//     length -= currentCount;
//     if (length >= 50) answer.push(currentChar);
//   }
//
//   return answer;
// }
//
// var example = 'If you want to jumpstart the process of talking to us about this role, heres a little challenge: write a program that outputs the largest set of characters that can be removed from this paragraph without letting its length drop below 50.'
//
// console.log(subtractCharsFromParagraph(example));



// solution 3:

// let paragraph = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50. For example: [‘H’, ‘i’, ‘!’, ‘ ‘]'
//
// // Didn't assign to variables, just created function declarations.
// // Has added benefit of hoisting, if necessary for reuse.
// /**
//  * Like Python's Counter data struture. Gets frequency of letters in a string.
//  * @param {string} string The target string to find frequency in
//  * @returns {object} freq An frequency distrubution of unique characters in string.
//  */
// function counterObj(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }
//    return freq;
// };
//
// /**
//  * Sorts numbers from highest to lowest
//  * @param {number} a first number to compare
//  * @param {number} b second number to compare
//  * @returns {number} the bigger number between a or b
//  */
// function sortFunction(a, b) {
//     return b[1] - a[1];
// }
//
// /**
//  * Get largest unique set of characters without dropping below limit.
//  * @param {string} string The target string to find unique set in
//  * @param {number} limit The limit of characers we do want string to fall below
//  * @returns {array} results set of unique letters to remove, their frequency, total number to remove.
//  */
// function GetMaxUniqueSet(string, limit) {
//     const stringLen = string.length;
//     const numToRemove = stringLen - limit;
//     // console.log(stringLen, numToRemove);
//
//     // get frequency with Counter-like structure, then turn to array
//     let strCounter = counterObj(string);
//     // console.log(strCounter);
//
//     // Object to 2D list with key value pairs and sort from largest to smallest
//     let orderedFreqArr = Object.entries(strCounter).sort(sortFunction);
//     // console.log(orderedFreqArr);
//
//     // set up our return data containers
//     let toRemoveObj = {};
//     let toRemoveArr= [];
//     let removeCounter = 0;
//
//     console.log(`\nstring total length: ${stringLen}`);
//     console.log(`goal to remove: ${numToRemove}\n`);
//
//     // loop over our char value pairs in our ordered array
//     for (pair of orderedFreqArr){
//         // destructuring
//         let [el, frequency] = pair;
//         // console.log(el, frequency);
//
//         if (removeCounter + frequency <= numToRemove){
//             toRemoveObj[el] = frequency;
//             toRemoveArr.push(el);
//             removeCounter += frequency;
//             console.log(`char: ${el}, freq: ${frequency}, removeCounter: ${removeCounter}`);
//         } else {
//             break;
//         }
//     }
//
//     // return strucutred data
//     result = [toRemoveArr, toRemoveObj, removeCounter];
//     return result;
// }
//
// // destructuring our data
// let [uniqueSet, uniqueFreq, totalUnique] = GetMaxUniqueSet(paragraph, 50);
//
// // Note: Space aka ' ' is a character. It was not explictly defined
// // that space could not be counted, so it was included in the final set.
// console.log(`\nUnique characters: ${totalUnique} \ntotal characters: ${paragraph.length}`)
//
// console.log(`\nThe list of max letters that can be acutally be removed is: [${uniqueSet}]`)
//
// console.log('\nThe frequency distribution of this unique set is:...\n', uniqueFreq)
