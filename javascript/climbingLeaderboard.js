// return the rank from the top score.
// iterate alice's score element and compare with top scores.
// push each alice's score and sort out the array, get the score's index from the array.
// create a method to get ride of the duplicate.


// function climbingLeaderboard(scores, alice) {
//   let uniqueScores = scores.filter((el, index) => {
//     return scores.indexOf(el) === index;
//   });
//
//   let rankArray = alice.map((el, index) => {
//     let scoresWithAlice = uniqueScores
//     scoresWithAlice.push(el)
//     let sortedScores = scoresWithAlice.sort((a, b) => b-a)
//     return (sortedScores.indexOf(el) + 1);
//   })
//   return rankArray
// }

// solution 2:
// compare the score with the array. As long as matched, return the index value.
// remove the duplicate before that index.
// function climbingLeaderboard(scores, alice) {
//   let rankArray = [];
//   alice.forEach(el => {
//
//     rank = scores.map((score, index) => {
//       if  (score < el) {
//         return index + 1;
//       }
//     })
//
//     rankArray.push(rank);
//   })
//   return rankArray
// }
//

// solution 3:
// flat the scores.
// iterate alice element and compare with each scores.
// declare a rankArray, push all the ranks to this array.
// iterate alice element, compare it with scores. If the scores are equal, return the index +1 as rank. If alice less than the scores, return index as the rank, push to rankArray. if alice greater than the first score, return 1 as the rank.

// function climbingLeaderboard(scores, alice) {
//
//   let rankArray = [];
//   let filteredScores = scores.filter((el, index) => scores.indexOf(el) === index);
//
//   // console.log(filteredScores);
//   alice.forEach(el => {
//
//     for (let i = 0; i < filteredScores.length; i ++) {
//       if (el < filteredScores[filteredScores.length-1]) {
//         rankArray.push(filteredScores.length +1);
//         break;
//       } else if (el === filteredScores[i]) {
//         rankArray.push(i+1);
//         break;
//       } else if (el > filteredScores[i]) {
//         rankArray.push(i+1);
//         break;
//       }
//     }
//   })
//
//   return rankArray;
//
// } //end of function
// console.log(climbingLeaderboard([100,100,50,40,40,20,10], [2,25,50,120]))
// //
// // //solution from babara suggestions:
//
// function climbingLeaderboard(scores, alice) {
//     // const results = Array(alice.length);  // creating array with empty elements.
//     const results = [];  // creating array with empty elements.
//     let rank = 1;
//     // Scores are sorted high to low but Alice is sorted low to high.
//     // And so results are also going to be in sorted order (rank lowest to highest)
//     // Loops is going from Alice's highest score (last entry) to her lowest score
//     for (let i = 0, j = alice.length - 1; j >= 0; j--) {
//         console.log(`ranking alice's score ${alice[j]}`)
//         // because scores are sorted, we can pick up where we left off.  That
//         // is why i is not re-initialized here (just using previous value from where
//         // the last alice score was ranked)
//         for (; scores[i] > alice[j]; i++) {
//             console.log(`--- comparing to ${scores[i]}`)
//             if (scores[i] > scores[i + 1] ||    //make sure no equal elements and last element won't have next element.
//                 i === scores.length - 1) rank++;  // the rank keep incrementing as long as current not equal to the next element.
//         }
//         results[j] = rank;
//         console.log(`Alice current score Rank: ${rank}`)
//     }
//     return results;
// }
