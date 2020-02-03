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
