import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    let [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h2>Hello From Posts : {post.length} </h2>
            {
                post.map(index=><Link to={"/post/"+index.id}>{index.id}</Link>)
            }
        </div>
    );
};

export default Post;