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
// let baRegex = /b[aeiou]g/;
// let vowelRegrex = /[aeiou]/ig;
// console.log(quoteSample.match(baRegex)[0])
// console.log(quoteSample.match(vowelRegrex))

// match a range of letter and a range of numbers
// let adMatch = /[a-f]/ig;
// let numCharMatch = /[a-f2-4]/ig;
// console.log(quoteSample.match(adMatch))
// console.log(quoteSample.match(numCharMatch))

// negated charactor sets
// let negatedMatch = /[^0-3aeiou]/ig;
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
