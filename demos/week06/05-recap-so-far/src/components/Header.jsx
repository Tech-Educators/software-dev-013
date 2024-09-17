

export default function Header({username, timeOfDay}) {
    // console.log(props)
    return (
        <>
                <h2>Hello {username}</h2>
                <p>It is the {timeOfDay}</p>
        </>
    )
}


let myinfo = {
    city: 'Liverpool',
    age: 25
}
// for objects you have to call the varible by its property name in the object.
const {age} = myinfo

console.log(age) // 25


// we can also do destrucutirng on arrays 

let myArray = [1,2,4]

// with arrays the name of the varible you're creating doesn't matter. 
const [one, two] = myArray

console.log(one) // 1
console.log(two) // 2