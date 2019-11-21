//1st condition if first char is a vow, return way.
// if not start as a vowels, split the conso chars and concat 'ay' push to the end of the stringPermutation
// seperate the conso chars with the rest of string.

function translatePigLatin(str) {
  console.log("original String:", str);

  let str1, str2;

  if (str.match(/^[aeiouAEIOU]\w+/)) {
    return str.toLowerCase().concat('way')
  } else {
    strArray = str.split(/(?=[aeiouAEIOU])/)
    str1 = strArray[0];
    str2 = strArray.slice(1).join('');
  }

  newStr = str2.concat(str1).concat('ay')

  return newStr;
}
// 
// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("schwartz"));
