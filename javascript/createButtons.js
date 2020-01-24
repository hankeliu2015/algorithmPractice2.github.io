// create an button element with a uniqe id
// bind the event listen click action to the unique button.


// function createButtons() {
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
//     document.body.appendChild(btn);
//   }
//
// }
//

// function createButtons() {
//
//   const n = 5;
//   // var i;
//   for (let i = 0; i < n; i++) {
//     let btn = document.createElement('button');
//
//     btn.appendChild(document.createTextNode('Button' + i));
//
//     btn.addEventListener('click', function(){
//       console.log(i);
//     });
//     document.body.appendChild(btn);
//   }
//   // console.log('what is i:', i)
// }

// bind addEventListener outside the for loop.

function createButtons() {

  const n = 5;
  let btns = [];
  // var i;
  for (let i = 0; i < n; i++) {
    btns[i] = document.createElement('button');
    btns[i].appendChild(document.createTextNode('Button' + i));
    document.body.appendChild(btns[i]);
  }

  btns.forEach((el, index )=> {
    el.addEventListener('click', function(){
      console.log(index);
    });
  })

}


// solution - old:
// function createButtons() {
//
//   const n = 5;
//
//   for (var i = 0; i < n; i++) {
//     let btn = document.createElement('button');
//     // btn.setAttribute("id", `i`);
//     btn.appendChild(document.createTextNode('Button' + i));
//
//     document.body.appendChild(btn);
//
//     btn.addEventListener('click', function(e){
//       e.preventDefault();
//       let buttonText = e.currentTarget.innerText;
//       console.log(buttonText);
//     });
//   }
// }


createButtons();

//output button 0, button 1, button 2, button 3, button4
// the result is no matter which button you click, it will return 5 in console  log.
// need to know why and how to change it to the correct output.
