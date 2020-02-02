//
// Split paragraph by space and combine chars into a string.
// How to set a limit number, the characters might be duplicated in the paragraph ??
//
// Create a new set
// Store the unique characters inside the new set.
// Combine the new set into a string and print it out under certain format.

// let paragraph = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'
//
// function convertToString(paragraph) {
//   return paragraph.split(' ').join();
// }
//
// // set a limit number
// let limitNum = convertToString().length - 50;




// solution 1:
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
