import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { getAlbumsByArtistId, getArtistsById, patchFavoriteById } from '../../services/api/requests'
import AlbumList from '../../components/AlbumList/AlbumList'

export default class Artist extends Component {

    state = {
        title: '',
        artistId: this.props.match.params.artistId,
        albumList: [],
        artistList: [],
    }
    
    componentDidMount() {
        this._getData()
    }

    _setTitle = (title) => {
        this.setState({
            title: title
        })
    }

    _setAlbumList = (data) => {
        this.setState({
            albumList: data
        })
    }

    _setArtistList = (data) => {
        this.setState({
            artistList: data
        })
    }

    _getData = () => {
        setTimeout(() => {
            let {artistId} = this.props.match.params
    
            getAlbumsByArtistId(artistId).then(
                data => {
                    this._setAlbumList(data)
                } 
            )
    
            getArtistsById(artistId).then(
                data => {
                    this._setArtistList(data)
                    this._setTitle(data.title)
                }
            )

        }, 100)
    }

    _toggleFavorite = (id, isFavorite) => {
        patchFavoriteById(id, isFavorite).then(
            this._getData()
        )
    }

    render() {
        const { albumList, title } = this.state

        return (
            <div>
                <NavBar title={this.state.title} />
                <AlbumList albumList={albumList} artistName={title} toggleFavorite={this._toggleFavorite}/>
            </div>
        )
    }
}
