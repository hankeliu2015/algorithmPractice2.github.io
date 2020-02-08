// solution 1 has bugs.

// function countingValleys(n, s) {
//   let seaLevel = true;
//   let valleyDistance = [];
//   let hillDistance = 0; // need hillDistance to track when it is not a valley and when seaLevel can become ture.
//   let counter = 0;
//
//
//   if (seaLevel === true && s[0] === 'D') {
//     seaLevel = false;
//     valleyDistance.push.s[0];
//
//   } else if (seaLevel === true && s[0] === 'U') {
//     seaLevel = false;
//     hillDistance++;
//   }
//
//   for (let i = 1; i < s.length; i ++) {
//
//   console.log(seaLevel, valleyDistance, hillDistance)
//
//
//   if (seaLevel === true && hillDistance === 0 && s[i] === 'U') {
//       hillDistance++;
//       seaLevel = false;
//     } else if (seaLevel === false && hillDistance > 0 && s[i] === 'U') {
//       hillDistance++;
//     }else if (seaLevel === false && hillDistance > 0 && s[i] === 'D') {
//       hillDistance--;
//     }
//
//     if (seaLevel === false && hillDistance ===0 ) {
//       seaLevel = true;
//       hillDistance = 0 ;
//       valleyDistance = [];
//     }
//     // the following is valleyDistance:
//
//     // when sealelve back to 0, alleyDistance 0 length and there is a D, start couting valleyDistance.
//     // keep valleyDistance growing or pop or reset when finish a valley.
//
//     if (seaLevel === true && valleyDistance.length === 0 && s[i] === 'D') {
//       valleyDistance.push(s[i]);
//       seaLevel = false;
//     } else if (seaLevel === false && valleyDistance.length > 0 ) {
//       valleyDistance.push(s[i]);
//     }
//
//     if (seaLevel === true && valleyDistance[0] === 'D' &&  valleyDistance[valleyDistance.length] === 'U') {
//       counter++;
//       seaLevel = true;
//       valleyDistance = [];
//       hillDistance = 0;
//     }
//
//   }
//
//   return (counter)
// }

//solution 2 :
// declare seaLevel and counter.
// iternate the string s, adjusting seaLevels.
// when 2 condition meet, seaLevel equal to 0 and s[i] = 'U'. counter ++


function countingValleys(n, s) {

  let seaLevel = 0;
  let valleyCounter = 0;

  for  (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      seaLevel++;
    } else if ( s[i] === 'D') {
      seaLevel--;
    }
    if (seaLevel === 0 && s[i] === 'U') {   //when sealevel is 0 and step is up at the same time, it is a valley.
      valleyCounter++;
    }
  }
  return valleyCounter;

}


console.log(countingValleys(8, 'UDDDUDUU'))
