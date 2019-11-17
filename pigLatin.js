//1st condition if first char is a vow, return way.
// if not start as a vowels, split the conso chars and concat 'ay' push to the end of the stringPermutation
// seperate the conso chars with the rest of string.



function translatePigLatin(str) {
  console.log(str);
  if (str.match(/^[aeiouAEIOU]\w+/)) {
    return str.toLowerCase().concat('way')
  } else {
    strArray = str.split(/(?=[aeiouAEIOU])/)
  }

  newStr = strArray[1].concat(str[0]).concat('ay')

  return newStr;
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
