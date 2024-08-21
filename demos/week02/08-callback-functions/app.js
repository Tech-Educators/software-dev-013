// CALLBACK FUNCTIONS



let myArray = [1,2,3]
// FOR EACH tAKES A CALLBACK FUNCTION
myArray.forEach(function(number) {})

// I have a function that will go talk to an imaginary server

function handleFormSubmit(theServerFunction) {
    theServerFunction()
    // goes an talks to server
}

handleFormSubmit(createPet)
// handleFormSubmit(updatePet)


function createPet() {
    console.log(`.... new pet created!`)
}

function updatePet() {
    console.log(`.... pet info updated!`)
}


function calculate(a, b, theOperatorFunction) {
    return theOperatorFunction(a, b)
}

calculate(10, 10, add) // 20
calculate(15, 5, theFunctiondivide) // 3
calculate(312123, 3423423, subtract) // -3111300
calculate(123321, 2, multiply) // 246642



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function theFunctiondivide(a,b) {
    return a / b
}



// there are a few ways to write functions

// there is no practical difference between them (don't quote me on this later)

// function declaration
function functionName() {

}

// or ANON functions

calculate(function() {
    console.log('Something... this is a callback function that calculate() will call for me. im defining it here')
})

// anon arrow function
calculate(() => {
    console.log('Something... this is a callback function that calculate() will call for me. im defining it here')
})

// function expression 
const findLog = function() {

}

// arrow functions 

const findButterfly = () => {
    console.log(`... finding butterfly`)
}

findButterfly()