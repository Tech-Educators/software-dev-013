console.log('Hello word!')

// functions!

// how to prepare (declare) a function.
// the word function and then the name *you* want to give the function.
// then add parenthesis
function sayHello() {
    // the code that our function does goes inside the {}'s
    console.log('Hello')
}
console.log('Hello TWO')
// INVOKING/CALL the function
// just type the name of function followed by ()'s 
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()


// basic functions pratice

// write a function that adds three numbers together and console.logs them (can be anything three numbers of your choice)

// more adanced!
// function sum(a,b,c) {
//     // blah
// }

// sum(Math.floor(Math.random() * 10),3,4)

function coolUnicorns() {
    console.log(123123 + 34234 + 34234)
}
// actually run that code
coolUnicorns()


// write a function to greet obiWan. (correct one)

function amazingGreetingOfHellos() {
    console.log('Greetings General Kenobi')
}

amazingGreetingOfHellos()

// write a function that says goodbye in a different language. 

function sayGoodbyeToTheWorld() {
    console.log(`Bài bài, χαίρετε, Do widzenia, Goodbye, 01000111 01101111 01101111 01100100 01100010 01111001 01100101,sinna bit, in a bit mayte`)
}

sayGoodbyeToTheWorld()


// function Parameters!!!!


function asdfasdfasfd(a, b) {
    console.log(a + b)
}

// give a function an argument!
asdfasdfasfd(10, 15) // 10, 25
asdfasdfasfd(1000, 15000) // 1600000


function greet(name) {
    console.log(`Hello, ${name}`)
}

greet('Sam')
greet('Kyle')
greet('Shaun')


/*
        RETURNING VALUES FROM FUNCTIONS
*/
// function somethingSweet() {
//     return 'Rascals'
// }

// function somethingBitter() {
//     // side effect
//     console.log('Lime')
// }
// console.log(somethingSweet())
// console.log(somethingBitter())


// function shoppingList() {
//     // buy eggs and bread
// }



function addsTwoDucks(a ,b) {
    a + b
}

function addsTwoOranges(a, b) {
    return a + b
}

console.log(addsTwoDucks(10,10)) // undefined

console.log(addsTwoOranges(30,30)) // 60 is console. 




function thisISCool() {
    return 5
}

function thisIsEvenCooler(a) {
    console.log(a + 10)
    return a + b
}

console.log(thisIsEvenCooler(thisISCool()))