import React, {Component} from 'react';

export default () => {
    return (
        <div id="header">
            <div className="layer">
                <h1>Reddit v2</h1>
                <ul>
                    <li>Home</li>
                    <li>Docs</li>
                    <li>Support</li>
                    <li>Dashboard</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className="layer">
                <div className="input">
                    <input placeholder="Search documentation..."></input><button id="search">Search</button>
                </div>
            </div>
        </div>
    )
}