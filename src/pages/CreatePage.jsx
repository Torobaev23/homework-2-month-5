import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import axios from 'axios'


function Create() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const newPost = {title, body};
        axios.post('https://dummyjson.com/posts', newPost)
            .then(response => {
                console.log('Post created:', response.data);
                navigate("/posts");
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });

        navigate('/posts')
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;
