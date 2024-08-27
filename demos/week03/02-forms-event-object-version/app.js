// 1 - Get form element by its ID
// our form DOM NODE
const form = document.getElementById('form')


// the event object is alaways passed to any function that's given to addEventListner
function handleSubmit(event) {
    event.preventDefault()
    // console.log(event.target.color.value)
    // .color - coming from the input name attribute
    document.body.style.backgroundColor = event.target.color.value
    // console.log(event.target[1].value)
    // console.log(event.taget.entertext.value)

    // make a p tag
    let pTag = document.createElement('p')
    pTag.innerText = event.target.color.value
    pTag.setAttribute('class', 'hello')
    document.body.appendChild(pTag)
    
}
// 2 - add event listner - write an event handler.
form.addEventListener('submit', handleSubmit)


// function formDataVersion(event) {
//     event.preventDefault()
//     const data = new FormData(form)
//     // turn it into a real object
//     const final = Object.fromEntries(data)
//     console.log(final)
// }