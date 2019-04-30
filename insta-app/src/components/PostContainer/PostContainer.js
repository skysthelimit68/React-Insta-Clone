import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';


const PostContainer = props => {
    return (
        <div className="posts-container">
            {props.posts.map( post => {
                if(!post.username.toLowerCase().includes(props.searchField.toLowerCase()))
                    {
                    return;
                } else {
                    return <Post post = {post} user = {props.user} />
                }
                
            })}
        </div>
    )
}




/*
const PostContainer = props => {
    if(props.searchResult.length === 0) {
        return (
            <div className="posts-container">
            {props.posts.map( post => (
                
            ))}
            </div>
        )
    } else {
        return (
            <div className="posts-container">
            {props.searchResult.map( post => (
                <Post post = {post} user = {props.user} />
            ))}
            </div>
        )
    }
}*/

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
    }) ,
    user : PropTypes.string,
    
    

}

export default PostContainer;