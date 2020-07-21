import React, { Component } from 'react'
import './styles.css'

export default class AlbumItem extends Component {
    render() {

        // const { imageUrl, albumTitle, albumArtist, releaseDate, price, isFavorite } = this.props

        return (
            <div className='wrap'>
                
                <img src='https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder.png' className='albumImage'></img>

                <div className='albumTitle elipsis'>Feel Good Inc.</div>

                <div className='artistName elipsis'>Gorillaz</div>

                <div className='released'>
                    <span>Released: </span>&nbsp;2005
                </div>

                <div className='price'>$14.99</div>

                <div className='favorite'>
                    <button>Mark as Favorite</button>
                </div>


            </div>
        )
    }
}
