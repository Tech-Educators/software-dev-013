// I want to click on a button
// that increases my displayed count by 1 each time

// button on the page
// the count will be displayed in a div that will update each time we click on the button

const countDisplay = document.getElementById('countDisplay')
const countButton = document.getElementById('countButton')

let count = 0
let increase = 1

function handleClick() {
    // count++
    count += increase
    increase = increase * 2
    countDisplay.innerText = count
    countButton.innerText = `+${increase}`
    // countDisplay.innerHTML = `<p class='hello'>This is a p tag</p>`

    // localStorage!
    // takes the name of what you want to store
    // and the value to store
    localStorage.setItem('theCount', count)
}

countButton.addEventListener('click', handleClick)

function load() {
    // if there is something matching 'theCount' in localstorage
    if (localStorage.getItem('theCount') != null) {
        // when things are stored in local storage, they come back as strings when we get them.
        console.log(typeof localStorage.getItem('theCount'))
        // we use JSON.parse() to turn the string back into a number - otherwise we'll have some strage stuff going on!
        count = JSON.parse(localStorage.getItem('theCount'))
        
        countDisplay.innerText = count
    }
}

// "5" -> 5
load()


/*
Ways to turn a string into a number
Number()
parseInt()
JSON.parse()
+1
~~5
*/


/*
// HAVE TO DO JSON.stringify for Objects and Arrays 
const jsonVersion = JSON.stringify(theThing)
localStorage.setItem('name', jsonVersion)

// READ VALUE
const jsonRead = localStorage.getItem('name')
const finalJS = JSON.parse(jsonRead)

*/