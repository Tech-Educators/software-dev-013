import {useState} from "react"

export default function NewBookComplex() {
    const [formData, setFormData] = useState({username: '', password: ''})


    function handleChange(event) {
        // console.log(event)
        // we are 'spreading' the old value of formData so we don't overwrite the old values with just the new event.target.name, but include. Using []s on the event.target.name because we want JS to treat it as a variable property name and go fetch the name attribute of input we're typing in.
        setFormData({...formData, [event.target.name] : event.target.value})
        console.log(formData)
    }

    // --> event -> an object with information about the event - this 'event' happens evertime the user types
    // --> make sure your inputs have names.
    // square brackets on the property name like around [event.target.name] tell javascript to go get the 'actual' value of that name - eg 'user-name'


    function handleSubmit(e) {
        e.preventDefault()
        console.log('hello')
        console.log(formData)
        // fetch or something
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input name='user-name' placeholder="username" onChange={handleChange} required></input>
                <input name='password' placeholder="password" type='password'onChange={handleChange}></input>
                <button type="submit">submit</button>
            </form>

        </div>
    )
}