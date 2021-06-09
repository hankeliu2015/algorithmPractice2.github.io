function hourglassSum(arr) {
  // outter loop though the row 
  // inner loop through column
  let maxSum = arr[0][0]; // -64 passed all the test
    for(let i = 0; i < arr.length - 2; i++) {
      for(let j = 0; j < arr.length - 2; j++) {
        let glassTop = arr[i][j] + arr[i][j+1] + arr[i][j+2]; 
        let glassMid = arr[i+1][j+1]; 
        let glassBott= arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        let glassSum = glassTop + glassMid + glassBott;
        if(maxSum < glassSum) {
          maxSum = glassSum; 
        } 
        console.log(maxSum);
      }
    }
    return maxSum;
}

// hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])

// hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])

function rotateLeft(d, arr) {
  // Write your code here

    //slice the array from 0 to d
    // push the sliced array into the existing array
    let left = arr.slice(0, d); 
    let right = arr.slice(d)
    return [...right, ...left];
}

function matchingStrings(strings, queries) {
  // create an array as the counters 
  // outter loop get each el from queries. compare each strings in inner loop
  // if there is a match, add counter array element. 
  // return the counter array 
  
  let counterArr = []; 
  for(let i = 0; i < queries.length; i++) {
    counterArr.push(0); 
    for(let j = 0; j < strings.length; j++){
      if(queries[i] === strings[j]) {
        counterArr[i] += 1; 
      }
    }
  }
  return counterArr;
}

function dynamicArray(n, queries) {
  const arr = []    //declare the 2 dimentional array with n empty arrays
  while (arr.length < n) {
    arr.push([])
  }
  
  let lastAnswer = 0  //declare lastAnswer
  const answers = []
  for (const query of queries) {
    const [queryType, x, y] = query
    if (queryType === 1) {                // query type just 1 and 2
      const idx = (x ^ lastAnswer) % n
      arr[idx].push(y)
    } else if (queryType === 2) {
      const idx = (x ^ lastAnswer) % n
      lastAnswer = arr[idx][y % arr[idx].length]
      answers.push(lastAnswer)
    } else {
      throw new Error(`Unrecognized query type ${queryType}`)
    }
  }
  return answers

}

// function arrayManipulation(n, queries) {

//   let arr = []; 
//   // while(arr.length < n) {
//   //   arr.push(0);
//   // }
//   let max = 0; 
    
//     for(let query of queries) {
//         let a, b, k;
//         [a, b, k] = query; 
    
//         for(let i = a - 1; i < b; i ++) {
//           (!arr[i]) ? (arr[i] = k) : (arr[i] += k);
//           if(max < arr[i]) { max = arr[i]}
//         }
//     }
//     return max;

// }

// solution 2 

// function arrayManipulation(n, queries) {

//   let max = 0; 
//   let pA = 1; 
//   let pB = n;
//   for(let query of queries) {
//     let a, b, k; 
//     // [a, b, k] = [query];
//     a = query[0]; 
//     b = query[1]; 
//     k = query[2];
// // debugger
//     if(pB < a) {            
//       if(max < k) {                       // no overlap 
//         pA = a; 
//         pB = b; 
//         max = k; 
//       } 
//     } else if(pA > b) {                   // no overlap 
//       if(max < k) {
//         pA = a; 
//         pB = b; 
//         max = k; 
//       } 
//     } else if(pA <= a && pB >= b) {          // previous range contain current 
//       pA = a; 
//       pB = b;
//       max += k;  
//     } else if(pA >= a && pB <= b) {   // previous range within current
//       pA = pA; 
//       pB = pB; 
//       max += k;
//     } else if(pA ===a && pB >= b) {     // left side equal
//       pA = pA; 
//       pB= b; 
//       sum += k
//     } else if(pA ===a && pB <= b) {     // left side equal
//       pA = PA; 
//       pB= pB; 
//       sum += k
//     } else if(pA <= a && pB === b) {     // right side equal
//       pA = a; 
//       pB= pB; 
//       sum += k
//     } else if(pA >= a && pB === b) {     // right side equal
//       pA = pA; 
//       pB= pB; 
//       sum += k
//     } else if(pA > a && pB > b) {
//       pA = pA; 
//       pB = b;
//       max += k; 
//     } else if(pA < a && pB < b) {
//       pA = a; 
//       pB = pB;
//       max += k; 
//     } 
//   }

//   console.log(pA);
//   console.log(pB);
//   console.log(max);
//   return max;

// }

// final answer 
// [[2,6,8],[3,5,7],[1,8,1],[5,9,15]]
// 10 4
// 2 6 8  [0 0 8 8  8  8  8 0 0 0 ]
// 3 5 7  [0 0 8 15 15 15 8 0 0 0 ]
// 1 8 1  [0 1 9 16 16 16 9 1 1 0 ]
// 5 9 15 [0 1 9 16 16 31 24 16 16 15]


function arrayManipulation(n, queries) {
  let arr = []; 
  while(arr.length < n) {
    arr.push(0);
  }

  for(let query of queries) {
    let a = query[0]; 
    let b = query[1]; 
    let k = query[2]; 
    arr[a-1] += k; 
    arr[b] -= k;  
  }
  
  let max = 0; 
  let current = 0; 
  for(let el of arr) {
    current += el; 
    if(max < current) { max = current};  
  }

  console.log(max)
  return max; 

}


// arrayManipulation(10, [[2,6,8],[3,5,7],[1,8,1],[5,9,15]])
// arrayManipulation(10, [[1,5,3],[4,8,7],[6,9,1]])
// arrayManipulation(10, [[2,6,8],[3,5,7],[1,8,1],[5,9,15]])
