import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

import styled from "styled-components";


const SearchHeader = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.0975);
    justify-content: center;
    height:77px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 1010px;
    display: flex;
    align-items: center;
    padding: 26px 20px;
    justify-content: space-between;
`;

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderLogoElements = styled.div`
    background-image: url(/static/media/insta-sprite.d0e3cb0e.png);

    ${props => (props.type === 'logo-icon' ? `background-position: -104px -177px; height: 24px; width: 24px;` : null)}
    ${props => (props.type === 'logo-brand' ? `background-position: 0px -146px; height: 29px; width: 103px; margin-top: 7px;` : null)}
`;

const HeaderLogoDivider = styled.div`
    background-color: #262626;
    width: 1px;
    height: 30px;
    margin: 0 18px 0 20px;
`;

const Search = styled.div`
    min-width: 125px;
    width: 215px;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    padding: 5px 10px;
    text-align: center;
    width: 90%;
    font-size: 0.8rem;
    background: #99999910;
    border-style: none;
    border: 1px solid #99999950;
    border-radius: 2px;
    color:#666;
`;

const HeaderNav = styled.div`
    display:flex;
    justify-content: flex-end;
`;

const HeaderNavIcons = styled.div`
    background-image: url(/static/media/insta-sprite.d0e3cb0e.png);
    width: 24px;
    height: 24px;
    margin-left: 30px;

    ${props => (props.type === 'nav-explore' ? `background-position: -104px -255px;` : null)}
    ${props => (props.type === 'nav-heart' ? `background-position: -231px -130px;` : null)}
    ${props => (props.type === 'nav-profile' ? `background-position: -182px -203px; position:relative;` : null)}
`;

const ProfileDropdown = styled.div`
    position: absolute;
    top: 150%;
    border: 1px solid #ccc;
    border-radius: 4px;
    left: -90%;
    background: #ccc;
    padding: 15px 10px;
    width:50px;
    cursor:pointer;

    ${props => (props.type === 'profileDropdown-visible' ? `display:block;` : null)}
    ${props => (props.type === 'profileDropdown-hidden' ? `display:none;` : null)}

    &::before {
        content: '◆';
        width: 0;
        height: 0;
        position: absolute;
        left: 34%;
        top: -21px;
        color: #ccc;
        font-size: 1.8rem;
    }
`;

const ProfileDropdownItem = styled.div`
    width:100%;
    font-size:1rem;

`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileToggle : false
        }
    }

    profileToggle = () => {
        this.setState({
            profileToggle: !this.state.profileToggle
        })
    }
    render() {
        let profileToggleStatus = this.state.profileToggle? "profileDropdown-visible" : "profileDropdown-hidden";
        return (
            <SearchHeader>
                <HeaderWrapper>
                    <HeaderLogo>
                        <HeaderLogoElements type="logo-icon"></HeaderLogoElements>
                        <HeaderLogoDivider></HeaderLogoDivider>
                        <HeaderLogoElements type="logo-brand"></HeaderLogoElements>
                    </HeaderLogo>
                    <Search>
                        <Input
                            placeholder="&#128269; Search"
                            value={this.props.searchField}
                            onChange={this.props.onChange}
                        />
                    </Search>
                    <HeaderNav>
                        <HeaderNavIcons type="nav-explore"></HeaderNavIcons>
                        <HeaderNavIcons type="nav-heart"></HeaderNavIcons>
                        <HeaderNavIcons type="nav-profile" onClick={this.profileToggle}>
                            <ProfileDropdown type={profileToggleStatus}>            
                                <ProfileDropdownItem onClick = {this.props.logOut}>Logout</ProfileDropdownItem>
                            </ProfileDropdown>
                        </HeaderNavIcons>
                    </HeaderNav>
                </HeaderWrapper>
            </SearchHeader>
        )
    }
}
/*
const SearchBar = props => {
    
    return (
        <SearchHeader>
            <HeaderWrapper>
                <HeaderLogo>
                    <HeaderLogoElements type="logo-icon"></HeaderLogoElements>
                    <HeaderLogoDivider></HeaderLogoDivider>
                    <HeaderLogoElements type="logo-brand"></HeaderLogoElements>
                </HeaderLogo>
                <Search>   
                        <Input
                        placeholder = "&#128269; Search"
                        value = {props.searchField}
                        onChange = {props.onChange}
                        />
                </Search> 
                <HeaderNav>
                    <HeaderNavIcons type="nav-explore"></HeaderNavIcons>
                    <HeaderNavIcons type="nav-heart"></HeaderNavIcons>
                    <HeaderNavIcons type="nav-profile"></HeaderNavIcons>
                </HeaderNav>
            </HeaderWrapper>
        </SearchHeader>
    )*/

/*
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
*/
//}

SearchBar.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default SearchBar;