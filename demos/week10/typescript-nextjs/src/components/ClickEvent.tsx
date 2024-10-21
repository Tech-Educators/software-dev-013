'use client'
import {useState} from "react"

type FetchedData = {
    name: string,
    bio: string
}
export default function ClickEvent() {
    // ts will infer what the type of things should be but it can be useful to have extra control.
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState<FetchedData[] | null>(null)
    // i don't typescript to gues what type the useState should accpet, I want to enforce that it only takes a number or null
    const [name, setName] = useState<string>('string')

    // how to type different events.
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e)
        console.log('Wow!!')
        setCount(count + 1)
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    }

    // typescript type form submission event
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div>
            <p>{count}</p>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>+1</button>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='name'></input>
            </form>
        </div>
    )
}

// React.[event]<HTMLElement>