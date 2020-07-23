//// bind(this) review | event match user interests

// class Event {
//   constructor(title, keywords) {
//     this.title = title;
//     this.keywords = keywords;
//   }
// }
//
// class User {
//   constructor(name, interests) {
//     this.name = name;
//     this.interests = interests;
//   }
//
//   matchInterests(event) {     // .some() return true or false, no need filter
//     return event.keywords.some(function(keyword) {
//       return this.interests.includes(keyword);
//     }.bind(this))
//   }
//
//   matchInterests2(event) {
//     return event.keywords.some(function(keyword) {
//       return this.interests.includes(keyword);
//     }, this)
//   }
//   matchInterests3(event) {
//     self = this;
//     return event.keywords.some(function(keyword) {
//       return self.interests.includes(keyword);
//     })
//   }
//   matchInterests4(event) {
//     return event.keywords.some(keyword => self.interests.includes(keyword))
//   }
// } // end of User class
//
// let billy = new User('Billy', ["music", 'art', 'movies'])
// let freeMusic = new Event('Free Show', ['music', 'art', 'outdoor'])
//
// console.log(billy.matchInterests(freeMusic));
// console.log(billy.matchInterests2(freeMusic));
// console.log(billy.matchInterests3(freeMusic));
// console.log(billy.matchInterests4(freeMusic));


/// user greet customer bind(this) exmaple
// Inside an object method, this refers to the object that received the method call
// A JavaScript method is a property on an object that points to a function.

// let person = {
//   greet: function() {
//     console.log('hello')
//     return this;
//   }
// }

// console.log(person.greet());
// let greetFn = person.greet;
// console.log(greetFn)
// console.log(greetFn() === person)
// console.log(person.greet() === person)

// let greetType = typeof person.greet;
// console.log(greetType)


// THIS and Arrow function review amd examples:
// this.character = 'Daisy'
//
// const game = {
//   character: 'Mario',
//
//   details: {
//     	character: 'Yoshi',
//
//    	  characterName: function() {
//       		return this.character
//     	},
//
//       arrowCharacterName: () => this.character
//   	}
// }
// console.log(game.details.characterName())
// // 'Yoshi'
// console.log(game.details.characterName.call(game))
// // "Mario"
// console.log(game.details.characterName.bind(game)())
// // "Mario"
// console.log(game.details.arrowCharacterName.call(game.details))
// // we got "Daisy"
// console.log(game.details.arrowCharacterName.call())
// got “Daisy” too.

// function arrowTest() {
//   let obj = {
//     test: () => console.log(this)
//   }
//   return obj
// }

// console.log(arrowTest())
// { }


// THIS Deep dive

// let person = {
//     greet: function() {
//         // console.log('hello');
//         // return this;
//        const otherFunction = () => {
//           // this == person still, due to the arrow function
//           return this;
//         };
//       return otherFunction()
//     }
// };

// console.log(typeof person.greet);

// console.log(person.greet())
// console.log(person.greet() === person)

// let greetFn = person.greet;

// console.log(greetFn() === person);

// console.log(person.greet())
