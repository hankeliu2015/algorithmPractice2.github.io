// spit string with space. uppercase char or any not char
// concatenate with -


function spinalCase(str) {
  let strArray = str.split(/(?=[A-Z])/);
  let spinalStr = '';

  strArray.forEach(el => {
    spinalStr = spinalStr.concat(`-${el}`)
    // debugger

    console.log(el, spinalStr)
  })



  return spinalStr.slice(1);
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
