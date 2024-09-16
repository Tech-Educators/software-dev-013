

// Destructuring 

// destructuring assignment

// works on objects and arrays - and it's a way of getting data out of each these succinctly.


// automatically creating varibles that have a value - matching the key/value pair in the object
// when doing objects has to match the name of the varible (on the left side of =) to the object property name (on the right side)
let {games, name, ages} = {
    name: 'Sam',
    games: 'Dota',
    age: 25
}

// console.log(myobjectInfo.games) // Dota

const {color} = {
    date: 25,
    color: 'blue',
    city: 'liverpool'
}

let [one, two, three] = [1,2,4,5]




console.log(ages)


// this function will always recieve an object
// always has a property of numberOne and numberTwo
function sumWithObject({numberOne, numberTwo}) {
    return numberOne + numberTwo
}


let myData = {
    numberOne: 34,
    numberTwo: 234
}
console.log(sumWithObject(myData))