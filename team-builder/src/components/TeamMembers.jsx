import React from 'react';

export default function TeamMembers(props) {
    const { details } = props;

    if(!details) {
        return (
            <h3>FIX YOUR HECKING STUFF</h3>
        );
    }

    return(
        <div className = 'member container'>
            <h2>{details.gameTag}</h2>
            <p>WinRate: {details.winRate}%</p>
            <p>Role: {details.role}</p>
            <p>Main: {details.main}</p>
            <p>Preferred Class: {details.class}</p>
        </div>
    );
}