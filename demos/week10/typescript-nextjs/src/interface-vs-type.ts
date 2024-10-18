// types we can use for event simplifying like a string array
type Pet = string[] | PetInfo[]

type PetInfo = {
    name: string,
    species: "Cat" | "Dog" 
    colour: string
}

// so the petsArray var has to be an array of objects that follow the PetInfo type.
const petsArray: PetInfo[] = [
    {
        name: 'Darcy',
        species: 'Dog',
        colour: 'brown'
    }
]

const pets: Pet = ['darcy', 'charlie']

type Cow = {
    name: string
}

// interfaces only work with objects
interface User {
    name: string,
    // age can be a number or a string
    age: number | string
}

// superset of user 
// cannot overwrite fields in original interface.
// well we 'can' but don't do that.
interface Admin extends User {
    canDeleteEverything?: boolean
    // name: number
}

// ???
// interface Animal extends Pet {
//     color: string

// }

const frankie: User = {
    name: 'Frankie',
    age: 200020
}
const sam: Admin = {
    name: 'Sam',
    age: 25,
    canDeleteEverything: true
}

// anything with the type 'classes' can only have have a value of history of physics 
// string literal types
type classes = 'History' | 'Physics' | 'Art' | 'Science'

// nubmers
type years = 2000 | 1002

type animals = string[] | (number|boolean)[] 

type universityInfo = {
    class: classes,
    year: number,
    teacherName: string
}

let ArtClass: universityInfo = {
    class: 'Art',
    year: 2011,
    teacherName: 'Monet'
}

const age: years = 1002
