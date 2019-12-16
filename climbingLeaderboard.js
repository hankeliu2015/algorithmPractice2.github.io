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

// solution from suggestions:

// function climbingLeaderboard(scores, alice) {
//     const results = Array(alice.length);
//     let rank = 1;
//     for (let i = 0, j = alice.length - 1; j >= 0; j--) {
//         for (; scores[i] > alice[j]; i++) {
//             if (scores[i] > scores[i + 1] ||
//                 i === scores.length - 1) rank++;
//         }
//         results[j] = rank;
//     }
//     return results;
// }
//
// console.log(climbingLeaderboard([100,100,50,40,40,20,10], [2,25,50,120]))
