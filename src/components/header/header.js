import React, {Component} from 'react';
import "./header.scss";

export default () => {
    return (
        <div id="header">
            <h1>Reddit v2</h1>
            <ul>
                <li>Home</li>
                <li>Docs</li>
                <li>Support</li>
                <li>Dashboard</li>
                <li>Github</li>
            </ul>
        </div>
    )
}