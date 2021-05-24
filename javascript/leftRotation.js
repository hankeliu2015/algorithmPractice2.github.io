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