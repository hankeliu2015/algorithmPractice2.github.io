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
