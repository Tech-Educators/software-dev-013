let cookieCount = 0
let cookiesPerSecond = 1

// all my HTML elements
const cookieCountDisplay = document.getElementById('cookieCount')
const cookiePerSecondDisplay = document.getElementById('cookiesPerSecond')
const bigCookieImage = document.getElementById('bigCookie')
const shopDisplay = document.getElementById('shop')

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


function updateStorage() {
    localStorage.setItem('cookieCount', cookieCount)
    localStorage.setItem('CPS', cookiesPerSecond)
}
// core thing that runs every second 
// THIS FUNCTION RUNS EVERY SECOND
function update() {
    cookieCount += cookiesPerSecond
    // console.log(cookieCount)
    updateUI()
    updateStorage()
}
// responsible to making update run every second
setInterval(update, 1000)


// store our cookieInformation
function loadGame() {
    // if there is SOMETHING in localstorage
    // if that information is stored in localstorage, update our varibles to those values
    if (localStorage.getItem('cookieCount') != null && localStorage.getItem('CPS') != null) {
        cookieCount = JSON.parse(localStorage.getItem('cookieCount'))
        cookiesPerSecond = JSON.parse(localStorage.getItem('CPS'))
    }
}

// call this 
loadGame()



// how to fetch the upgrade data
// link: https://cookie-upgrade-api.vercel.app/api/upgrades


// how to fetch the upgrades.
async function fetchUpgrades() {
    // go fetch the data
    const res = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    // .json() tells our code in what format to read the incoming data
    const cookieInfo = await res.json()
    // console.log(cookieInfo)
    displayUpgrades(cookieInfo)
}

fetchUpgrades()


// in here you would create the HTML for each of the upgrades and add a 'buy' button ect. 
function displayUpgrades(arrayofUpgrades) {
    arrayofUpgrades.forEach(function(upgrade) {
        const nameTag = document.createElement('p')
        nameTag.innerText = upgrade.name
        console.log(upgrade)
        shopDisplay.appendChild(nameTag)
    })
}   