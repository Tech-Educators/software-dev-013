export default function ServerForm() {

    /* server actions*/
    // its a server side function which is called by the client.
    // they always have to be async 
    // you have to include the 'directive' use server. 
    // if you give a server action to a form action attribute it will always get formData for that form. We don't need to explicity pass it. 
    async function handleSubmit(formData:FormData) {
        'use server'
        const data = Object.fromEntries(formData)
        const {message, author} = data

        // db call here
        console.log(`${author} said ${message}`)
    }


    return (
        <form action={handleSubmit}>
            <input placeholder="write a message" name='message'></input>
            <input placeholder="author" name='author'></input>
            <button type="submit">submit</button>
        </form>
    )
}