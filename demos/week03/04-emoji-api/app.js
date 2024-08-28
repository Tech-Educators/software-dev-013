const getEmojiButton = document.getElementById('get-button')

const fetchEmojis = async () => {
    const res = await fetch(`https://emojihub.yurace.pro/api/all/group/travel-and-places`)
    const data = await res.json()
    return data
}

const displayEmojis = async () => {
    const emojis = await fetchEmojis()
    const div = document.createElement('div')
    document.body.appendChild(div)
    emojis.forEach((emoji) => {
        const pTag = document.createElement('p')
        pTag.innerHTML = emoji.htmlCode[0]
        div.appendChild(pTag)
    })
}

getEmojiButton.addEventListener('click', displayEmojis)

