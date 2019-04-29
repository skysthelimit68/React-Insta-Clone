import React from 'react';
import PostHeader from './PostHeader';
import PostReaction from './PostReaction';
import CommentList from '../CommentSection/CommentList';
import './PostContainer.css';
import PropTypes from 'prop-types';


const Post = props => {
    return (
        <div className="post-wrapper">
            <PostHeader userName = {props.post.username} thumbnail = {props.post.thumbnailUrl}/>
            <img src={props.post.imageUrl} />
            <PostReaction likesCt = {props.post.likes} commentsCt = {props.post.comments.length} />
            <CommentList comments = {props.post.comments} timestamp = {props.post.timestamp} />
            
        </div>
    )
}

Post.propTypes = {
    postObject: PropTypes.shape({
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

export default Post;