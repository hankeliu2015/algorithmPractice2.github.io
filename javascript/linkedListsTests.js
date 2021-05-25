
function printLinkedList(head) {

  let node = head; 
  while(node) {
    console.log(node.data); 
    node = node.next;      
  }

}

class Node {
  constructor(data, next = null) {
      this.data = data; 
      this.next = null; 
  }
}
function insertNodeAtTail(head, data) {
  let tmp = new Node(); tmp.data = data; tmp.next = null;

  if(head == null) {
      head = tmp;
      return head;
  } 
  
  let current = head;
  while(current.next != null) {
      current = current.next;
  }
  current.next = tmp;
  return head;

}

function insertNodeAtHead(head, data) {
  let newHead = new Node(data);
  
  if(!head) {
      return newHead; 
  }else {
      newHead.next = head
      return newHead;  
  }
}

function insertNodeAtPosition(llist, data, position) {
  const newNode = new Node(data);
  if(!llist) {
    return newNode; 
  }else if (position === 0) {
    newNode.next = llist; 
    return newNode; 
  }

  let currentNode = llist;
  let previousNode; 
  let counter = 0; 

  while(counter !== position) {
    previousNode = currentNode; 
    currentNode = currentNode.next; 
    counter ++; 
  }

  previousNode.next = newNode; 
  newNode.next = currentNode; 
  return llist; 
}

function deleteNode(llist, position) {
  // if the postoin is the head, return llist.next or null. 
  if(position === 0) { return llist.next }; 
  // need the previous node next and current next node. 
  let counter = 0; 
  let currentNode = llist; 
  let previousNode; 
  while(counter !== position){
    previousNode = currentNode; 
    currentNode = currentNode.next;
    counter ++;
  }
  previousNode.next = currentNode.next; 
  return llist; 
}
