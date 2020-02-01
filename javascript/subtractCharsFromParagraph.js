// solution 1

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

//Exception based on paragraph length
function ParagraphLengthException(message){
    this.name = "ParagraphLengthException"
    this.message = message;
}

//Tokenizes string based on specified split character
function tokenize(paragraph,split){
    return paragraph.split(split);
}

//Tokenize and convert string to lowercase
function prepareInput(paragraph,split){
    return tokenize(paragraph,split).join().toLowerCase();
}


//Get largest unique set
function getLargestUniqueSet(characterArray,minLength){

    var result = new Set();
    var limit = characterArray.length - minLength;


    if(characterArray.length<minLength) {
        throw new ParagraphLengthException("Original paragraph is less than min length of " + minLength);
    }

    characterArray.forEach((element)=> {
        if(!result.has(element) && limit > 0){
            result.add(element);
            limit--; //Simulate removal of element from original character array. Prevents concurrent traversal/deletion access
        } else if(result.has(element))
        {
            limit--; //Simulate removal of element from original character array. Prevents concurrent traversal/deletion access
        }
    });

    return result;
}


//Output largest unique set
function printSet(uniqueSet)
{
    var uniqueSetString = "";
    uniqueSet.forEach((element)=>{
        uniqueSetString = uniqueSetString + element + " ";
    })
    console.log(uniqueSetString);
}

//Run Program
function Main(){
    //Tokenize and prepare original string input
    var originalParagraph = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";
    var tokenSplit = " "; //Takes spaces into account. Change to '' in order to include spaces.
    var characterArray = prepareInput(originalParagraph,tokenSplit).split("");

    var largestUniqueSet;

    //Get larges unique set
    try {
        largestUniqueSet = getLargestUniqueSet(characterArray,50);
        printSet(largestUniqueSet); //Output largest unique set
    } catch(exception) {
        console.log(exception.name,":",exception.message);
    }
}

//Run Program
Main();
