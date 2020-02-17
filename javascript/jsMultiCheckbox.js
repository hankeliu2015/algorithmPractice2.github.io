const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
 // console.log(checkboxes)


let lastChecked;

function handleCheck(e){
  // debugger;
  let inBetween = false;
  if (e.shiftKey && this.checked) { //  loop over each checkbox
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween; //when it is true, become false, vice versa.
        console.log("start to check inBetween")
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this; //store the clicked input el.
}
checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck));
