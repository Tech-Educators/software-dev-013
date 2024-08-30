let cookieCount = 0
let cookiesPerSecond = 1

// all my HTML elements

const cookieCountDisplay = document.getElementById('cookieCount')
const cookiePerSecondDisplay = document.getElementById('cookiesPerSecond')
const bigCookieImage = document.getElementById('bigCookie')

// THIS IS JUST TO MAKE IT SO WHEN WE CLICK ON THE COOKIE IT UPDATES THE COUNT!
bigCookieImage.addEventListener('click', function() {
    cookieCount++
    updateUI()
} )


// this function is responsible for updating our HTML to reflect the varibles for cookieCount
function updateUI() {
    cookieCountDisplay.innerText = cookieCount
    cookiePerSecondDisplay.innerText = cookiesPerSecond
}
// core thing that runs every second 
// THIS FUNCTION RUNS EVERY SECOND
function update() {
    cookieCount += cookiesPerSecond
    console.log(cookieCount)
    updateUI()
}
// responsible to making update run every second
setInterval(update, 1000)