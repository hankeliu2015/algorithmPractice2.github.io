window.addEventListener('keydown', function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  console.log(audio);
  if(!audio) { return ;}  //stop the function from running
  audio.currentTime = 0;
  audio.play();
})
