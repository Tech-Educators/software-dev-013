'use client'

import {useState, ChangeEvent, FormEvent} from "react"

type serverActionTypes = {
    handleAddMessage: (data: {message: string}) => void;
}

export default function ClientForm({handleAddMessage}: serverActionTypes) {

    const [message, setMessage] = useState<string>("")

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const myData = Object.fromEntries(formData) as {message: string}

        console.log(myData)
        handleAddMessage(myData)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='message' placeholder="write a message on the client" onChange={handleChange}></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

// controlled vs uncontrolled react forms.

 