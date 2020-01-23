// /*
// //singly linked list . head note and everything else is tail nodes.
//
// [{value: 3, next 1}, {value: 10, next: 2}, {value: 4, next: null}]
//
// //head
//
// [{value: 3, next 1}]
//
// //tail
// [{valueL 10, next: 2}, {value: 4, next, null}]
//
// //describe into operations
// need create new note and new linked list
//
// build a constructor function for a single note
//   new node with an value
//   attribute for value and next
//
// build a constructor function for a singly linked list
// new SinglyLinkedList()
//   set the the _length default 0 and set up no head as default
//   add values that build ew notes
//   search the list for the node at a specifiy position or index
//   delte a note from a specific position
//
// */
//
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// // let node = new Node(10);
// // console.log(node)
//
//
// class SinglyLinkedList {
//   constructor() {
//     this._length = 0;
//     this.head = null;
//   }
//
//   add(value) {                    //same as SinglyLinkedList.prototype.add = function () {}
//     const node = new Node(value)
//     let currentNode = this.head;      //is the list empty?
//
//     if (!currentNode) {
//       this.head = node;
//       this._length++;
//       return node;                    //??if no return, currentNode.next will be null.
//     }
//
//     while (currentNode.next) {        // if the list is not empty
//       currentNode = currentNode.next; //make the end of the list, currentNode assign the last node
//     }
//     currentNode.next = node;          // assing the new node to the last node's next node.
//     this._length++;
//     return node
//   }
//
//   searchNodeAt(position) {            //
//     let currentNode = this.head;
//     this.isValidPosition(position);   // is the position valid?
//     // debugger
//     for ( let i = 1; i < position; i++) {
//       currentNode = currentNode.next  // currentNode will assign from head to the node where position is.
//     return currentNode                // reture the node on that position
//     }
//   }
//
//   removeNodeAt(position) {
//     let currentNode = this.head;
//     let beforeNodeToBeDeleted = null;
//     let nodeToBeDeleted = null;
//     let deletedNode = null;
//     // is the position valid?
//     this.isValidPosition(position)
//     // are we removing the head node?
//     if (position ===1) {
//       this.head = currentNode.next; //overwrite the head with second node.
//       deletedNode = currentNode;
//       this._length--;               // minus one from the length
//       return deletedNode;
//     }
//     // are we removing from the tail?
//     for (let i = 1; i < position; i++) {    //i should be one
//       //store value of currentNode to the beforeNodeToBeDeleted
//       beforeNodeToBeDeleted = currentNode;
//       //assume that next node is the interator could be deleted.
//       nodeToBeDeleted = currentNode.next
//       currentNode = currentNode.next      //final correction.
//     }
//
//     beforeNodeToBeDeleted.next = nodeToBeDeleted.next;  //update the next attribute.
//      deletedNode = nodeToBeDeleted;
//      this._length--;
//
//      return deletedNode;
//   }
//
//   isValidPosition(position) {
//   if (this._length === 0 || position < 1 || position > this._length ) {
//       console.log(`Nothing found at postion ${position}`); //thron new Error('unalble to fine')
//     }
//   }
//
// }
//
// let list = new SinglyLinkedList()
// list.add(10)
// list.add(11)
// list.add(12)
// list.add(13)
// list.removeNodeAt(3)
// console.log(list)
// console.log(list.searchNodeAt(5))
// // console.log(list.removeNodeAt(5))
