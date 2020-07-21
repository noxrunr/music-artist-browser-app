export const requestAlbumList = async () => {

    let response = await fetch(`http://localhost:3004/albums`)
    let data = await response.json()
    return data
}