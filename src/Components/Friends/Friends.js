import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const[friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h2>Hello Friends : {friends.length} </h2>
            {
                friends.map(index=><Friend
                    key = {index.id}
                    index={index}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;