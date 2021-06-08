import React from 'react'
import './search.css'
import Show from './Show'
function SearchBar() {
    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Search.." />
                <button>Search Location</button>
            </div>
            <Show />
        </div>
    )
}

export default SearchBar
