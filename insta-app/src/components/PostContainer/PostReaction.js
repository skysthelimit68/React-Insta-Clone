import React from 'react';
import PropTypes from 'prop-types';

const PostReaction = props => {
    return (
        <div className="reaction-icons-wrapper">
            <div className="reaction-icons react-heart"></div>
            <div className="reaction-icons react-thoughtBubble"></div>
            
            <span className="react-count">{props.likesCt}{" "}Likes</span>
        </div>
    )
}


PostReaction.propTypes = {
    likesCt: PropTypes.number,
    commentsCt: PropTypes.number
}

export default PostReaction;