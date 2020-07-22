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
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
// 	{name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
// 	{name: '23rd&Lex', discovered: null}
// ]
//
// function depthFirstSearch(rootNode, vertices, edges){
// 		let stack = []
// 		stack.push(rootNode)      // start the visited stack.
// 		let visited = [rootNode]
//     let counter = 1;  //counter for the while loop
//
// 		while(stack.length != 0){ // the loop stop when stack become empty.
// 			console.log(`Loop ${counter++}: first element in stack is ${stack[0].name}`)
//       // debugger;
// 			let v = stack.pop()    // take out the vertices after finding its adjacent vertices.
// 			if(!v.discovered){
// 				v.discovered = true   // start to visite the adjacent vertices, mark the current vertices discovered.
//
// 				findAdjacent(v.name, vertices, edges).forEach(function(node){
// 					visited.push(node)   // have all the visited vertices in order
// 					stack.push(node)     // add the visited vertices to the stack before looking for their adjacent vertices
// 				})
// 			}
// 		}
// 		return visited;
// }
//
// // use a nodeName convert the edges contains it into vertices objects
//
// function findAdjacent(nodeName,  vertices, edges){
//   return edges.filter(function(edge){
//     return edge.includes(nodeName)     // filter out edge contains the nodeName
//   }).map(function(edge){              //
//     return edge.filter(function(node){  // filter out the node name, only left the adjacent noade name
//       return (node != nodeName)
//     })[0]                             // get the value not the array.
//   }).map(function(name){
//     return findNode(name, vertices)   // use the adjacent node name to find the node/verticex
//   }).filter(function(node){
// 		return !node.discovered           // filter out those are the root of current vertice.
// 	})
// }
//
// function findNode(nodeName, vertices){  // convertt the name into vertice object.
//   return vertices.find(function(vertex){
//     return vertex.name == nodeName
//   })
// }
//
// let rootNode = {name: '34th&6th', discovered: null};
// let n34 = '34th&6th';
// let n14 = '14th&6th';
//
// // console.log(findNode(n34, vertices));
// // console.log(findNode(n14, vertices));
// //
// // console.log(findAdjacent(n34, vertices, edges))
// // console.log(findAdjacent(n14, vertices, edges))
//
// console.log(depthFirstSearch(rootNode, vertices, edges))
