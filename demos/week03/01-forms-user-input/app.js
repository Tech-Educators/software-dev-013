const form = document.getElementById('form')

// write the submit handlerss
function handleSubmit(event) {
    // have to do this so the page doesn't reload
    event.preventDefault()
    // do stuff in here
    // new FormData is built into javascript 
    // we have to give it a form node as an argument (our form)
    const data = new FormData(form)
    // Object.fromEntries - 'hey create me a normal object from the FormData object'
    const finalValues = Object.fromEntries(data)

    // this will just be a normal object made out of key value pairs
    // keys will be whatever the 'name' attribute on the input was in your html
    // the value will be whatever the user typed in.
    console.log(finalValues)
    

}

form.addEventListener('submit', handleSubmit)