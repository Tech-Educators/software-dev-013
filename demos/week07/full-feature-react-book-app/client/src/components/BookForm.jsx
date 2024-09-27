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
                <input name='title' placeholder="title" onChange={handleChange} required></input>
                <input name='author' placeholder="author" onChange={handleChange}></input>
                <input name='description' placeholder="description" onChange={handleChange}></input>
                <input name='quote' placeholder="quote" onChange={handleChange}></input>
                <input name='released' placeholder="released" onChange={handleChange} type='date'></input>
                <input name='author' placeholder="author" onChange={handleChange}></input>
                <input name='author' placeholder="author" onChange={handleChange}></input>
                <button type="submit">submit</button>
            </form>

        </div>
    )
}


// "id": 2,
// "title": "To Kill a Mockingbird",
// "author": "Harper Lee",
// "description": "A novel about racial injustice in the Deep South seen through the eyes of a young girl.",
// "quote": "You never really understand a person until you consider things from his point of view.",
// "released": "1960-07-10T23:00:00.000Z",
// "img_url": "http://example.com/to_kill_a_mockingbird.jpg",
// "genres": [
//     "Fiction",
//     "Classics",
//     "Classics"
// ]