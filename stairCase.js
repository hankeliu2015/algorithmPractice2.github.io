// loop n times. concate # to a declared array.
// first element contains one #, the last element contains n #s.
// return the array.
// need a way to creat empty space. use an loop n-1 times inside.

function stairCase(n) {
  let arr = new Array();

  for (let i = 0; i < n ; i++) {

    for (let j = 0; j < n-i-1; j++) {
      // arr[i].push('');
      // arr[i] = arr[i].concat(' ');
      process.stdout.write(" ");
    }

    for (let k = 0; k < i+1; k++) {
      // arr[i] = arr[i].concat("#");
      process.stdout.write("#");
    }
    process.stdout.write("\n");
    // console.log(arr[i]);
  }

}

stairCase(10);
