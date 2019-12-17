// s.charCodeAt(0) - 97 to get 0 index.
// convert the char to number. String.

function designerPdfViewer(h, word) {
  let wordHightArray = [];
  for (let i = 0; i < word.length; i++) {
    let currentChar = word.charAt(i);
    let index = currentChar.charCodeAt(0) - 97;
    wordHightArray.push(h[index])
  }

  // console.log(wordHightArray);
  return Math.max(...wordHightArray) * wordHightArray.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'abc'));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
