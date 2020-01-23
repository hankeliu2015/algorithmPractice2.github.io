// solution 1:

// for (var i = 1; i <= 100; i++) {
// 	var isDividibleByThree = i % 3 === 0;
// 	var isDivisibleByFive = i % 5 === 0;
//
// 	if (isDividibleByThree && isDivisibleByFive) {
// 		console.log('FizzBuzz');
// 	}
// 	else if (isDividibleByThree) {
// 		console.log('Fizz');
// 	}
// 	else if (isDivisibleByFive) {
// 		console.log('Buzz');
// 	}
// 	else {
// 		console.log(i);
// 	}
// }

//solution 2:
// var i = 1,
// 	f = 'Fizz',
// 	b = 'Buzz',
// 	out = '';
// for (; i <= 100; i++) {
// 	out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;

//// if divive by 3, it move to divid by 5. if divid by 5 also true, return f and b.
//// if not divided by 5, it is fizz.
//// if not divided by 3, it will jump to the second : , continue the conditions.


// 	console.log(out);
// }

// solution 3:
// for(i=1;i<=100;i++) console.log(((i%3)?(i%5)?i:'Buzz':(i%5)?'Fizz':'FizzBuzz'));

// solutin 4:
// for (var i = 1; i <= 100; i++) console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i)

// solution 5:
// i=0;while(i<100)i++,console.log([i,'fizz','buzz','fizzbuzz'][(i%3==0)+2*(i%5==0)]);
