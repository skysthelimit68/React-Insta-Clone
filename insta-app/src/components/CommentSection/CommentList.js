import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import PropTypes from 'prop-types';
import moment from 'moment';

import styled from "styled-components";

const CommentsWrapper = styled.div`
    padding:8px 16px;
    `;

const Timestamp = styled.div`
    color: #22222250;
    font-size: 0.8rem;
    font-weight: bold;
    margin:5px 0;
    `;

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : props.comments,
            timestamp : props.timestamp,
            commentField : "",
        }
    }

    //will need to change to ... later
    addComment = (event) => {
        event.preventDefault();
       /* let newComments = this.state.comments;
        newComments.push({
            id : `${this.props.postId}-${this.state.comments.length}`,
            text: this.state.commentField,
            username: localStorage.getItem("user"),
        })*/

        //let newComments = 
        
        this.setState({
            comments: [...this.state.comments, {
            id:`${this.props.postId}-${this.state.comments.length}`,
            text:this.state.commentField,
            username:localStorage.getItem("user")
        }],
            commentField : ""
        }) 
    }

    updateField = event => {
        this.setState({
            commentField: event.target.value,
        })
    }

    render() {
        return (
            <CommentsWrapper>
                {this.state.comments.map(comment => (
                    <Comment comment = {comment} />
                ))}
                <Timestamp>
                    {moment(this.state.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
                </Timestamp>
                <AddComment onChange= {this.updateField} commentField = {this.state.commentField } onSubmit = {this.addComment} />    
            </CommentsWrapper>
        )
    }
}


/*
const CommentList = props => {
    return (
        <div className="comments-wrapper">
            {props.comments.map(comment => (
                <Comment comment = {comment} />
            ))}
            <div className="timestamp">{props.timestamp}</div>
            <AddComment onChange= {props.onChange} commentField= {props.commentField }/>    
        </div>
    )
}*/


CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
    timestamp: PropTypes.string,
    postId: PropTypes.string,
    user: PropTypes.string
}

export default CommentList;