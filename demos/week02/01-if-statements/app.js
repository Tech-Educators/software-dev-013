console.log('Hello world!')

/* code runs top to bottom */

// console is just a place for devs to see the value of things they're trying to look at. 


// IF STATEMENTS

// let playerName = 'Gamora'
// playerName = 'Bob'
// const evilVillan = 'Jeff'
// let playerTwo = 'Sam'

// const playerHasKey = false

// console.log(evilVillan)

/*

Anatomy of an if Statement!!

if (condition) {
    // do something
}

*/

/* 

 = assigment operator
 == equality operator (is the value the same?)
 === strict equality operator (is the value and the data type the same?)
 !=  not equal to

 || - OR symbol (one of the things is true)
 && - AND (both things are true)

 `` - backticks
 `${variableName}` - template literals (dones't have to variblaes, any 'statement' will do (including maths, function calls, whatever))

 < - less than 
 > - greater than

 <= - less than or equal to
 >= - greater than or equal to
*/

const playerHasKey = false
let didDefeatDragon = true
let playerName = 'Gamora'
playerName = 'Bob'
const evilVillan = 'Jeff'
let playerTwo = 'Sam'

if (playerHasKey && didDefeatDragon) {
    console.log('The player ventures forth into the dungeon, dragon heart in hand')
} else if (playerHasKey) {
    console.log(`The door squeeks open: ${playerName} feels a cool rush of wind and a sense of dread.`)
} else if (didDefeatDragon) {
    console.log(`The door refuses to open: in the distance, a loud roar. ${evilVillan} approaches`)
}   else {
    console.log('The player cannot get the door open.')
}

if ('Sam' != 'Sam' && didDefeatDragon) {
    console.log(`${playerTwo} steals the dragon heart!`)
} else {
    console.log(`${playerTwo} joins the battle!`)
}


if (9 >= 9) {
    console.log('yes')
}
console.log("This is after the if statement!")

let x = 5
// single quotes =
console.log('this is a string of characters! ' + x)

console.log(`this is a string of characters x ${x}`)


// U, PG, 12, 15, and 18
let age = prompt('What is your age?');
let movieRating = "12";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age == 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  } else if (movieRating == '12') {
    console.log('You cant watch this pg 12 movie!')
  } else if (movieRating == 'U') {
    console.log('You can watch this U Rated movie')
  }
} else if (age < 17) {

}