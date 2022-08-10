import React from 'react';
import './Search.css';

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder='Search for name' />
        </div>
    );
}

export default Search;

