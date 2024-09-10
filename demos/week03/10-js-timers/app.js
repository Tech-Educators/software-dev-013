const notificationDiv = document.getElementById('notif')

const button = document.getElementById('button')


button.addEventListener('click', function() {

    notificationDiv.style.display = 'block'
    button.style.backgroundColor = 'teal'

    setTimeout(function() {
        notificationDiv.style.display = 'none'
    }, 5000)

})



const timeDisplay = document.getElementById('timeDisplay')
const timeButton = document.getElementById('timeButton')

// set Interval

// have a varible
// that tracks the time
// every second, update the variable
let time = 0;

// this variable is going to hold the ID of our interval
// in the future
// we need the id so we can stop the interval running later
let interval;
// is the timer running yet or not
let isIntervalRunning = false; 

function handleClick() {
    if (isIntervalRunning) {
        clearInterval(interval)
        isIntervalRunning = false;
        timeButton.innerText = 'Start Timer'
    } else {
        interval = setInterval(function() {
            time = time + 1  
            timeDisplay.innerText = time
        }, 1000)
        isIntervalRunning = true;
        // change text buttion to stop
        timeButton.innerText = 'Stop Timer'
    }
}

timeButton.addEventListener('click', handleClick)