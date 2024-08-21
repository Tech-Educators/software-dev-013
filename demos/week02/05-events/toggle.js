const div = document.getElementById('div')
const simpleButton = document.getElementById('simple-demo')

function showPopup(textToShow) {
    console.log('dfasdfasdfsd')
    div.textContent = textToShow
    div.classList.toggle('div')
}

// add event listner to simpleButton
// we tell it what to listen for
// and what to do when that event happens
simpleButton.addEventListener('click', function() {
    showPopup('This is the string I want inside my box')
})

simpleButton.addEventListener('hover', function() {

})

// declaring that function


// declaring {}'s

// function () {

// }

// invoking

// functionName() 