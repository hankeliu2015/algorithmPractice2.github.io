// set a condition for pm, plus 12 hours for the hours.
// use slice method to get the am, pm. Use slice to get the hours, minutes and seconds, store them in new variable.
// special conditions:
// 12 AM change to 00
// 12 PM still 12 , not become 24


function timeConversion(s) {
  let amPm = s.slice(-2);
  let timeArray = (s.slice(0, s.length -2)).split(/:/)
  let hours = parseInt(timeArray[0]);
  let convertedHours = (parseInt(timeArray[0]) + 12).toString();

  if (amPm === 'AM' && hours === 12) {

    let convertedTime = '00'.concat(':').concat(timeArray[1]).concat(':').concat(timeArray[2]);
    return convertedTime;
  } else if ( amPm === 'PM' && hours === 12) {
    let convertedTime = "12".concat(':').concat(timeArray[1]).concat(':').concat(timeArray[2]);
    return convertedTime;
  } else if ( amPm === 'PM') {
    let convertedTime = convertedHours.concat(':').concat(timeArray[1]).concat(':').concat(timeArray[2]);
    return convertedTime;
  } else {
    let convertedTime = timeArray[0].concat(':').concat(timeArray[1]).concat(':').concat(timeArray[2]);
    return convertedTime;
  }

}
// 
// console.log(timeConversion('07:05:45PM'));
// console.log(timeConversion('12:05:45PM'));
