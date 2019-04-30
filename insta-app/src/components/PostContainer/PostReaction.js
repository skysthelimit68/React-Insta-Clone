import React from 'react';
import PropTypes from 'prop-types';

class PostReaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : props.likesCt,
            comments : props.commentsCt,
            liked : false
        }
    }

    likeToggle = () => {
        let newLikeCt = this.state.likes;
        newLikeCt = !this.state.liked ? newLikeCt+=1 : newLikeCt-=1 ;
        
        this.setState({
            liked : !this.state.liked,
            likes : newLikeCt,
        })
    }

    render() {
        let likeClass = !this.state.liked ? "reaction-icons react-heart" : "react-heart-active";
        return (
            <div className="reaction-icons-wrapper">
                <div className={likeClass} onClick = {this.likeToggle}></div>
                <div className="reaction-icons react-thoughtBubble"></div>
                <span className="react-count">{this.state.likes}{" "}Likes</span>
            </div>
        )
    }
}




/*const PostReaction = props => {
    return (
        <div className="reaction-icons-wrapper">
            <div className="reaction-icons react-heart"></div>
            <div className="reaction-icons react-thoughtBubble"></div>
            
            <span className="react-count">{props.likesCt}{" "}Likes</span>
        </div>
    )
}*/


PostReaction.propTypes = {
    likesCt: PropTypes.number,
    commentsCt: PropTypes.number
}

export default PostReaction;