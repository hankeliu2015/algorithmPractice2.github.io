
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  let currentDate = new Date();
  let currentSeconds = currentDate.getSeconds();
  let secondsDegree = ((currentSeconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`

  let currentMin = currentDate.getMinutes();
  let minsDegree = ((currentMin/60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`

  let currenthour = currentDate.getHours();
  let hoursDegree = ((currenthour/60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`


  // console.log(secondsDegree, minsDegree, hoursDegree)
}

setDate();
