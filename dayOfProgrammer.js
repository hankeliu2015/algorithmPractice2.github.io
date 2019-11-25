// locate the 256th day of the year in Russia between 1700 to 2700
// in 1918, Jan 31st next day is Feb 14th.

// first condition for Georgina calendar, year greater than 1918
// georgian calendar, leap year divived by 400 or divided by 4 but not 100.
// 31, 28/29, 31, 30, 31, etc
// calcuate the first 2 months, then iterate the rest of the month.
// need another condition to calculation on the days left of the days within a month(10/31), and stop the loop.
//
// use days left for while loop. days less than 30 or 31 in certain month.
// if the month less equal than 7, the odd month is 31 days.
// if the month greater equal than 8, the odd month is 30 days.
// minius from 256 days base on month and need to stop the loop when days less than 31/30.
//make a condition on days equal 0, it will be the 31st/30th of the prvious month.

// 2nd condition for Julian calendar. year less than 1918.
// Julian calendar, leap year divied by 4


function dayOfProgrammer(year) {
  let days = 256;
  let month = 0;
  // georgian year
  //leap year
  if (year > 1918) {
    if (year % 400 ===0 || (year%4 ===0 && year%100 !==0) ){
      days = days - 31 - 29;

      for (let i = 3; i <= 12; i++) {
        if (days >= 31 && (i <=7 && i % 2 !== 0)) {
          days -= 31;
        } else if (days >= 30 && (i <=7 && i % 2 === 0)) {
          days -= 30;
        } else if (days >= 31 && (i >= 8 && i % 2 === 0)) {
          days -= 31;
          month = i;
        } else if (days >= 30 && (i >= 8 && i % 2 !== 0)) {
          days -= 30;
          month = i;
          // need to decide the month is 31 or 30 to reset the days from 0 of previous month
        } else if (days === 0 && (i >= 8 && i % 2 === 0) ) {
          days = 30;
          month = i - 1;
        } else if (days === 0 && (i >= 8 && i % 2 !== 0) ) {
          days = 31;
          month = i - 1;
        }
      }
    // normal year
    }else {
      days = days - 31 - 28;
      // more conditions here...
    }
  }

  //the year julian calendar changed to georgian calendar
  else if (year = 1918) {

  }
  // the years in Julian calendar
  else if (year < 1918) {

  }

  console.log(days, month, year)
}

console.log(dayOfProgrammer(1984))
