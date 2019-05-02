import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";


const PostHeaderWrapper = styled.div`display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    `;
const PostHeaderIconWrapper = styled.div`
    width:44px;
    height:44px;
    `;
const PostHeaderIconImg = styled.img`
    border-radius:50%;
    width:100%;
    `;

const PostHeaderUserName = styled.span`
    margin-left: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    color: #262626;
    `;



const PostHeader = props => {
    return (
        <PostHeaderWrapper>
            <PostHeaderIconWrapper><PostHeaderIconImg src={props.thumbnail} /></PostHeaderIconWrapper>
            <PostHeaderUserName>{props.userName}</PostHeaderUserName>
        </PostHeaderWrapper>
    )
    /*return (
        <div className="postHeader-wrapper">
            <div className="postHeader-icon-wrapper"><img src={props.thumbnail} /></div>
            <span className="postHeader-username">{props.userName}</span>
        </div>
    )*/
}

PostHeader.propTypes = {
        userName: PropTypes.string,
    thumbnail: PropTypes.string
}

export default PostHeader;