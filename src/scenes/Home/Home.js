import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AlbumList from '../../components/AlbumList/AlbumList'
import {getAlbumsByName, getArtistsById, patchFavoriteById} from '../../services/api/home'

export class Home extends Component {

    state = {
        title: 'Album List',
        searchQuery: '',
        limit: this.props.match.params.limit,
        albumList: [],
        artistList: [],
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

    componentDidMount() {
        this._getData()
    }

    _getData = () => {
        setTimeout(() => {
            let {limit} = this.props.match.params
    
            getAlbumsByName('').then(
                data => {
                    if (limit === undefined || limit === '0') 
                        limit = '10'
                    this._setAlbumList(data.splice(0, limit))
                } 
            )
    
            getArtistsById('').then(
                data => {
                    this._setArtistList(data)
                }
            )
        }, 100)
    }

    _handleChange = input => {
        this.setState({
            [input.target.name]: input.target.value
        })
    }

    _toggleFavorite = (id, isFavorite) => {
        patchFavoriteById(id, isFavorite).then(
            this._getData()
        )
    }

    _search = () => {
        const { searchQuery } = this.state

        getAlbumsByName(searchQuery).then(
            data => this._setAlbumList(data)
        )
    }

    render() {

        const { title, albumList, artistList } = this.state

        return (
            <div>
                <NavBar title={title} search={this._search} handleChange={this._handleChange}/>
            
                <AlbumList albumList={albumList} artistList={artistList} toggleFavorite={this._toggleFavorite}/>
            </div>
        )
    }
}

export default Home
