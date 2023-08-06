import React from 'react';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import './App.css';

function App() {
    return (
        <div className="container">
            <header>
                <h1>Administrador de Posts</h1>
            </header>
            <div className="post-form">
                <PostForm />
            </div>
            <div className="filter">
                <PostFilter />
            </div>
            <div className="posts">
                <PostList />
            </div>
        </div>
    );
}

export default App;
