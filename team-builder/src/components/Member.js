import React from 'react';
import '../App.css';

export default function Member(props) {
    const { name,email,role } = props.details;

    return (
        <div className="memberContainer">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}