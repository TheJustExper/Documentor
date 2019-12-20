import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";

export default class extends Component {
    render = () => {
        return (
            <div id="header">
                <h1>Documentor</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>
            </div>
        )
    }
}