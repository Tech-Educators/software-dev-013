const notificationButton = document.getElementById('notification')
const notificationDisplay = document.getElementById('notificationDisplay')

notificationButton.addEventListener('click', () => {
    notificationDisplay.textContent = 'New email in your inbox'
})

