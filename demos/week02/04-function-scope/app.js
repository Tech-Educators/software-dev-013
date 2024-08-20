// this is global scope
// we can use these whereever we want.
let globalScope = 'foo bar'
const stillGlobal = 'bar foo'

function hello() {
    let x = 10
    console.log(x)
    console.log('Hello')
}

hello()

// we cannot console.log x, as it is not in the global scope.
// console.log(x)


// take a number and add 2 to it
// and times by 90

function addTwoTimesNinety(number) {
    return (number + 2) * 90
}

// turns that number into a string
// with some cool ascii art.s

function numberToAsciiArt(number) {
    return `(҂◡_◡) ᕤ ${number} is the best there ever was`
}


console.log(numberToAsciiArt(addTwoTimesNinety(40)))