import React from 'react';
import PostHeader from './PostHeader';
import PostReaction from './PostReaction';
import CommentList from '../CommentSection/CommentList';
import './PostContainer.css';
import PropTypes from 'prop-types';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="post-wrapper">
                <PostHeader userName = {this.props.post.username} thumbnail = {this.props.post.thumbnailUrl}/>
                <div className="postImg-wrapper"><img src={this.props.post.imageUrl} /></div>
                <PostReaction likesCt = {this.props.post.likes} commentsCt = {this.props.post.comments.length} />
                <CommentList 
                comments = {this.props.post.comments} 
                timestamp = {this.props.post.timestamp} 
                postId = {this.props.post.id}
                user = {this.props.user}
                />
                
            </div>
        ) 
    }
}


/*const Post = props => {
    return (
        <div className="post-wrapper">
            <PostHeader userName = {props.post.username} thumbnail = {props.post.thumbnailUrl}/>
            <img src={props.post.imageUrl} />
            <PostReaction likesCt = {props.post.likes} commentsCt = {props.post.comments.length} />
            <CommentList comments = {props.post.comments} timestamp = {props.post.timestamp} />
            
        </div>
    )
}*/

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
        }),
    }) ,
    user: PropTypes.string
    

}

export default Post;