import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
            <Link to={"/friend/"+id}>Click Me</Link>
            <button onClick={showUser}>Show User</button>
        </div>
    );
};

export default Friend;