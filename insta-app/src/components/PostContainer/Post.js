import React from 'react';
import PostHeader from './PostHeader';
import PostReaction from './PostReaction';
import CommentList from '../CommentSection/CommentList';

const Post = props => {
    return (
        <div>
            <PostHeader userName = {props.post.username} thumbnail = {props.post.thumbnailUrl}/>
            <img src={props.post.imageUrl} />
            <PostReaction likesCt = {props.post.likes} commentsCt = {props.post.comments.length} />
            <CommentList comments = {props.post.comments} />
            {props.post.timestamp}
        </div>
    )
}

export default Post;