
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

// recursive solution 

// function CompareLists(llist1, llist2) {
//   // base case 
//   // current node data equal and next node is null , return true
//   if(llist1.data === llist2.data && (!llist1.next && !llist2.next)) { return 1}

//   // conditions to return false 
//   //  2 list is not equal length. one next is null but the other is not. 
//   // current node data is not eqaul. 
//   if(llist1.data !== llist2.data) { return 0}
//   if(llist1.data === llist2.data && !(llist1.next || llist2.next)) { return 0}

//   // conditions to call the recursive 
//   // current node data equal and next node is not null
//   if(llist1.data === llist2.data && (llist1.next && llist2.next)) {
//     return CompareLists(llist1.next, llist2.next )
//   }

// }

// function CompareLists(llist1, llist2) {
//   if(!llist1 && !llist2) { 
//     return 1
//   }else if(!llist1 || !llist2) {return 0}

//   if(llist1.data === llist2.data) {
//     return CompareLists(llist1.next, llist2.next);
//   }else if(llist1.data !== llist2.data) {
//     return 0;
//   }
// }

// mergelists recursive 

function mergeLists(head1, head2) {
  class Node {
    constructor(data, next = null) {
      this.data = data; 
      this.next = null; 
    }
  }
  //base case 
  // h1 run out, return h2. 
  // h2 run out, return h1
  if(!head1 && !head2) { 
    return null
  }else if(!head2) {
    return head1
  } else if(!head1) { 
    return head2;
  };
  
  // h1 less than h2, call recursive to compare h1.next with h2. 
  if ( head1.data < Head2.data) {
    head1.next = mergeLists(hea1.next, head2);
  }else {
    // swap - h1 previous next = h2 ; h2.next = h1
    // createa  new node with h1 data, new node next set to h1.next - basically push back the head1
     tempNode = new Node(head1.data); 
     tempNode.next = head1.next; 
    // repalce h1 data with h2 data and h1 next point to the new temp node, which has h2 data and h1's next;  
    head1.data = head2.data; 
    head1.next = tempNode; 

    // pass in the new node, which is the h1 and h2.next to recursive. the new h1 continue compare with the h2.next
    head1.next = mergeLists(head1, head2.next)
  }
  return head1;
}

// get node value - runner solution 
// function getNode(llist, positionFromTail) {
//   // runner go first, reach the postion index. 
//   // use a while loop, when the runner reach the end, the current node is the node we looking for.
  
//   // if the node length is 10 and the postion gaven is 8th. let the running reach the 8th position from the beginning; 
//   // 

//   let runner = llist; 
//   let current = llist; 
//   for(let i = 0; i < positionFromTail; i++) {
//       runner = runner.next; 
//   }
//   while(runner.next !==null) {
//       runner = runner.next;
//       current = current.next;
//   }
// return current.data;
// }

// delete node with duplicated value in an accending ordered linked list 
// function removeDuplicates(llist) {

//   if(!llist || !llist.next) { return llist}; 

//   let head = llist; 
//   while(llist.next) {
//     if(llist.data === llist.next.data) {
//       llist.next = llist.next.next;
//     }else {
//       llist = llist.next; 
//     }
//   }
//   return head;
// }

// testing code has issue with JS syntax. 
// function hasCycle(head) {
//   if(!head) { return 0};
//   let slow = head; 
//   let fast = head; 
//   while(fast.next && fast.next.next) {
//     slow = slow.next; 
//     fast = fast.next.next;

//     if(slow === fast ) {
//       return 1; 
//     }
//   }
//   return 0; 
// }


// find merge point 
function findMergeNode(headA, headB) {

  // the merged part of the node are the 'same' length. 
  // calculate the length of both node, minus the different, only need to compare the rest. 
  // calculate the nodes length 
  // there might be bugs in the test or this methode. 

  let lengthA = 0; 
  let lengthB = 0; 

  let tempA = headA; 
  let tempB = headB; 

  while(tempA) {
    lengthA++; 
    tempA = tempA.next; 
  }

  while(tempB) {
    lengthB++; 
    tempB = tempB.next; 
  }

  if(lengthA > lengthB) {
    let newA = headA; 
    let newB = headB; 
    for(let i = 0; i < lengthA - lengthB; i++) {
      newA = newA.next; 
    }
    while(newA.next) {
      if (newA === newB) {
        return newA.data; 
      }
      newA = newA.next;
      newB = newB.next;  
    }
  }else{
    let newA = headA; 
    let newB = headB; 
    for(let j = 0; j < lengthB - lengthA; j++) {
      newB = newB.next; 
    }
    while(newB.next) {
      if(newB === newA) {
        return newB.data; 
      }
      newB = newB.next;
      newA = newA.next;  
    }
  }
}