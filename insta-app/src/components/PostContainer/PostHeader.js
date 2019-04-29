import React from 'react';
import PropTypes from 'prop-types';


const PostHeader = props => {
    return (
        <div className="postHeader-wrapper">
            <div className="postHeader-icon-wrapper"><img src={props.thumbnail} /></div>
            <span className="postHeader-username">{props.userName}</span>
        </div>
    )
}

PostHeader.propTypes = {
        userName: PropTypes.string,
    thumbnail: PropTypes.string
}

export default PostHeader;