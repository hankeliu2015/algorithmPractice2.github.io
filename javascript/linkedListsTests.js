
function printLinkedList(head) {
// if the node next is true, , loop keep going and print the node data
// if the node next is false, stop the loop
  let node = head; 
  if (!node.next) { console.log(node.data)}

    // if node.next is 16, print 13, node change to 16. 
    // if node is the last node, the node.next is null. 
  while(node) {
    console.log(node.data); // 16, print 16
    node = node.next;       // 13, 13 next is null, it won't print 13 th eloop stopped. 
  }

}