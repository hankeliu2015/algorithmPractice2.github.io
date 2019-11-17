
// my solutions:
// spit string with space. uppercase char or underscore into array
// concate the array back with dash and lower case each element.
// remove the first string, which is a dash.

// function spinalCase(str) {
//   let strArray = str.split(/(?=[A-Z])|[\s+]|[_+]/);
//   let spinalStr = '';
//
//   strArray.forEach(el => {
//     spinalStr = spinalStr.concat(`-${el.toLowerCase()}`)
//   })
//
//   return spinalStr.slice(1);
// }

//solution 1
// replace the string's uppercase with lowerse with space.
// set the patter of space and underscore with g option
// reture the string, replaced pattern with dash, set to lowercase.

function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/, "$1 $2");
  console.log(str);
  return str.replace(regex, '-').toLowerCase();

}



console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
