console.log('Working')

const name = 'Sam'
const coolNumber = 12

// square brackets,
// values seperated by commas.
let myFirstArray = ['Paris', 'Rome', 'London', 23, 22, 11, true, false]

console.log(myFirstArray[1])

// 
let myCoolArray = ['Darcy', 'Diesel', 'Jiji', 'Tigger', 'Fenton', 'Sir Lanelot', 'Scruffles']

console.log('We use square brackets to pick certain elements out of the array', myCoolArray[4])


// will tell me how many elements are in the array.
myCoolArray.length

// how do I get the last element of an array?

console.log(myCoolArray[myCoolArray.length - 1])




// ADDING ELEMENTS TO AN ARRAY

let farAwayPlaces = ['Maldieves', 'Japan', 'Blackpool 🤔', 'Perth', 'Liverpool', 'Zimbabwe', 'Cape Town', 'Iceland', 'Jamaica', 'Singapore']

farAwayPlaces[100] = 'Brazil'


// arrray method - push

farAwayPlaces.push(3242)
