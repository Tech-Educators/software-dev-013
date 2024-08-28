// WE need all of the HTML elements so we can reference them.
const acceptButton = document.getElementById('accept')
const declineButton = document.getElementById('decline')

const cookieNotice = document.getElementById('cookie-notice')


// When the page loads - check if we need to display or not
if (document.cookie.includes('cookiesAccepted')) {
    cookieNotice.style.display = 'none'
}

acceptButton.addEventListener('click', function() {
    // add a cookie
    document.cookie = "cookiesAccepted=true"
    console.log('This is working')
    // setting display none on the cookie notice so it disapears after the user accepts or decline
    // get rid of the notice when they decline or accept
    cookieNotice.style.display = 'none'
})


declineButton.addEventListener('click', function() {
    document.cookie = "cookiesAccepted=false"
    console.log('This is working - declined!')
    cookieNotice.style.display = 'none'
})


const holidays = 'France Germany London'

holidays.includes('France') // true
