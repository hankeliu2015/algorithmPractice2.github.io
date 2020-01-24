document.body.onload = addElement;

function addElement () {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

// js manipulate DOM test:
var container = document.getElementById("container");
  container.innerHTML = "Added New Content to this empty div container!";

// create ul and ui

let divForUl = document.createElement('div');
divForUl.innerHTML = 'Daily Tasks:';
document.body.appendChild(divForUl);


let ul = document.createElement('ul');

// document.body.appendChild(ul);

for (let i = 0 ; i < 3 ; i ++) {
  let ol = document.createElement('ol');
  ol.innerHTML = `Task ${i}`;
  ul.appendChild(ol);
}
divForUl.appendChild(ul);
