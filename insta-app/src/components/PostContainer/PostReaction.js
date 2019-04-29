import React from 'react';

const PostReaction = props => {
    return (
        <div>
            {props.likesCt}{" "}  {props.commentsCt}{" "} Comments {" "}
            {props.likesCt}{" "} Likes
        </div>
    )
}

export default PostReaction;