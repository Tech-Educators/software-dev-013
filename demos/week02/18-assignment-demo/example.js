
const thumbNailContainer = document.getElementById('thumbnailContainer')
const displayImage = document.getElementById('displayImage')

function createThumbnails() {
    images.forEach(function(image){
        // for each of the imageObjects, I want to create an image tage
        let imageElement = document.createElement('img')

        // I want to set src & alt
        imageElement.src = image.url
        imageElement.alt = image.alt
        
        imageElement.setAttribute('tabindex', 0)

        imageElement.addEventListener('click', function() {
            console.log(`Clicked on ${image.alt}`)
            createBigImage(image)
        })

        imageElement.addEventListener('keydown', function(event) {
            console.log(event)
            if (event.code === 'Enter') {
                createBigImage(image)
            }
        })
        // console.log(imageElement)
        // put these in the DOM (in my HTML)
        thumbNailContainer.appendChild(imageElement)
    })
}


createThumbnails()


function createBigImage(imageParams) {
    displayImage.innerHTML = ''
    // make an image tag
const bigImageElement = document.createElement('img')
    
   bigImageElement.src = imageParams.url
   bigImageElement.alt = imageParams.alt

   displayImage.appendChild(bigImageElement)
}