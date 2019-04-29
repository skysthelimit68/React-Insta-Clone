import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img src={props.thumbnail} />
            {props.userName}
        </div>
    )
}

export default PostHeader;