import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {
    
    _renderAlbumList() {
        const { albumList } = this.props

        return albumList.map( (element) => (
            <AlbumItem key={element.id} imageUrl={element.imageUrl} 
                       albumTitle={element.title} albumArtist={this.getArtistName(element.artistId)} 
                       releaseDate={element.releaseDate} price={element.price} 
                       isFavorite={element.favorite} className='item'/>
        ))
    }

    getArtistName = (id) => {
        const {artistList} = this.props

        artistList.find( function (element) {
            console.log(element.id, id)
            return (element.id === id) ? element.title : ''
        }) 
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
