'use client'

import {useState, useEffect} from "react"

export default function Clicker() {

    console.log('This component is re-rendering')
    // I'm going to tell react that clicks is a special variable - I like to call these 'state variables' so I'm telling react that if my state variable changes, it needs to re-render the page to display the new value.
    // let clicks = 0

    // use stTE IS a function from react - it takes an arugment of what you want the intial value of the 'state variable' to be 

    // it returns an array of two things - the variable and a function to update the varible. 

    let [clicks, setClicks] = useState(0)


    // use effect takes a cbf - what do you want to do, and an dependecy array - if we leave it empty, 'the effect' (the cbf) 
    useEffect(() => {
        console.log(`I'm gtting data here...`)

        // run this function when the component dismounts
        // use this for clean
        // 
        return () => {
            console.log('I am cleaning up!')
        }
    }, [])
    // we are using array destructuring. 

    // const [hello, goodbye] = ['what up', 'cya ']
    function handleUpdateClicks() {
        setClicks(clicks + 1)
        console.log(clicks)
    }
    return (
        <div>
            <p>{clicks}</p>
            <button onClick={handleUpdateClicks}>+1</button>
        </div>
    )
}