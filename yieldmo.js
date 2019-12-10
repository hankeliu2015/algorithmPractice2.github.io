const n = 5;
for (var i = 0; i < n; i++) {
  let btn = document.creatElement('button');

  btn.appendChild(document.createTextNode('Button' + 1));

  btn.addEventListenser('click', function(){
    console.log(i);
  });

  document.body.appendChild(btn);
}

//outcome button 0, button 1, button 2, button 3, button4
