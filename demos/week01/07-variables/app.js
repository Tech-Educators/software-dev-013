//usually we write the variable names with camelcase
//when you name variables, make sure you use at least two words

console.log("Helloooooooooooooo, can you hear me???????");
console.log("Is this really working?????????");

// variables
//we declare variables with let and const
let myName = "Manny";
const myLocation = "Norwich";

console.log(myName);
console.log(myLocation);

//we can change the value of a variable
//we don't re-declare the variable
//! The browser reads our JS file top to bottom

myName = "Cordelia";

console.log(myName);

//this will error in the console because I cannot assign a new value to a const variable
// myLocation = "Leicester";

// console.log(myLocation);

//we can concatenate variables!!!
console.log("My name is " + myName + " and I live in " + myLocation);

//we can also use template literals
//we use backticks (``)
console.log(`My name is ${myName} and I live in ${myLocation}`);

//we can save any type of data in variables
let myAmazingNumber = 5;
let mySuperSum = myAmazingNumber + 7;

console.log(myAmazingNumber);
console.log(mySuperSum);
