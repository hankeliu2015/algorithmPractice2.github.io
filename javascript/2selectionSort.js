// // create a find min function
//
// function minAndRemove(array){
//     let min = array[0]
//     let minIndex = 0
//     for(let i = 0; i < array.length; i++){
//       // let currentElement = array[i]
//       if(array[i] < min){
//         min = array[i]
//         minIndex = i
//       }
//     }
//     array.splice(minIndex, 1);
//     // return `array [${array.concat(min)}] min value is ${min}`;
//     return min;
//   }
//
//   // console.log(minAndRemove([5,4,3,2,1, -1]))
//
// function selectionSort(array){
//     let newMin;
//     let sorted = []
//     while(array.length != 0){
//       newMin = minAndRemove(array)
//       sorted.push(newMin)
//     }
//     return sorted;
//   }
//
//   console.log(selectionSort([5,4,3,2,1, -1]))

// retest

function selectionSort(array) {
  // step 1: loop from the beginning of the array to the second to last item
  for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
    // step 2: save a copy of the currentIndex
    let minIndex = currentIndex;
    // step 3: loop through all indexes that proceed the currentIndex
    for (let i = currentIndex + 1; i < array.length; i++) {
      /* step 4:  if the value of the index of the current loop is less
                  than the value of the item at minIndex, update minIndex
                  with the new lowest value index */
      if (array[i] < array[minIndex]) {
        // update minIndex with the new lowest value index
        minIndex = i;
      }
    }
    // step 5: if minIndex has been updated, swap the values at minIndex and currentIndex
    if (minIndex != currentIndex) {
      let temp = array[currentIndex];
      array[currentIndex] = array[minIndex];
      array[minIndex] = temp;
    }
  }
}

let array1 = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
selectionSort(array1)
console.log(array1)
// alert(array1)
