// // Given a string of all lowercase letters, find the lexicographically largest substring. Assume valid input.
// // function LexicographicalMaxString(str) {
// //
// // }
// //
// // console.log(LexicographicalMaxString("ababaa"))
//
// lowestCommonAncestor = function(root, p, q) {
//   if (!root)
//     return null;
//
//   if (root === p || root === q)
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
//
// // //testing
// let n1 = { data: 5, left: null, right: null};
// let n2 = {data: 2, left: null, right: null};
//
// let rootNode3 = {data: 6,
//                   right: {data: 8, left: null, right: null},
//                   left:  {data: 1,
//                     right: {data: 4, right: { data: 5, left: null, right: null}, left: {data: 2, left: null, right: null}},
//                     left: null}
//                 };
//
// console.log(lowestCommonAncestor(rootNode3, n1, n2))
