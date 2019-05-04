import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const AddCommentWrapper = styled.div`
    border-top: 1px solid #22222220;
    margin-top: 10px;
    min-height: 56px;
    display:flex;
    align-items:center;
    font-size:0.9rem;
    `;

const CommentForm = styled.form`
    width:100%;
    `;

const CommentInput = styled.input`
    border: none;
    height: 18px;
    max-height: 80px;
    resize: none;
    width: 100%;
    outline: 0;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 8px;
    color:#666;
    `;


const AddComment = props => {
    return (
        <AddCommentWrapper>
            <CommentForm onSubmit = {props.onSubmit}>
                <CommentInput 
                    placeholder = "Add comment"
                    value = {props.commentField}
                    onChange = {props.onChange}
                />
            </CommentForm >
        </AddCommentWrapper>
    )
}

AddComment.propTypes = {
    commentField: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

export default AddComment;