// let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
// "h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
// "u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
// "p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
//  "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]
//
//  // let note = "give me the ferbie or else"
//  let note = "me the"
//
//  function ransomNote(noteText, magzineText) {
//    // convert magazine to histogram
//    // loop note text chars and compare with histogram.
//    let objTable = magzineText.reduce((acc, el) => {
//      if (acc[el]) {
//        acc[el]++;
//      } else {
//        acc[el] = 1;
//      }
//      return acc;
//    }, {})
//    // convert the string to array and remove empty element.
//    let noteArray = noteText.split('').filter(el => el != ' ')
//
//    let validMag = noteArray.map((el) => {
//      if(!objTable[el]) {
//        return false
//      } else {
//        objTable[el]--;
//        if (objTable[el] <= 0) {
//          return false
//        } else {
//          return true;
//        }
//      }
//    }).reduce((acc, el) => acc && el)
//
//    return validMag;
//  } //end of function
//
//  console.log(ransomNote(note, magazine))
