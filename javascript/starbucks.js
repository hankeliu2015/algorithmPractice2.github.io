// // Given a string of all lowercase letters, find the lexicographically largest substring. Assume valid input.
// // function LexicographicalMaxString(str) {
// //
// // }
// //
// // console.log(LexicographicalMaxString("ababaa"))
//
// // Lowest Common Acestor solution 1

// lowestCommonAncestor = function(root, p, q) {
//   if (!root)
//     return null;
//
//   if (root.data === p.data || root.data === q.data)
//     return root;
//
//   var left = lowestCommonAncestor(root.left, p, q);
//   var right = lowestCommonAncestor(root.right, p, q);
//
//   if (left && right)
//     return root;
//   else if (left)
//     return left;
//   else
//     return right;
// };

//// solution 2
// function lowestCommonAncestor(root, p, q) {
//   if (p.data < root.data && q.data < root.data){
//     return lowestCommonAncestor(root.left, p, q);
//   } else if (p.data > root.data && q.data > root.data) {
//     return lowestCommonAncestor(root.right, p, q)
//   } else {
//     return root;
//   }
// }

// let n5 = { data: 5, left: null, right: null};
// let n4 =  {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}};
// let n2 = {data: 2, left: null, right: null};
// let n1 = {data: 1,
//   right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
//   left: null};
// let n8 = {data: 8, left: null, right: null}
//
//
// let rootNode3 = {data: 6,
//                   right: {data: 8, left: null, right: null},
//                   left:  {data: 1,
//                     right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
//                     left: null}
//                 };
//
// console.log(lowestCommonAncestor(rootNode3, n1, n2))
// console.log(lowestCommonAncestor(rootNode3, n2, n8))
// console.log(lowestCommonAncestor(rootNode3, n2, n5))

// //testing
//   6
//  / \
// 1   8
//  \
//   4
//  / \
// 2   5
