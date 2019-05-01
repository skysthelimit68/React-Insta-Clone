import React from 'react';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostPage = props => {
    return (
        <div className="App">
            <SearchBar 
                onChange = {props.onChange} 
                onSubmit = {props.onSubmit} 
                searchField = {props.searchField} 
            />
            <PostContainer 
                posts = {props.posts} 
                user = {props.user}
                searchField = {props.searchField}
            />
        </div>
    )
}

export default PostPage;


      /*  onChange = {this.onChange_SearchField} 
        onSubmit = {this.onSubmit_Search} 
        searchField = {this.state.searchField} 
        posts = {this.state.posts} 
        user = {this.state.user}*/

