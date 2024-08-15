// console.log("Helllo???? testing");
// alert("hello world");

//data types

let myString = "string";
// let fancyString = 'string';
let backticksString = `string`;

//we are concatenating (chaining) strings here
console.log(myString + backticksString);

let myNumber = 7;
let myOtherNumber = 3;

console.log(myNumber + myOtherNumber);

let myBoolean = true;
let myOtherBoolean = false;

console.log(myBoolean);

//we can declare variables with no value
//example: you can have a score variable, and assign it a value once the user has played the game

//this variable has an undefined value
let myEmptyVariable;

console.log(myEmptyVariable);

//the value type here is null
let myNullVariable = null;

//the value type is integer or number
let myZeroNumber = 0;

//the typeof operator tells me the value type stored in the variable
console.log(typeof myNullVariable);
console.log(typeof myZeroNumber);
console.log(typeof myEmptyVariable);

//the length property can tell us how many characters a string has
//in the console, I will see the value of the length property
//example: checking the length of a password
console.log(myString.length);

//operators to use with type number

// 7 is greater than 5
let myComparison = 7 > 5; //truthy
//5 is less than 7
let myOtherComparison = 5 < 7; //truthy
//5 is equal to 7
let myEqual = 5 == 7; //falsey --> we are checking values
let myTripleCheckEqual = 5 === 7; //falsey --> we are checking values and types
let myNewEqual = 5 == "5"; // truthy --> value 5 is equal to value 5
let myNewestEqual = 5 === "5"; //falsey --> value is 5, but type number is NOT equal to type string

//we use one equal symbol = to assign a value to a variable
//we use two equal symbols to check value, not type
//we use three equal symbols to check value AND type
