// locate the element not suppose to charege, divide by 2.
//  need a check if the bill is fairly split. If not, return the refund value.

// need to swap the element and sum it up. compare if they match.

function bonAppetit(bill, k, b) {
  let refund = bill[k]/2;
  bill.splice(k, 1)
  if (b !== bill.reduce((acc, el) => acc + el, 0) / 2) {
    return refund;
  };
}

console.log(bonAppetit([3,10,2,9], 1, 12))
