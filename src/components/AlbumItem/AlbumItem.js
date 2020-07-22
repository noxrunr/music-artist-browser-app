import React, { Component } from 'react'
import './styles.css'
import { getYear } from '../../services/helpers'

export default class AlbumItem extends Component {
    render() {

        const { id, imageUrl, albumTitle, albumArtist, releaseDate, price, isFavorite, toggleFavorite } = this.props
        
        return (
            <div className='wrap'>
                
                <img alt='' src={imageUrl} className='albumImage'></img>

                <div className='albumTitle elipsis'>{albumTitle}</div>

                <div className='artistName elipsis'>{albumArtist}</div>

                <div className='released elipsis'>
                    <span>Released: </span>&nbsp;{getYear(releaseDate)}
                </div>

                <div className='price elipsis'>
                    {price}
                </div>

                <div className={(isFavorite) ? 'favorite notFavorite' : 'favorite isFavorite'}>
                    {
                        (!isFavorite) ? 
                            <button onClick={() => toggleFavorite(id, !isFavorite)}>Mark as Favorite</button>
                            :
                            <button onClick={() => toggleFavorite(id, !isFavorite)}>Remove favorite</button>
                    }
                    

                </div>

            </div>
        )
    }
}
