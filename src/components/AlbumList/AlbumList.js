import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {
    
    _renderAlbumList() {
        const { albumList } = this.props

        return albumList.map( (element, index) => (
            <AlbumItem key={index} className='item'/>
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
