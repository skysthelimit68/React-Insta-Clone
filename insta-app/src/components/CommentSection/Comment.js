import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

import styled from "styled-components";

const CommentWrapper = styled.div`
    padding: 2px 0;
    `;

const CommentUserName = styled.span`
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    color: #262626;
    margin-right:0.1rem;
    `;


const Comment = props => {
    return (
        <CommentWrapper>
            <CommentUserName>{props.comment.username} </CommentUserName>
            {props.comment.text}
        </CommentWrapper>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}

export default Comment;