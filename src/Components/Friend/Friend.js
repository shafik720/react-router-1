import React from 'react';

const Friend = (props) => {
    const{name, id, username} = props.index
    return (
        <div>
            <h2>Name : {name} </h2>
        </div>
    );
};

export default Friend;