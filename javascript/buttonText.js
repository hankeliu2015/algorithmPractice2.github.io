// setting button text via js - solution2:

var b = document.createElement('button');
b.setAttribute('content', 'test content');
b.setAttribute('class', 'btn');
// b.innerHTML = 'Button - Created by JS';
b.appendChild(document.createTextNode('Button - Created by JS'));

var wrapper = document.getElementById("divWrapper");
wrapper.appendChild(b);

//settng a button value using js:
function myFunc(form) {
    form.elements["submit-button"].innerHTML = "New<br>Text";
    return false;
}
