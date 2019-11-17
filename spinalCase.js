// spit string with space. uppercase char or any not char
// concatenate with -


function spinalCase(str) {
  let strArray = str.split(/(?=[A-Z])|\s|[_]/);
  let spinalStr = '';

  strArray.forEach(el => {
    spinalStr = spinalStr.concat(`-${el.toLowerCase()}`)
    // console.log(el, spinalStr)
  })

  return spinalStr.slice(1);
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
