let images = [
    {
        url: 'https://images.unsplash.com/photo-1552415274-73ad7198cb93?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Gardens By The Bay, Singapore aerial view of trees, river, and architectural landmark'
    },
    {
        url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A very cute monkey looking into the camera, close up.'
    },
    {
        url : "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'South africa'
    }
]

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