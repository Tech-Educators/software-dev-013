'use client'

import {useState} from "react"
import Example from "./Example"


export default function Counter() {
    const [count, setCount] = useState(0)

    console.log('This is running on the client!')
    function handleButtonClick() {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleButtonClick}>
                +1
            </button>
            <p>{count}</p>
            {/* any component you import into a client or component will turn into a client component - even though we've not put 'use client' */}
            <Example />
        </>
    )
}