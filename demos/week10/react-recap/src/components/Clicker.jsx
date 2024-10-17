"use client" 

import { useState, useEffect } from "react";

export default function Clicker() {
    console.log('Hellllloooo Im running')
    // I HAVE TO TELL REACT TO RE_RENDER THINGS. 
    // it will only re-render when one of these two things change; 
    // state changing
    // props changing 

    // useState is a function = it returns an array. [stateVariable, aFunctionToUpdateIt]
    // think of it like that 
    // we have to use the updator function (in this case 'setCount') to update the state variable or react magic wont work. 
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('This only runs when the component mounts, but not when it re-renders')
    }, [count]) 
  

    const {name} = {name: 'sam'} // destructuring of an object
    const [hello, myDog] = ['hello', 'darcy'] // desttrucuting of an array. 
    // lame boring varible out
    // let count = 0; 

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>click me </button>
            <p>{count}</p>
        </div>
    )
}