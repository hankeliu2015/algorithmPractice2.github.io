
// only round the grade greater or equal 38.
// remainder of 5 is 0, stay the same.
// greater or equal than 3, plus the remainder.
// the single digit minus 8 less than 3 or minus 5 greater than 3.


// function gradingStudents(grades) {
//   for (let i = 0; i < grades.length; i ++) {    // i need to start from 0 to pass in the lab.
//     if (grades[i] < 38){
//       grades[i] = grades[i];
//     } else if (grades[i] % 5 >= 3)  {
//       grades[i] = grades[i] + 5 - grades[i] % 5
//     }
//   }
//   for (let i = 1; i < grades.length; i ++) {
//     process.stdout.write(`${grades[i]} \n`)
//   }
//   return grades;
// }
//
// console.log(gradingStudents([4,73,67,38,33]));

// console.log(gradingStudents([73, 67, 38, 33]))

// other solutions, untested.
// function gradingStudents(grades) {
// 	let finalMarks = [];
// 	grades.forEach(grade => {
// 		grade < 38 || grade % 5 < 3 ? finalMarks.push(grade) : finalMarks.push(Math.ceil(grade/5)*5)
// 	})
// 	return finalMarks;
// }

// function gradingStudents(grades) {
//     // Write your code here
//     let finalGrades = new Array(grades.length);
//     for (let x = 0; x <= grades.length - 1; x++) {
//         if (grades[x] >= 38 && (grades[x] + 2) % 5 === 0) {
//             finalGrades[x] = grades[x] + 2;
//         } else if (grades[x] === 99 || (grades[x] >= 38 && (grades[x] + 1) % 5 === 0)) {
//             finalGrades[x] = grades[x] + 1;
//         } else {
//             finalGrades[x] = grades[x];
//         }
//     }
//
//     return finalGrades;
// }
//
// function gradingStudents(grades){
//     return grades.map((n) => {
//         let diff = 5 - (n % 5);
//         if(diff < 3 && n >= 38) {
//             n += diff;
//         }
//
//         return n;
//     })
// }
