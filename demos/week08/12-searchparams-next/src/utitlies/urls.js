export function formatTitle(bookTitle) {
    return bookTitle.split(' ').join('-').toLowerCase()
}

export function extractIDFromParams(params) {
    return params.split('-')[0]
}