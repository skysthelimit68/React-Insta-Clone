import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


const PostContainer = props => {
    return (
       <div className="posts-container">
       {props.posts.map( post => (
            <Post post = {post} />
        ))}
        </div>
       
    )
}

PostContainer.propTypes = {
    containerObject: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.shape({
            username:PropTypes.string,
            text: PropTypes.string,
        })
    }) 
    

}


export default PostContainer;