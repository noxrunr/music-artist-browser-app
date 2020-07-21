import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AlbumList from '../../components/AlbumList/AlbumList'
import {requestAlbumList} from '../../services/api/home'

export class Home extends Component {

    state = {
        title: 'Album List',
        searchQuery: '',
        limit: this.props.match.params.limit,
        albumList: []
    }
    
    componentDidMount() {
        const {limit} = this.state

         requestAlbumList().then(
             data => {
                this.setState({
                    albumList: data
                })
             }
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
        console.log(this.state.searchQuery)
    }

    _search = () => {
        console.log('Search query: ' + this.state.searchQuery)
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
