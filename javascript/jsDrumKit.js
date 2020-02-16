
function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  // console.log(audio);
  // console.log(key);
  
  if(!audio) { return ;}  //stop the function from running
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName != 'transform') return;  // use transform property to filter out other transition events.

  // console.log(e.propertyName)
  this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));  // will have all 6 transition events.

window.addEventListener('keydown', playSound);
