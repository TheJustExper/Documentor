import React, { Component } from 'react';

export default ({ percent }) => {
    return (
        <div className="progress">
            <p>Progress {percent}%</p>
            <div className="outer">
                <div id="bar" style={{ width: `${percent}%`}}></div>
            </div>
        </div>
    )
}