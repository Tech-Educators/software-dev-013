async function getFoxes() {
    // we're going to the 'fetch' API to get the data
    // need to do async await so that we just the final result (not just the promise)
    const foxInfo = await fetch(`https://randomfox.ca/floof/`)
    // console.log(foxInfo)
    // parse the response
    // okay, please read that retuned data as JSON.
    const finalInfo = await foxInfo.json()
    
    return finalInfo
}

// make an async function
// const response = await fetch('yoururl')
// const result = await response.json()

function displayFoxes(foxImageData) {
    console.log(foxImageData)
    const image = document.getElementById('fox-image')
    image.src = foxImageData.image
    image.alt = 'A happy fox!'
}

async function addFoxesToPage() {
    const thisFoxImageData = await getFoxes()
    displayFoxes(thisFoxImageData)
}

addFoxesToPage()