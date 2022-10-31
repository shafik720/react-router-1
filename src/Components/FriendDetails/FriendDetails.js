import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    let param = useParams();
    return (
        <div>
            <h3>Friend Details : {param.details}</h3>
        </div>
    );
};

export default FriendDetails;