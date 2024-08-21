
if (5 < 4) {
    console.log('Hello world!')
}

let counter = 0

while (counter < 10) {
    console.log('Hello world!', counter)
    counter++
}

console.log('This is after the while loop')


// some random number
let randomNumber = (Math.floor(Math.random() * 10) + 1)// i rolled a dice so always random
let userAns = prompt('Guess a number between 1 - 10')

while (randomNumber != userAns) {
    alert('You got that wrong')
    userAns = prompt('Guess a number between 1 - 10')
}

alert('You got everything right!!')

// When do we use while loops?
// When we don't know how often we need to loop. 
