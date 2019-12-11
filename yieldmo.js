// create an button element with a uniqe id
// bind the event listen click action to the unique button.


// function yieldmo() {
//
//   const n = 5;
//   for (var i = 0; i < n; i++) {
//     let btn = document.createElement('button');
//
//     btn.appendChild(document.createTextNode('Button' + 1));
//
//     btn.addEventListener('click', function(){
//       console.log(i);
//     });
//
//
//     document.body.appendChild(btn);
//   }
//
// }
//

// solution 1:
function yieldmo() {

  const n = 5;

  for (var i = 0; i < n; i++) {
    let btn = document.createElement('button');
    // btn.setAttribute("id", `i`);
    btn.appendChild(document.createTextNode('Button' + i));

    document.body.appendChild(btn);

    btn.addEventListener('click', function(e){
      e.preventDefault();
      let buttonText = e.currentTarget.innerText;
      console.log(buttonText);
    });
  }
}


yieldmo();

//output button 0, button 1, button 2, button 3, button4
// the result is no matter which button you click, it will return 5 in console  log.
// need to know why and how to change it to the correct output.
