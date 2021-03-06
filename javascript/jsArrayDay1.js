
    // ## Array Cardio Day 1

    // Some data we can work with

    // const inventors = [
    //   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    // ];
    //
    // const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // let bornAt1500s = inventors.filter(inventor => {
    //   if (inventor.year >= 1500 && inventor.year < 1600) {
    //     return true;
    //   }
    // })
    //
    // console.table(bornAt1500s)
    //
    // // Array.prototype.map()
    // // 2. Give us an array of the inventors first and last names
    //
    // let fullNamesArr = inventors.map(inventor => {
    //     return `${inventor.first} ${inventor.last}`
    //   }
    // )
    //
    // console.table(fullNamesArr)
    //
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // let birthDateSort = inventors.sort((a,b) => {
    //   return (a.year - b.year)
    // })
    //
    // console.table(birthDateSort)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    // get each person's years of life and accumulate them.

    // let totalYears = inventors.reduce((acc, inventor) => {
    //   console.log(inventor.passed - inventor.year)
    //   return acc = acc + (inventor.passed - inventor.year)
    // }, 0)
    //
    // console.log(totalYears)

    // 5. Sort the inventors by years lived
    // let lifeSort = inventors.sort((a, b) => {
    //   console.log(a.first, a.last, a.passed - a.year) // get the name and lived years.
    //   // return a.passed - b.passed
    //   if ((a.passed - a.year) > (b.passed - b.passed)) {
    //     return 1
    //   } else {
    //     return -1
    //   };
    //
    //   const lastGuy = a.passed - a.year;
    //   const nextGuy = b.passed - a.year;
    //   if (lastGuy > nextGuy) {
    //     return -1
    //   } else {
    //     return 1
    //   }
    // })
    //
    // console.table(lifeSort)

    // 5. sort  the inventors by years lived.
    // const oldest = inventors.sort(function(a, b) {
    //   const lastInventor = a.passed - a.year;
    //   const nextInventor = b.passed - b.year;
    //   return lastInventor > nextInventor ? -1 : 1;  // from hight to low. -1 goes first
    // });
    // console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // let streetLinks = document.querySelectorAll(".mw-category a");
    // let linksArr = Array.from(streetLinks);
    // let deStringArr = linksArr.map(link => link.text).filter(streetName => streetName.includes(' de '))

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // let lastNameSort = people.sort((a,b) => {
    //   let {aLast, aFirst} = a.split(', ');
    //   let {bLast, bFirst} = b.split(', ');
    //   // console.log(a.split(",")[0])
    //   return aLast > bLast ? -1 : 1;
    // })
    // console.table(lastNameSort)

    // 8. Reduce Exercise
    // Sum up the instances of each of these

    // set the intial value as a hash {}. user acc.el as the key, the Occurence as the value.
    // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    //
    // let instanceSum = data.reduce((acc, el) => {
    //   if (!acc[el]) {
    //     acc[el] = 1;
    //   } else {
    //     acc[el] ++
    //   }
    //   return acc
    // }, {})
    //
    // console.table(instanceSum)
