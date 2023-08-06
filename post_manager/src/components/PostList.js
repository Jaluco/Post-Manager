import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost } from '../redux/actions/postActions';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.filteredPosts);
    const loading = useSelector(state => state.post.loading);
    const error = useSelector(state => state.post.error);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (posts.length === 0) {
        return <p>No hay posts para mostrar</p>;
    }

    return (
        <div className="post-list">
            {posts.map(post => (
                <div className="post-card" key={post.id}>
                    <h2 className="post-title">{post.name}</h2>
                    <p className="post-description">{post.description}</p>
                    <button className="delete-button" onClick={() => dispatch(deletePost(post.id))}>Eliminar</button>
                </div>
            ))}
        </div>


    );
}

export default PostList;
