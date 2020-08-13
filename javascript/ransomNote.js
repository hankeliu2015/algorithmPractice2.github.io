let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

 let note = "give me the ferbie or else"

 function ransomNote(noteText, magzineText) {
   // convert magazine to histogram
   // loop note text chars and compare with histogram.
   let objTable = magzineText.reduce((acc, el) => {
     if (acc[el]) {
       acc[el] += 1;
     } else {
       acc[el] = 1;
     }
     return acc;
   }, {})
   // debugger;
   let charsNoSpace = noteText.split(' ').join('')

   // let value = charsNoSpace.map((el) => {
   //   if(objTable[el]) {
   //     objTable[el] -= 1;
   //     return true;
   //   } else {
   //     return false
   //   }
   // }).reduce((acc, el) => acc && el)
   return value;
 } //end of function

 console.log(ransomNote(note, magazine))
