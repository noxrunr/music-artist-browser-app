export const getYear = (dateString) => {
    const date = new Date(dateString)
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric'
    })
    const [{ value: year }] = dateTimeFormat.formatToParts(date) 
    return `${year}`
}