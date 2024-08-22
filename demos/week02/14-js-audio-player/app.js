console.log('Hello world!')

const nature = document.getElementById('nature')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const stopBtn = document.getElementById('stopBtn')
const skipBack = document.getElementById('skipBack')
const skipFor = document.getElementById('skipFor')

// const arrayOfElements = document.querySelectorAll('.playButton')
// string
// function

// console.log(arrayOfElements)

playBtn.addEventListener('click', function(asdfasdf) {
    console.log(asdfasdf)
    // nature.play()
    // console.log(nature.id)
    // console.dir(nature)
})

pauseBtn.addEventListener('click', function() {
    nature.pause()
})

stopBtn.addEventListener('click', function() {
    // pause the playback
    nature.pause()
    // set time to 0
    nature.currentTime = 0
    // currentTime
})

skipBack.addEventListener('click', function() {
    nature.currentTime -= 10
})



skipFor.addEventListener('click', function() {
    nature.currentTime += 10;
})