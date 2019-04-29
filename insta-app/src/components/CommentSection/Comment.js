import React from 'react';

const Comment = props => {
    return (
        <div>
            {props.comment.username} <br />
            {props.comment.text}
        </div>
    )
}

export default Comment;