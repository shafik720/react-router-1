import React from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    let param = useParams();
    return (
        <div>
            <h2>Post Details for : {param.postDetails} </h2>
        </div>
    );
};

export default PostDetails;