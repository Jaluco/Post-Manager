import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/get', async () => {
  const response = await axios.get('http://localhost:3001/posts');
  return response.data;
});

export const deletePost = createAsyncThunk('posts/delete', async (postId) => {
  await axios.delete(`http://localhost:3001/posts/${postId}`);
  return postId;
});

export const createPost = createAsyncThunk('posts/create', async (post) => {
  const response = await axios.post('http://localhost:3001/posts', post);
  return response.data;
});
