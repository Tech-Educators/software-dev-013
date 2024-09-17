import {useState} from "react"

export default function SimpleVersionWithoutNotes() {
    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleClick}>click me</button>
            <p>{count}</p>
        </>
    )
}