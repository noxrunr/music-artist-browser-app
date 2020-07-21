import React, { Component } from 'react'
import './styles.css'
import AlbumItem from '../AlbumItem/AlbumItem'

export default class AlbumList extends Component {

    state = {
        albumList: [1,2,3,4,5]
    }
    
    _renderAlbumList() {
        return this.state.albumList.map( (element, index) => (
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
