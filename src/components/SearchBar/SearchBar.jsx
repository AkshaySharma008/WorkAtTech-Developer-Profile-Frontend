import React from "react";
import './SearchBar.css';

import SearchIcon from '../../images/Icons _ Illustrations/search-24px.svg';

const SearchBar = () => {
    return (
        <div className="searchBar-box flex">
            <div className="search-container">
                <input className="searchBar-input" placeholder="Search for Username" />
                <img className="searchBar-icon" src={SearchIcon} alt="search icon" />
            </div>
        </div>
    )
};

export default SearchBar;