//print out the nodes of a tree in order
// // // printNodeWithoutLeft | node.left's value less than node.

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
// let rootNode2 = {data: 6,
//                   right: {data: 8, left: null, right: null},
//                   left:  {data: 1,
//                     right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
//                     left: null}
//                 };

// rootNode1 in chart
// binary search tree following order: 4, 1, 2, 5, 6, 3.
  // 4        4      4         4             4              4
  //          /      /        /   \         /   \          /   \
  //         1      1        1     5       1     5        1     5
  //                  \       \             \     \        \     \
  //                  2        2            2     6        2     6
  //                                                        \
  //                                                         3

// let rootNode1 = {
//   data: 4,
//   left: {
//     data: 1,
//     left: null,
//     right: {
//       data: 2,
//       left: null,
//       right: {
//         data: 3,
//         left: null,
//         right: null
//       }
//     }
//   },
//   right: {
//     data: 5,
//     left: null,
//     right: {
//       data: 6,
//       left: null,
//       right: null
//     }
//   }
// }

// printNodeWithoutLeft(rootNode1);
// printNodeWithoutLeft(rootNode2);
//
// ////retest
// printInOrder(rootNode1);
// printInOrder(rootNode2);
//
// function printInOrder(node){
//   let currentNode = 0;
//   if(node.left){
//     currentNode = node.left
//     printInOrder(currentNode);
//   }
//   console.log(node.data);
//
//   if(node.right) {
//     currentNode = node.right;
//     printInOrder(currentNode);
//   }
//
// }
