const array1 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce((acc, curr) => acc + curr))
// console.log(array1.reduce((acc, curr) => acc + curr, 5))
// console.log(array1.reduce((acc, curr) => {
//   console.log("acc;", acc + curr)
//   console.log("curr;", curr)
// }))

let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x )
let maxCallback2 = ( max, cur ) => Math.max( max, cur )

let mapReduceSolution = [ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity )

                        
console.log(mapReduceSolution)
