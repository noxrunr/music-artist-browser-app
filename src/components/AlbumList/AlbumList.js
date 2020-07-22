import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {
    
    _toggleFavorite = (id, isFavorite) => {
        this.props.toggleFavorite(id, isFavorite)
    }

    _renderAlbumList() {
        const { albumList } = this.props

        return albumList.map( (element) => (
            <AlbumItem key={element.id} imageUrl={element.imageUrl} id={element.id}
                       albumTitle={element.title} albumArtist={this.getArtistName(element.artistId)} 
                       releaseDate={element.releaseDate} price={element.price} 
                       isFavorite={element.favorite} className='item' toggleFavorite={this._toggleFavorite}/>
        ))
    }

    getArtistName = (id) => {
        const {artistList} = this.props
        const artist =  artistList.find( (element) => element.id === id)
        if (artist === undefined) return
        return artist.title
    }

    render() {

        const { albumList } = this.props

        return (
            <div className='albumList'>
                <div className='items'>

                {
                    (albumList) ? this._renderAlbumList() : null
                }

                </div>
            </div>
        )
    }
}
