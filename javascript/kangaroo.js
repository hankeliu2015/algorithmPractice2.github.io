// if the slower one starting point is less than the faster one, return no.
// the slower left behind faster one, return false
// faster on ahead of slower one, return false

// function kangaroo(x1, v1, x2, v2) {
//   if ( x1 >= x2 && v1 < v2) {
//     return "NO";
//   } else if ( x1 === x2 || x1 + v1 === x2 + v2) {
//     return "YES";
//   }
//
//   while ( x1 !== x2  ) {
//     // console.log(x1, x2)
//     x1+=v1;
//     x2+=v2;
//
//     if (v1 <= v2 && x1 < x2) {
//       return 'NO';
//     } else if (v1 >= v2 && x1 > x2) {
//       return 'NO';
//     }
//   }
//
//   if (x1 === x2) {
//     return 'YES';
//   }
// }
//
// console.log(kangaroo(0,3,4,2))
// console.log(kangaroo(0,2,5,3))

//// solution using difference ==0

// function kangaroo(x1, v1, x2, v2) {
//   var difference=0;
//
//   var calculate=function(){
//    if((x1<x2)&&((v1<v2)||(v1==v2))){
//      return "NO"
//      }
//    else{
//      while(Math.sign(difference)!=-1){
//       x1+=v1;
//       x2+=v2;
//       difference=x2-x1;
//       if(difference==0){
//           return "YES"
//         }
//       }
//       return "NO"
//     }
//   }();
//
//     return calculate;
// }
