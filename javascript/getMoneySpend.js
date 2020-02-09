// iterate throught keyboards, exclude element more than budget.
// return the keyboard and drive sum less than b, push them into an new array
// sort the new array and return the last one. reture -1 if array is empty.


// function getMoneySpent(keyboards, drives, b) {
//   let spentSort = [];
//   let spentOnKeyboards = keyboards.filter(el => el < b);
//   let spentOnDrives = drives.filter(el => el < b);
//   let spentArray = [];
//
//   spentOnKeyboards.forEach(keyboard => {
//     spentOnDrives.forEach(drive => {
//       if ((keyboard + drive) < b) {
//         spentArray.push(keyboard+drive);
//       } else if ((keyboard + drive) === b) {
//         return b;     // already eleminated greater than b. return a value simple keep the iteration going.
//       }
//     })
//   })
//
//   spentSort = spentArray.sort((a,b) => a - b);
//   return spentSort[spentSort.length-1] ? spentSort[spentSort.length-1] : -1 ;
//
// }

// solution 2:
// declare a max value as -1, only need return Max when condition met.


// function getMoneySpent(keyboards, drives, b) {
//   let max = -1;
//   let sum = 0;
//
//   keyboards.forEach(keyboard => {
//     drives.forEach(drive => {
//       // console.log(keyboard + drive)
//       if ( (sum = keyboard + drive) === b) {
//         max = sum    // when the sum equal b, max store the value of b or sum.
//       } else if( (sum = keyboard + drive) < b && keyboard && drive) {
//         if (sum > max) {
//           max = sum;    // when a new sum generated, if it is larger than previous one, overwrite it.
//         }
//       }
//     })
//   })
//
//   return max;
// }
//
// console.log(getMoneySpent([40,50,60], [5,8,12], 60));
// console.log(getMoneySpent([5,1,1], [4], 5));
// console.log(getMoneySpent([5,3,3], [4], 2));
