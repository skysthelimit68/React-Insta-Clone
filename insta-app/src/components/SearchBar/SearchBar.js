import React from 'react';
import './SearchBar.css';


const SearchBar = props => {
    return (
        <div className="searchHeader">
            <div className="header-wrapper">
                <div className="header-logo">
                    <div className="logo"></div>
                    <div className="divider"></div>
                    <div className="brand"></div>
                </div>
                <div className="search">
                    <input 
                    placeholder = "Search"
                    />
                </div>
                <div className="header-nav">
                    <div className="header-nav-icons explore"></div>
                    <div className="header-nav-icons heart"></div>
                    <div className="header-nav-icons profile"></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;