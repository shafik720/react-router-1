import React from 'react';
import { useNavigate } from 'react-router';

const Friend = (props) => {
    const{name, id, username} = props.index
    let navigate =  useNavigate();
    function showUser(){
        let path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name : {name} </h2>
            <button onClick={showUser}>Show User</button>
        </div>
    );
};

export default Friend;