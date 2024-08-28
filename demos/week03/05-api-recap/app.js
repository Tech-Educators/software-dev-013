
// as an exercise I would like you 
// find an api that interests you
// fetch the data with a function
// bonus points if you use the data to create some HTML

async function getData(bird) {
    // get the response from the xeno-canto server
    const res = await fetch(`https://xeno-canto.org/api/2/recordings?query=${bird}`)
    // read the response as JSON
    const data = await res.json()
    console.log(data)
}

getData('eagle')
getData('owl')


// async function getCarbon(websiteThatIWantToTest) {
//     const result = await fetch(`https://api.websitecarbon.com/site?url=${websiteThatIWantToTest}`)
//     // read as json
//     const carbonResults = await result.json()
//     console.log(carbonResults)
// }

// getCarbon(`https://techeducators.co.uk`)