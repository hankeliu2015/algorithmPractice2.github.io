

// const inOrder = inOrder(Right branch), root node, inOrder(left branch)


// function printNodeWithoutLeft(currentNode){
//   if(currentNode.left){
//     printNodeWithoutLeft(currentNode.left)
//   }
//   console.log(currentNode.data)
//   if(currentNode.right){
//     printNodeWithoutLeft(currentNode.right)
//   }
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

console output:
1
2
4
5
6
8

*/
