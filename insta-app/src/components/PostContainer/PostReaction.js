import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const ReactionIconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px 16px;`;

const ReactionIcons = styled.div`
    background-image: url(/static/media/insta-sprite.d0e3cb0e.png);
    width: 24px;
    height: 24px;
    margin-right: 16px;

    ${props => (props.type === 'react-thoughtBubble' ? `background-position: 0px -177px;` : null)}
    ${props => (props.type === 'react-heart' ? `background-position: -231px -130px;` : null)}
    ${props => (props.type === 'react-heart-active' ? `background-position: -231px -104px;` : null)}
`;

const ReactCount = styled.span`
    margin-top:10px;
    width:100%;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    color: #262626;
    margin-right:0.1rem;`;


class PostReaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : props.likesCt,
            comments : props.commentsCt,
            liked : false
        }
    }

    likeToggle = (event) => {
        event.preventDefault();
        let newLikeCt = this.state.likes;
        newLikeCt = !this.state.liked ? newLikeCt+=1 : newLikeCt-=1 ;
        
        this.setState({
            liked : !this.state.liked,
            likes : newLikeCt,
        })
    }

    render() {
        let likeClass = !this.state.liked ? "react-heart" : "react-heart-active";
        return (
            <ReactionIconsWrapper>
                <ReactionIcons type={likeClass} onClick = {this.likeToggle}></ReactionIcons>
                <ReactionIcons type="react-thoughtBubble"></ReactionIcons>
                <ReactCount>{this.state.likes}{" "}Likes</ReactCount>
            </ReactionIconsWrapper>
        )
    }

    /*render() {
        let likeClass = !this.state.liked ? "reaction-icons react-heart" : "react-heart-active";
        return (
            <div className="reaction-icons-wrapper">
                <div className={likeClass} onClick = {this.likeToggle}></div>
                <div className="reaction-icons react-thoughtBubble"></div>
                <span className="react-count">{this.state.likes}{" "}Likes</span>
            </div>
        )
    }*/
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