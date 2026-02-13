import React from 'react'

function Search({ onSearchChange }) {
    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder="Search projects (e.g. 'Cyber' or 'Design')..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    )
}

export default Search
