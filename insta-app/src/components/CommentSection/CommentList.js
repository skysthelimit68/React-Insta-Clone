import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import PropTypes from 'prop-types';
import moment from 'moment';


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
        let newComments = this.state.comments;
        newComments.push({
            id : `${this.props.postId}-${this.state.comments.length}`,
            text: this.state.commentField,
            username: localStorage.getItem("user"),
        })
        
        this.setState({
            comments: newComments,
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
            <div className="comments-wrapper">
                {this.state.comments.map(comment => (
                    <Comment comment = {comment} />
                ))}
                <div className="timestamp">
                    {moment(this.state.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
                </div>
                <AddComment onChange= {this.updateField} commentField = {this.state.commentField } onSubmit = {this.addComment} />    
            </div>
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