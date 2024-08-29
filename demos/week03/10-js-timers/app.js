// console.log('Hello')

// TIMEOUT 

// Basic format - 
// basicTimeout that runs something after 5 second
setTimeout(function() {}, 5000) // this function does nothing because it's empty

// lets write a function that actually does something

setTimeout(function() {
    console.log('I have waited for this moment...')
}, 5000)



// LOOPing through array over and over
// const places = ['France', 'Germany', 'England', 'Foo']

// let counter = 0
// setInterval(function() {
//     if (counter === places.length) {
//         counter = 0 
//     }
//     console.log(places[counter])
//     counter = counter + 1
// }, 1000)


function threaten() {
    console.log('I have waited a long time.... >:)')
}

setTimeout(threaten, 6000)

console.log('Hello')

// INTERVAL

// a function to run, and how often to run that function
setInterval(function() {}, 1000) // doesn't do anything because it's empty

// actual example

setInterval(function() {
    console.log(`ᕕ(╭ರ╭ ͟ʖ╮•́)⊃¤=(————-`)
}, 1000)