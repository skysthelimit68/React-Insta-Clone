import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';


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
                        placeholder = "&#128269; Search"
                        value = {props.searchField}
                        onChange = {props.onChange}
                        />
                    
                </div>
                <div className="header-nav">
                    <div className="header-nav-icons nav-explore"></div>
                    <div className="header-nav-icons nav-heart"></div>
                    <div className="header-nav-icons nav-profile"></div>
                </div>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default SearchBar;