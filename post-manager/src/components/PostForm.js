import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

const PostForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.post.error);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({ name, description }));
        setName('');
        setDescription('');
    }

    return (
        <div>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" />
                <button type="submit">Crear Post</button>
            </form>
        </div>
    );
}

export default PostForm;
