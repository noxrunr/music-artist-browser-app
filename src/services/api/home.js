export const getAlbumsByName = async (query) => {
    let response = await fetch(`http://localhost:3004/albums?q=${query}`)
    let data = await response.json()
    return data
}

export const getAlbumsByArtistId = async (artistId) => {
    let response = await fetch(`http://localhost:3004/albums?artistId=${artistId}`)
    let data = await response.json()
    return data
}

export const getArtistsById = async (id = '') => {
    let response = await fetch(`http://localhost:3004/artists/${id}`)
    let data = await response.json()
    return data
}

export const patchFavoriteById = async (id, isFavorite) => {
    let response = await fetch(`http://localhost:3004/albums/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            favorite: isFavorite
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    let data = await response.json()
    return data
}