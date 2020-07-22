import React, { Component } from 'react'
import './styles.css'
import { getYear } from '../../services/helpers'
import { Link } from 'react-router-dom'

export default class AlbumItem extends Component {
    render() {

        const { id, artistId, imageUrl, albumTitle, albumArtist, releaseDate, price, isFavorite, toggleFavorite } = this.props
        
        return (
            <div className='wrap'>
                
                <img alt='' src={imageUrl} className='albumImage'></img>

                <div className='block font-weight-600 margin-right line-height-half albumTitle elipsis'>{albumTitle}</div>

                <Link to={{
                    pathname: `/artist/${artistId}`,
                }} className='block margin-right line-height-half artistName elipsis'>
                    {albumArtist}
                </Link>

                <div className='block font-weight margin-right line-height-full released elipsis'>
                    <span>Released: </span>&nbsp;{getYear(releaseDate)}
                </div>

                <div className='block font-weight-600 margin-right line-height-full price elipsis'>
                    {price}
                </div>

                <div className={(isFavorite) ? 'block line-height-full favorite notFavorite' : 'block line-height-full favorite isFavorite'}>
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
