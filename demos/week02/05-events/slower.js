
// select that button that id like to respond to a click on.

const simpleButton = document.getElementById('simple-demo')

// add event listner to simpleButton
// we tell it what to listen for
// and what to do when that event happens
simpleButton.addEventListener('click', respondToEvent)
const div = document.getElementById('div')

function respondToEvent() {
    console.log('cool!')
    simpleButton.style.backgroundColor = 'red'
    div.classList.toggle('div')
}




