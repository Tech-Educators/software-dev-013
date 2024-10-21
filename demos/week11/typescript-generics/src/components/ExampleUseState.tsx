'use client'
import {useState} from "react"

export function ExampleUseState() {
    // when we provide angled brackets to a function, we're specifying that our state variable can be a number or a string. If we leave them off, useState will infer the type. 
    
    // this is if you're planning on changing the type of useState after the inital state is set. 
    const [count, setCount] = useState<number | string>('')

    return (
        <div>
            <button onClick={() => {setCount('hello')}}>clickMe</button>
            <p>{count}</p>
        </div>
    )
}