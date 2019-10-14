// function findOrAdd(rootNode, newNode){
//   let currentNode = rootNode					 //current node changing with recursion
//   if(newNode.data < rootNode.data){
//       currentNode = rootNode.left
//       if(currentNode){                  // left has value
//         findOrAdd(currentNode, newNode)			//go to the child level, check left and right
//       } else {                          // left has not value
//         rootNode.left = newNode
//       }
//   } else if(newNode.data > rootNode.data) {
//     currentNode = rootNode.right
//     if(currentNode){
//       findOrAdd(currentNode, newNode)
//     } else {
//       rootNode.right = newNode
//     }
//   }
// }
//
// // testing
// let newNode = {data: 3, leftChild: null, rightChild: null}
// let rootNode = {data: 6,
//                 rightChild: {data: 8, leftChild: null, rightChild: null},
//                 leftChild: {data: 1,
//                   rightChild: {data: 4, rightChild: null, leftChild: null},
//                   leftChild: null}
//
//   findOrAdd(rootNode, newNode)
//   newNode == rootNode.left.right.right
//   // true
