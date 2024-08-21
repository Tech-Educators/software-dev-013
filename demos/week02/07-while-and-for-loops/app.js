

if (5 < 4) {
    console.log('Hello world!')
}

let counter = 0

while (counter < 10) {
    console.log('Hello world!', counter)
    counter++
}

console.log('This is after the while loop')


//some random number
// (Math.floor(Math.random() * 10) + 1)
let randomNumber = 6// i rolled a dice so always random
let userAns = prompt('Guess a number between 1 - 10')

while (randomNumber != userAns) {
    alert('You got that wrong')
    userAns = prompt('Guess a number between 1 - 10')
}

alert('You got everything right!!')

// When do we use while loops?
// When we don't know how often we need to loop. 



/*

------------------ FOR LOOPS ------------------------

*/

// for (counter; a condition; somethingtoUpdateTheConditon) {
//     // whatever I want to do.
// }
// 1) declare a variable in our parenthesis followed by ;'s
// 2) set up a conditon, followed by ;'s
for (let counter = 0; counter < 5; counter++) {
    // logs the value of the 'counter' varible
    console.log(`the value of ${counter}`)
}

console.log(counter)

// we only intialize the variable counter once at the beginning.

/// > Check condition
/// > run the code in the {}\s
/// > update varible/afterthought.


// run whatever else to do. 

// the value of counter 0
// the value of counter 1
// the value of counter 2
// the value of counter 3
// the value of counter 4


// ARRAYS + FOR LOOPS <3

const bugs = ['Goggas', 'jumping spiders', 'ladybug', 'earwig']

for (let i = 0; i < bugs.length; i++) {
    console.log(`This is a bug: ${bugs[i]}, ${i}`)
}

// `This is a bug: Goggas
// `This is a bug: jumping spiders
// `This is a bug: ladybug
// `This is a bug: earwig

const otters = ['Daisy', 'Otterly', 'Olive', 'Phil']


// A new kind of loop - FOR OF loops

for (let singleOtter of otters) {
    console.log(singleOtter)
}

// FOR EACH - we call this directly on the array we want to loop throught
// 'array method'

// for Each takes a function as an argument.
// that function (the one that for each takes) will have a parameter representing the single element in the current loop. 
otters.forEach(function(otterName, unicorns) {
    console.log(`This is being logged with forEach: ${otterName} is the cutest!`, unicorns)
})