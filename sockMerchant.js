// first element equal to another element, splice them and add counter.


function sockMerchant(n, ar) {
  let counter = 0
  let arrayLength = ar.length;
  ar.forEach((el, index) => {
    // compare el with the rest of elements, if anyone equal, splice the element from array.
    for (let i = index +1 ; i < arrayLength; i++) {
      if (el === ar[i]) {
        counter++;
        ar.splice(i,1);
        arrayLength--;
        break;
      }
    }
  })

  return counter;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
