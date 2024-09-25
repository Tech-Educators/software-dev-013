
// The spread operator.

// the original value of string is unchanged
const string = 'sam'


let foo = [...string]

console.log(foo, string) // ['s', 'a', 'm'], sam


let theMatrix = {
    name: 'The Matrix',
    year: 1999,
    directors: "Wachowski Sisters",
    lead_actor: "Keanu Reeves"
}

// we'll use the spread operator to 'copy' some of the information from the original object into a new one, and then replace some of the values - like the year, the name. 


// so even though the original theMatrix obejct already had the properties year and name, specifiying them again over here, means they're overwritten. So we get the old values for actors/directors and the new ones for year and name. 
let theMatrixReloaded = {
    ...theMatrix,
    year: 2003,
    name: 'The Matrix Reloaded'
}

console.log(theMatrixReloaded)


let object = { name: "foo", name: "bar" } 
console.log(object)


let bar = 'yearOfRelease'

let wizardOfOz = {
    name: 'The Wizard of Oz',
    bar: 1939
}
// this hasn't done what I wanted - the property is just 'bar' - it didn't go get the value of the varaible.
console.log(wizardOfOz)


// lets try again

let baz = 'year released'
let theBarbieMovie = {
    name: 'Barbie',
    [baz]: 2023,
    ['This is a valid property name!'] : 'Pink'
}

console.log(theBarbieMovie)

//console.log(theBarbieMovie.this is a valid propert name) // no good - dot notation fails us here


console.log(theBarbieMovie[`This is a valid property name!`]) // Pink 

// adding a new property to the (original) object.

theBarbieMovie.actors = 'Margot Robbie'

// creating a new object based on the old one with a new property. 
console.log({...theBarbieMovie, actors: 'Margot Robbie'})

console.log(theBarbieMovie);

// property names on objects have to be unique.
console.log({...theMatrix, ...theBarbieMovie})