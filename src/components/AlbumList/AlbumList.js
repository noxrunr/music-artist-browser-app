import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {
    
    _renderAlbumList() {
        const { list } = this.props

        return list.map( (element) => (
            <AlbumItem key={element.id} imageUrl={element.imageUrl} 
                       albumTitle={element.title} albumArtist='NEW REQUEST NEEDED' 
                       releaseDate={element.releaseDate} price={element.price} 
                       isFavorite={element.favorite} className='item'/>
        ))
    }

    render() {

        const { list } = this.props

        return (
            <div className='albumList'>
                <div className='items'>

                {
                    (list) ? this._renderAlbumList() : null
                }

                </div>
            </div>
        )
    }
}
