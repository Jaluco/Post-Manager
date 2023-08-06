import { createReducer } from '@reduxjs/toolkit';
import { getPosts, deletePost, createPost } from '../actions/postActions';

const initialState = {
    posts: [],
    filteredPosts: [],
    loading: false,
    error: null,
    filterQuery: ''
};

const postReducer = createReducer(initialState, {
    [getPosts.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.filteredPosts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    },
    [deletePost.fulfilled]: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
        state.filteredPosts = state.filteredPosts.filter(post => post.id !== action.payload);
    },
    [createPost.fulfilled]: (state, action) => {
        state.posts.push(action.payload);
    
        // Solo añadimos el nuevo post a `filteredPosts` si pasa el filtro
        if (action.payload.name.toLowerCase().includes(state.filterQuery)) {
            state.filteredPosts.push(action.payload);
        }
    },
    'posts/filter': (state, action) => {
        state.filterQuery = action.payload;
        state.filteredPosts = state.posts.filter(post => post.name.toLowerCase().includes(action.payload));
    }    
});

export default postReducer;