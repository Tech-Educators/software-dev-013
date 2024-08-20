
/* we need to listen for the event happening
event handlers (what is the code we need to run when that event happens. )
*/

/* 1) Select the element by its id or query selector*/

const button = document.getElementById('simple-demo')

// console.log(button, backGroundButton)


// Attach an event listener 

// add event listener takes two argument
// first param is the event you want listen for - always in ''s
// second params is a function to run.

// addListener takes as its second argument what we call a 'callback function' - a function passes to another function as an argument.

// ANON function version
// button.addEventListener('click', function() {
//     console.log('You clicked me!')
// })

// PASSING A FUNCTION VERSION

// button.addEventListener('click', logSomethingToConsole)

button.addEventListener('click', function() {
    logParamsToConsole('Hello world!')
})

// WHAT ABOUT IF I HAVE ARUGMENTS/PARAMS TO DO IN THE FUNCTION

function logSomethingToConsole() {
    console.log('Something')
}

function logParamsToConsole(string) {
    console.log(string)
}


// lets build an actual counter

const counter = document.getElementById('counter')
let count = 0;

counter.addEventListener('click', function() {
    count+= 1
    counter.textContent = ` You've clicked ${count} times`
})


// button to changethe background colour:

const backGroundButton = document.querySelector('#bg-colour-button')

backGroundButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow'
} )