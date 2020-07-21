import React, { Component } from 'react'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import NavBar from '../../components/NavBar/NavBar'

export default class Artist extends Component {

    state = {
        title: '',
        item: {}
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <NavBar title={this.state.title} />
                <AlbumItem />
            </div>
        )
    }
}
