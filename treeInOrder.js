

// const inOrder = inOrder(Right branch), root node, inOrder(left branch)


function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)   // when there is no left node, root node will show.

  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

let rootNode = {data: 6,
                right: {data: 8, left: null, right: null},
                left: {data: 1,
                  right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
                  left: null}
                };

inOrder(rootNode);
