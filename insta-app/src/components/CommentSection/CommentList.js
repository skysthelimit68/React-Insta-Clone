import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import PropTypes from 'prop-types';


const CommentList = props => {
    return (
        <div className="comments-wrapper">
            {props.comments.map(comment => (
                <Comment comment = {comment} />
            ))}
            <div className="timestamp">{props.timestamp}</div>
            <AddComment />    
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentList;