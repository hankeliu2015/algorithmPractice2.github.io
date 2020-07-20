// function findOrAdd(rootNode, newNode){
//   let currentNode = rootNode					 //current node changing with recursion // might not need this line.
//   if(newNode.data < rootNode.data){
//       currentNode = rootNode.left       // store left node in current node
//       if(currentNode){                  // left has value
//         findOrAdd(currentNode, newNode)			//go to the child level, check left and right
//       } else {                          // left has not value
//         rootNode.left = newNode          // eventally end here. base case.
//       }
//   } else if(newNode.data > rootNode.data) {
//     currentNode = rootNode.right
//     if(currentNode){
//       findOrAdd(currentNode, newNode)
//     } else {
//       rootNode.right = newNode          //// eventally end here. base case.
//     }
//   }
// }
//
//
// //testing
let newNode = {data: 3, left: null, right: null};
let rootNode = {data: 6,
                right: {data: 8, left: null, right: null},
                left: {data: 1,
                  right: {data: 4, right: null, left: null},
                  left: null}
                };

findOrAdd(rootNode, newNode);
// console.log(rootNode);
// console.log(rootNode.left.right.left);
// console.log(newNode);

function findOrAdd(rootNode, newNode){
  let currentNode = 0;


  if(newNode.data > rootNode.data ){
    if(rootNode.right === null){
      rootNode.right = newNode;

      return true;
    }else{
      currentNode = rootNode.right;
      findOrAdd(currentNode, newNode);
    }
  }

  if(newNode.data < rootNode.data){
    if(rootNode.left === null){
      rootNode.left = newNode;

      return true;
    }else{
      currentNode = rootNode.left;
      findOrAdd(currentNode, newNode);
    }
  }

  return console.log(rootNode);
}
