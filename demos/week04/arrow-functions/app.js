// regular function
function myBoringFunction() {
  return "This function sucks.";
}

// regular function with parameters
function greet(first, last) {
  return `Hello ${first} ${last}`;
}
greet("Toad", "of Toad Hall");

// regular callback functions
setTimeout(function () {
  console.log("Its been 84 seconds!");
}, 84000);

// arrow function
() => {};

// more practically this is how we use these cool new things
const myArrowFunction = () => {
  return "This function rocks";
};

// arrow function with parameters
const sum = (a, b) => {
  return a + b;
};

/*

WAIT?! So you're telling me, that all you need to do to make an arrow
function is take away the word "function"
and put a FAT ARROW => between the brackets?

Yes. That is correct.

*/

// the one issue with arrow function
one();
function one() {
  return "one";
}
one();

two(); // this will fail and tell me the function "two" is undefined
const two = () => {
  return "two";
};
two();

// BUT this is why they rule
// this function JUST does one thing. It reutrns something
function iWishIWasOneLine() {
  return "Sad";
}

// with an arrow function, we can write that on ONE LINE
const iAmOneLine = () => "Happy";

iAmOneLine(); // "Happy"

// when you omit the {} from an arrow function
// it implicitly returns whatever you write after the =>

// A real life example?!
app.listen(8080, function () {
  console.log("App is running on port 8080 and I am 3 lines");
});

app.listen(8080, () => console.log("PORT 8080... I'm on one line."));

// or the one from earlier
setTimeout(() => console.log("Its been 84 seconds!"), 84000);

// or maybe you just prefer the look of them
people.forEach(function (person) {
  console.log(person);
});

people.forEach((person) => {
  console.log(person);
});
// much simplar
