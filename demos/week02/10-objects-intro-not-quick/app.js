console.log('All set up!')

// Complex Data types

let arraInfo = ['Sam', 25, 'Liverpool', ['Gaming', 'Art', 'Programming!', [[['Elden Ring']]]]]

console.log(arraInfo.length) // 4
console.log(arraInfo[3])  // ['Gaming', 'Art', 'Programming!']
console.log(arraInfo[3][3][0][0][0])  // Elden Ring

// OBJECTS

// Objects are made out of key:value pairs
// so some sort of name for the key, and the value you want it to be
let myInfoObject = {
    name: 'Sam',
    age: 25,
    city: 'Liverpool',
    hobbies: ['Gaming', 'Art', 'Programming']
}

// how to work with objects: 
// DOT NOTATION
console.log(myInfoObject.name)
console.log(myInfoObject.age)
console.log(myInfoObject.hobbies[1])

// ANOTHER KIND?
// PROPERTY ACCESSOR
console.log(myInfoObject['city']) // Sam


console.log(`My name is ${myInfoObject.name}, I live in ${myInfoObject.city} and I like playing ${myInfoObject.hobbies[1]}`)
