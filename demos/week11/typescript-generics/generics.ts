// the function Foo has unicorns as a parameter for the TYPE casting we want to do. I can pass an argument to Foo to tell it what type 'Unicorns' should be
function Foo<Unicorns>(arg: Unicorns): Unicorns {
    return arg
}


const hello = Foo<string>('hello')

const goodNumber = Foo<number>(42)

// I passed in a string instead of a boolean, so we get an error from typescript. 
const thisSucks = Foo<boolean>('false')