import React from 'react';
import Comment from './Comment';

const CommentList = props => {
    return (
        props.comments.map(comment => (
            <Comment comment = {comment} />
        ))
    )
}

export default CommentList;