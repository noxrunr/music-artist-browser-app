export const requestAlbumList = async (q = '') => {
    let response  = await fetch(`http://localhost:3004/albums/${q}`)
    let data = await response.json()
    return data
}

export const getAlbumsByName = async (query) => {
    let response = await fetch(`http://localhost:3004/albums?q=${query}`)
    let data = await response.json()
    console.log(data, query)
    return data
}

export const requestArtistList = async (id = '') => {
    let response = await fetch(`http://localhost:3004/artists/${id}`)
    let data = await response.json()
    return data
}