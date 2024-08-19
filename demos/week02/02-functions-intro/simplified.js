// declaring a function

function functionNameDoesntMatter() {
    // body of the function
}

// calling the function

functionNameDoesntMatter()

// using parameters 

function addsTwoParametersTogether(param1, param2) {
    return param1 + param2
}

// refered to as 'providing arguments to the function'
// take 'argumeents outside'
addsTwoParametersTogether(10, 15)

// returning values

// tell the function to give the final result back to where it was called - we can give variables a value, or console.log the result of a function call for examples


function quotes(quote) {
    return quote
}
quotes(`When ya hit rock bottom - it provides an excellent foundation for growth!`)
quotes(`bang and the dirt is gone`)
quotes(`release the hounds!`)

console.log(returnsACatchphrase(), returnsACatchphrase2(), returnsACatchphrase3())