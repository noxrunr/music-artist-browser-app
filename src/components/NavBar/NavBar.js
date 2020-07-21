import React, { Component } from 'react'
import './styles.css'

export default class NavBar extends Component {

    render() {

        const { title, handleChange, search } = this.props

        return (
            <nav className='container'>
                <div className='title'>{title}</div>


                {
                    (handleChange !== undefined) ? (
                        <div className='search'>
                            <input type='text' 
                                placeholder='Search...'
                                name='searchQuery'
                                onChange={handleChange} />   
                            <button id='searchButton' onClick={search} >
                                <i className="material-icons">search</i>
                            </button>
                        </div>
                    ) : null
                }
            </nav>
        )
    }
}


