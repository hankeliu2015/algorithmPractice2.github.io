// the array inside array methods has some issue, even it worked on my node.
// hackerRank testing environment might have issue on that.

function stairCase(n) {

  for (let i = 0; i < n ; i++) {

    for (let j = 0; j < n-i-1; j++) {
      process.stdout.write(" ");
    }

    for (let k = 0; k < i+1; k++) {
      process.stdout.write("#");
    }

    process.stdout.write("\n");
  }

}

// stairCase(10);
