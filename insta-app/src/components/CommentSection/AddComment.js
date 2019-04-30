import React from 'react';
import PropTypes from 'prop-types';


const AddComment = props => {
    return (
        <div className="addComment">
            <form onSubmit = {props.onSubmit}>
                <input 
                    placeholder = "Add comment"
                    value = {props.commentField}
                    onChange = {props.onChange}
                />
            </form>
        </div>
    )
}

AddComment.propTypes = {
    commentField: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

export default AddComment;