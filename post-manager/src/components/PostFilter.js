import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostFilter = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const onChange = (e) => {
        setName(e.target.value);
        dispatch({ type: 'posts/filter', payload: e.target.value.toLowerCase() });
    };

    return (
        <div>
            <input type="text" value={name} onChange={onChange} placeholder="Filtrar por nombre" />
        </div>
    );
};

export default PostFilter;

