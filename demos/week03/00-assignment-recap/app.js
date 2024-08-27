// create a div for menu, and img element for the background - rest done in javascript. 

// we'll have an array of image objects 
// looping through arrays 


let myArray = [{number: 1, altText: 'THis is the number1'},
    {number: 2},
    {number: 3},
    {number: 4}]

myArray.forEach(function(number) {
    console.log(number * 2)
})


function foo() {

}
// 1
// 2
// 3
// 4


for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i])
    // console.log((myArray[i].number * 2), myArray[i].altText)
}
// HTML image element vs DATA about an image 


let myInfo = {
    name: 'Sam',
    city: 'Liverpool'
}

console.log(myInfo.city) //Liverpool

