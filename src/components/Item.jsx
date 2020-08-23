import React from 'react';


export default function Item({
    name,
    username,
    email
}) {
    return(
        <li className='list-group-item'>
            <h1>{name}</h1>
            <h3>{username} </h3>
            <span>{email}</span>
        </li>
    )
};
