// turn page on page a time from front or bock.

// compare reach page from front and from the end. the less win.
// compare the minimal pages turn from front and the back
// if page turned from the front.
// if it is not the first page form front, if p -1 is even, p - 1 / 2; if p - 1 is odd, p / 2.


// function pageCount(n, p) {
  // let counter = 0;
//   let page = 0;
//   if (p < n/2) {
//     page = p;
//   }else{
//     page = n - p;
//   }
//
//   if ( page === 1 || n === p ) {  //first page and last page
//     counter = 0;
//   } else {
//     if ( (page-1) % 2 ===0) {
//       counter = (page-1) / 2;
//     } else if ( (page-1) % 2 !==0) {
//       counter = page /2;
//     }
//   }
// }

//solution 2:
// page count is the same for page 6 and 7. Math floor will work for the both. page one will always be zero.
// function pageCount(n, p) {
//   let pageTurns = Math.floor(p/2)
//   let bookTurns = Math.floor(n/2)
//
//   let counter = (bookTurns - pageTurns) > pageTurns ? pageTurns : (bookTurns - pageTurns)
//
//   return counter;
// }
//
// console.log(pageCount(11,5))
// console.log(pageCount(11,6))
// console.log(pageCount(11,10))
// console.log(pageCount(10,5))
// console.log(pageCount(10,6))
// console.log(pageCount(10,10))
