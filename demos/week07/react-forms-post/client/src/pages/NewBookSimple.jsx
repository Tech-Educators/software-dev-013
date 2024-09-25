import { useState } from "react"

export default function NewBookSimple() {

    const [userName, setUsername] = useState('')

    // also gets the event object by default
    // we dealing with UI updates and so one - 
    function handleChange(event) {
        setUsername(event.target.value)
        console.log(userName)
    }


    // gets passed the event object by defauly 
    function handleSubmit(e) {
        e.preventDefault()
       // some fetch function to go updated my form.
       console.log(userName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='username' placeholder="enter your name" onChange={handleChange}/>
                <button type='submit'>submit your name</button>
            </form>
        </div>
    )
}

// we should also add labels to our inputs (and reference by id)