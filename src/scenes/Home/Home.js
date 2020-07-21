import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AlbumList from '../../components/AlbumList/AlbumList'

export class Home extends Component {

    state = {
        title: 'Album List',
        searchQuery: '',
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
        return (
            <div>
                <NavBar title={this.state.title} search={this._search} handleChange={this._handleChange}/>
            
                <AlbumList/>
            </div>
        )
    }
}

export default Home
