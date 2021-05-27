
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

function reversePrint(llist) {

  // if llist is null or llist.next is null 
  // if(!llist) { return null}

  // Write your code here
  // reach every node and store them  in an array from the end
  // print the array 

  // const arr = []; 
  // let currentNode = llist;
  // while(currentNode.next) {
  //   arr.unshift(currentNode.data); 
  //   currentNode = currentNode.next;
  // }
  // return arr; // need to return console.log one by one not the whole array. 

  if (llist !== null) {
    reversePrint(llist.next);
    console.log(llist.data)
  }
}

function reverse(head) {
  if (head === null || head.next === null) {
    return head
  }
  let remaining = reverse(head.next);
  head.next.next = head;
  head.next = null; 
  return remaining; 
}
