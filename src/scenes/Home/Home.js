import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AlbumList from '../../components/AlbumList/AlbumList'
import {requestAlbumList, getAlbumsByName} from '../../services/api/home'

export class Home extends Component {

    state = {
        title: 'Album List',
        searchQuery: '',
        limit: this.props.match.params.limit,
        albumList: []
    }
    
    _setAlbumList = (data) => {
        this.setState({
            albumList: data
        })
    }

    componentDidMount() {
        const {limit} = this.state

        requestAlbumList().then(
            data => this._setAlbumList(data)
        )

        if (limit === undefined || limit === 0) {
            this.setState({
                limit: 10
            })
        }
    }

    _handleChange = input => {
        this.setState({
            [input.target.name]: input.target.value
        })
    }

    _search = () => {

        const { searchQuery } = this.state

        getAlbumsByName(searchQuery).then(
            data => this._setAlbumList(data)
        )

    }

    render() {

        const { title, albumList } = this.state

        return (
            <div>
                <NavBar title={title} search={this._search} handleChange={this._handleChange}/>
            
                <AlbumList list={albumList}/>
            </div>
        )
    }
}

export default Home
