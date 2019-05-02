import React from 'react';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import styled from "styled-components";

const App = styled.div`
  background-color: #fafafa;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  color: #262626;
`;

const PostPage = props => {
    
    return (
        <App>
            <SearchBar 
                onChange = {props.onChange} 
                onSubmit = {props.onSubmit} 
                searchField = {props.searchField} 
            />
            <button onClick = {props.logout}>logout</button>
            <PostContainer 
                posts = {props.posts} 
                user = {props.user}
                searchField = {props.searchField}
            />
        </App>
    )


    /*
    return (
        <div className="App">
            <SearchBar 
                onChange = {props.onChange} 
                onSubmit = {props.onSubmit} 
                searchField = {props.searchField} 
            />
            <button onClick = {props.logout}>logout</button>
            <PostContainer 
                posts = {props.posts} 
                user = {props.user}
                searchField = {props.searchField}
            />
        </div>
    )*/
}

export default PostPage;


      /*  onChange = {this.onChange_SearchField} 
        onSubmit = {this.onSubmit_Search} 
        searchField = {this.state.searchField} 
        posts = {this.state.posts} 
        user = {this.state.user}*/

