function telephoneCheck(str) {
  const validPatt = [
    // 555-555-5555
    /(\d{3}-)\1\d{4}$/,
    // 1 555-555-5555
    /^1 (\d{3}-)\1\d{4}$/,
    // 1 (555)-555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    // 5555555555
    /^\d{10}$/,
    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,
    //// 1 555 555 5555
    /^1 (\d{3} )\1\d{4}$/,
    //1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ]

  return validPatt.some(pattern => {
    return pattern.test(str);
  })
}

console.log(telephoneCheck('555-555-5555'))
console.log(telephoneCheck('1 555-555-5555'))
console.log(telephoneCheck('1 (555) 555-5555'))
console.log(telephoneCheck('5555555555'))
console.log(telephoneCheck('(555)555-5555'))
console.log(telephoneCheck('1 555 555 5555'))
console.log(telephoneCheck('1(555)555-5555'))

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// 1(555)555-5555
// let petStr = " James has a pet cat."
// let petRegex = /dog|cat|bird|fish/
//
// console.log(petRegex.test(petRegex))
//
// use i flag to ignore case
// let myStr = 'feeCodeCamp';
// let fccRegex = /codecamp/i
//
// console.log(fccRegex.test(myStr))

// extract match
//
// let extracgStr = 'Extract the word coding from this string'
// let codingRegex = 'coding';
// console.log(extracgStr.match(codingRegex))
//
// // find more than the first match
//
// let twinkelStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig;
// console.log(twinkelStar.match(starRegex))
//
// // wild card
// let unRegex = /.in/g;
// console.log(unRegex.test(twinkelStar));
// console.log(twinkelStar.match(unRegex));

// multi match
// let quoteSample = 'Mississipp. ssss. Beaware of bugs in the above code 123456;'
// let baRegex = /b[aeiou]g/;  // just match a bug from above
// let vowelRegrex = /[aeiou]/ig;
// console.log(quoteSample.match(baRegex)[0])
// console.log(quoteSample.match(vowelRegrex))

// match a range of letter and a range of numbers
// let adMatch = /[a-f]/ig;
// let numCharMatch = /[a-f2-4]/ig;
// console.log(quoteSample.match(adMatch))
// console.log(quoteSample.match(numCharMatch))

// // negated charactor sets
// let quoteSample = 'Mississipp. ssss. Beaware of bugs in the above code 123456;'
// // let negatedMatch = /[^0-3aeiou]/ig;
// //a negative lookahead:
// let negatedMatch = /[^?!0-3aeiou]/ig;
// console.log(quoteSample.match(negatedMatch))

//match a char one or more times

// let oneMoreMatch = /s+/ig;
// console.log(quoteSample.match(oneMoreMatch

// match chars that occur 0 or more times

// let chewieQuote = "Aaaaaaaaarrrgh! Aa A a";
// let chewieRegex = /Aa*/g;
// console.log(chewieQuote.match(chewieRegex))

// lazy matching vs greedy match
// let text = "<h1>Fall is comming</h1>"
// let myRegex = /<.*?>/;
// console.log(text.match(myRegex))
//
// let str = 'titanic';
// let regex = /t[a-z]*?i/;
// console.log(str.match(regex))
// find crimianl
// let crowd = 'ACACCCSDFGHCCASDCCC'
// let reCrim = /C+/g;
// console.log(crowd.match(reCrim))
// match beginning of the string
// let rickyAndCal = 'Cal and Cal Ricky both like racing';
// let calRegex = /^Cal/;
// console.log(rickyAndCal.match(calRegex))
// // match ending string patterns
// let caboose = 'the last car on the train is the caboose';
// let lastRegex = /caboose$/;
// console.log(caboose.match(lastRegex))

// match any chars, numbers and underscore with lower case \w
// with upper case \W, match none chars, numbers and underscore
// let quoteSample = 'the five boxing wizards jump quickly'
// let alphaRegex = /\w/g;
// console.log(quoteSample.match(alphaRegex).length)
// use \d to match all the numbers
// match all number numbers \D;

// possible user name | user name validator
// numbers at the end
// lowercase or uppercase
// at least 2 chars long. 2 chars can not be numbers.
// let userName = "jAck123";
// let userCheck = /^[A-Za-z]{2,4}\d*$/;
// console.log(userCheck.test(userName))

// match white space | \s match white space, tab form and carriage return (\r) and new line charactor (\n)

// quantity specifier {} to specify upper and lower number of matches.
// let haStr = 'Hazzzzah';
// let haRegex = /z{2,4}/;
// console.log(haRegex.test(haStr))

// check for all or none  user ? to check 0 or 1 of precedding element. check if previous element is optional.
// let fav = 'favorite';
// let favRegex = /favou?rite/;

// postitive (?=) or negative lookhead ? = and (?!)
// check 2 or more pattern in one string
// a password has 5 chars long and 2 consecutive digits.

// let sampleWord = "atsrr2";
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;  //first patter is 5 more chars and second patter is none digits plus to digits.
// console.log(pwRegex.test(sampleWord))

// // reuse patterns using capture groups
//
// let repStr = 'regex regex regex';
// let strRegex = /(^\w+)\s\1\s\1$/;
// console.log(repStr.match(strRegex))
//
// let repNum = '42 42 42';
// let reRegex = /^(\d+)\s\1\s\1$/;
// console.log(repNum.match(reRegex))
// console.log(reRegex.test(repNum))

// // capture groups search and replace
// let wrongText = 'The sky is silver';
// let silRegex = /silver/;
// console.log(wrongText.replace(silRegex, 'blue'))
//
// // capture groups in the replacemetn string with $ signs.
// console.log('code camp'.replace(/(\w+)\s(\w+)/, '$2 $1'))

// remove white space from start and end

// let hello ="    Hello, world!    "
// let wsRegex = /(^\s{2})\w(\s{2}$)/;
// let result = hello.replace(/^\s+|\s+$/g, '')
// console.log(result + "(no space at the begin and end)")
// console.log('hello, World!')
