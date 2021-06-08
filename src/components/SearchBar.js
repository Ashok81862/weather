import React from 'react'
import './search.css'
function SearchBar() {
    return (
        <div className="search">
            <input type="text" placeholder="Search.." />
            <button>Search Location</button>
        </div>
    )
}

export default SearchBar
