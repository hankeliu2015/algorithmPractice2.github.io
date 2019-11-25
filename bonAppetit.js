// locate the element not suppose to charege, divide by 2.
//  need a check if the bill is fairly split. If not, return the refund value.

// need to swap the element and sum it up. compare if they match.

function bonAppetit(bill, k, b) {
  let refund = bill[k]/2;
  bill.splice(k, 1)
  let annaPay = parseInt(bill.reduce((acc, el) => acc + el, 0)) / 2
  console.log(annaPay)
  if (b !== annaPay ) {
    return refund;
  } else {
    return 'Bon Appetit'
  }
}

console.log(bonAppetit([3,10,2,9], 1, 12))
console.log(bonAppetit([3,10,2,9], 1, 7))
