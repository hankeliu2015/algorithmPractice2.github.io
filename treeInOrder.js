

// const inOrder = inOrder(Right branch), root node, inOrder(left branch)


// function printNodeWithoutLeft(currentNode){
//   if(currentNode.left){
//     printNodeWithoutLeft(currentNode.left)
//   }
//   console.log(currentNode.data)
//   if(currentNode.right){
//     printNodeWithoutLeft(currentNode.right)
//   // }
// }
//
//
// let rootNode = {data: 6,
//                   right: {data: 8, left: null, right: null},
//                   left:  {data: 1,
//                     right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
//                     left: null}
//                 };
//
// printNodeWithoutLeft(rootNode);
/*

  6
 / \
1   8   // printNodeWithoutLeft(1),  frist consolelog output will be 1
 \
  4   // after printing 1, call printNodeWithoutLeft(4) again with argument as right child
 / \
2   5 // printNodeWithoutLeft(2) will print out 2 right after 1





console output:
1
2
4
5
6
8

*/

                                                    // stack

// function add(a, b) {return a + b;}                //  sum(1, 2)
//
// function sum(a,b) {return sum(a,b);}             //  square(1, 2)
//
// function printSum(a,b) {console.log(sum(a,b));} //  print(1, 2)
//
//                                                   //  main()
// printSum(1, 2)


// console.log("time out!")
//
// setTimeout(function() {
//   console.log("Time out is over")
// }, 5000)
//
// console.log("Let's get started")


 //  main()
