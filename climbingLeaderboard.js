// return the rank from the top score.
// iterate alice's score element and compare with top scores.
// push each alice's score and sort out the array, get the score's index from the array.
// create a method to get ride of the duplicate.


function climbingLeaderboard(scores, alice) {
  let uniqueScores = scores.filter((el, index) => {
    return scores.indexOf(el) === index;
  });

  let rankArray = alice.map((el, index) => {
    let scoresWithAlice = uniqueScores
    scoresWithAlice.push(el)
    let sortedScores = scoresWithAlice.sort((a, b) => b-a)
    return (sortedScores.indexOf(el) + 1);
  })
  return rankArray
}

// solution 2:
// compare the score with the array. As long as matched, return the index value.
// remove the duplicate before that index.

// function climbingLeaderboard(scores, alice) {
//
//   let rankArray = [];
//
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
//
//   return rankArray
// }
//
// console.log(climbingLeaderboard([100,100,50,40,40,20,10], [2,25,50,120]))
