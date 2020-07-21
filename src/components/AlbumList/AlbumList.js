import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {
    
    _renderAlbumList() {
        const { albumList } = this.props

        if (albumList === undefined) return

        return albumList.map( (element, index) => (
            <AlbumItem key={index} imageUrl={element.imageUrl} 
                       albumTitle={element.title} albumArtist='NEW REQUEST NEEDED' 
                       releaseDate={element.releaseDate} price={element.price} 
                       isFavorite={element.favorite} className='item'/>
        ))
    }
    
    render() {
        return (
            <div className='albumList'>
                <div className='items'>
                {
                    this._renderAlbumList()
                }

                </div>
            </div>
        )
    }
}
