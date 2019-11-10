// loop n times. concate # to a declared array.
// first element contains one #, the last element contains n #s.
// return the array.
// need a way to creat empty space. use an loop n-1 times inside.

function stairCase(n) {
  let arr = new Array();

  for (let i = 0; i < n ; i++) {
    debugger
    arr.push(' ')

    for (let j = 0; j < n-1; j++) {
      arr[i] = arr[i].concat(' ');

    }

    arr[i] = arr[i].concat("#");
    console.log(arr[i]);
  }


}

stairCase(5);
