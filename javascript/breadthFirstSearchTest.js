// function bfs(startingNode, vertices, edges){
//   startingNode.distance = 0
//   let discovered = [startingNode]
//   let discoverOrder = [startingNode]
//   while(discovered.length != 0){
//     let currentNode = discovered.shift()
//     let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
//     discoverOrder = discoverOrder.concat(adjacentNodes);
//     markDistanceAndPredecessor(currentNode, adjacentNodes)
//     discovered = discovered.concat(adjacentNodes)
//   }
//   return discoverOrder
// }
//
// // need to write a test for non-discovered nodes
// function findAdjacent(nodeName, vertices, edges){
//   return edges.filter(function(edge){
//     return edge.includes(nodeName)      // found all edges contains the name
//   }).map(function(edge){
//     return edge.filter(function(node){
//       return (node != nodeName)
//     })[0]                   // return the collection of adjacent stop names.
//   }).map(function(name){    // use above stop names to find vertices object
//     return findNode(name, vertices)
//   }).filter(function(node){ // filter above object items without distance value
//     return node.distance == null;
//   })
// }
//
// // simple incrementing 1 from previous node ( not just root node) and store predecessor object under predecessor key. map() function make sure multi adjacent Nodes got set.
// function markDistanceAndPredecessor(predecessor, adjacentNodes){
//   adjacentNodes.map(function(node){
//     node.distance = predecessor.distance + 1;
//     node.predecessor = predecessor;
//   })
// }
//
// // vertices is array of object. function return that opbject's name matched.
// function findNode(nodeName, vertices){
//   return vertices.find(function(vertex){
//     return vertex.name == nodeName
//   })
// }
//
// let edges = [
// 	['14th&6th', '23rd&6th'],
// 	['23rd&6th', '34th&6th'],
// 	['34th&6th', '28th&Bwy'],
// 	['28th&Bwy', '23rd&Bwy'],
// 	['23rd&Bwy', '14th&Lex'],
// 	['14th&Lex', '23rd&Lex']
// ]
//
// let vertices = [
//   {name: '34th&6th', distance: null, predecessor: null},
//   {name: '23rd&6th', distance: null, predecessor: null},
//   {name: '14th&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null},
//   {name: '23rd&Bwy', distance: null, predecessor: null},
//   {name: '14th&Lex', distance: null, predecessor: null},
//   {name: '23rd&Lex', distance: null, predecessor: null},
// ]
//
// console.log(bfs({name: '34th&6th', distance: null, predecessor: null}, vertices, edges));
