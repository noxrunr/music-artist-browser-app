import React, { Component } from 'react'
import './styles.css'
import { getYear } from '../../services/helpers'

export default class AlbumItem extends Component {
    render() {

        const { imageUrl, albumTitle, albumArtist, releaseDate, price, isFavorite } = this.props

        // TODO: toggle for favorites
        
        return (
            <div className='wrap'>
                
                <img alt='' src={imageUrl} className='albumImage'></img>

                <div className='albumTitle elipsis'>{albumTitle}</div>

                <div className='artistName elipsis'>{albumArtist}</div>

                <div className='released elipsis'>
                    <span>Released: </span>&nbsp;{getYear(releaseDate)}
                </div>

                <div className='price elipsis'>{price}</div>

                <div className='favorite'>
                    <button>Mark as Favorite</button>
                </div>


            </div>
        )
    }
}
