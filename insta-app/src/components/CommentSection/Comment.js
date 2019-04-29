import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment-wrapper">
            <span className="comment-username">{props.comment.username} </span>
            {props.comment.text}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}

export default Comment;