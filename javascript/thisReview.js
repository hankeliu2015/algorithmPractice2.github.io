

// THIS and Arrow function review amd examples:
this.character = 'Daisy'

const game = {
  character: 'Mario',

  details: {
    	character: 'Yoshi',

   	  characterName: function() {
      		return this.character
    	},

      arrowCharacterName: () => this.character
  	}
}
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

function arrowTest() {
  let obj = {
    test: () => console.log(this)
  }
  return obj
}

// console.log(arrowTest())
// { }


// THIS Deep dive

let person = {
    greet: function() {
        // console.log('hello');
        // return this;
       const otherFunction = () => {
          // this == person still, due to the arrow function
          return this;
        };
      return otherFunction()
    }
};

// console.log(typeof person.greet);

// console.log(person.greet())
// console.log(person.greet() === person)

let greetFn = person.greet;

// console.log(greetFn() === person);

// console.log(person.greet())
