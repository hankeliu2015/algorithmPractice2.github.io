
function findOddOccurence(arr) {
  var arrHash = {};
  for (var i = 0; i < arr.length; i++) {
    if (arrHash[arr[i]] !== undefined) {
      arrHash[arr[i]] ++
    } else {
      arrHash[arr[i]] = 1
    }
  }
  console.log(arrHash)
  let counter = 0
  for ( var key in arrHash) {

    if (parseInt(key) % 2 !== 0) {
      console.log("inside condition: ", key);
      counter += arrHash[key]
    }
  }
  return counter;
}

const input = [1,2,4,2,2,4,1,4,3,3,3];
console.log(findOddOccurence(input))
