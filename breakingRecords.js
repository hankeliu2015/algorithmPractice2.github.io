// need a counter for the breaking best recording.
// if a score is higher than all the previous scores, it is a record.
// another counter for breaking the worse records.

function breakingRecords(scores) {
  // start a loop from index 1. compare with previous elements.
  let maxCounter = 0;
  let minCounter = 0;
  let compareArray = [];
  for ( let i = 1; i < scores.length; i++) {
    compareArray = scores.slice(0, i).map(el => {

      // return -1, 0 or 1 when less, equal or greater than previous elements.
      if (el > scores[i]) {
        return -1;
      } else if ( el === scores[i]) {
        return 0;
      } else if (el < scores[i]) {
        return 1;
      }
    })

    // if compareArray all are -1, break an lowest record.
    // if all 1, break a highest record.
    if (compareArray.length === compareArray.reduce((acc, el) => acc + el, 0 )) {
      maxCounter+=1;
    } else if (-compareArray.length === compareArray.reduce((acc, el) => acc + el, 0 )) {
      minCounter+=1;
    }

  }
  console.log(maxCounter, minCounter)
  return [maxCounter, minCounter];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
