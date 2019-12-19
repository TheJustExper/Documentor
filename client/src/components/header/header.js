import React, {Component} from 'react';
import { BrowserRouter as Link, Route, Switch } from "react-router-dom";
import "./header.scss";

export default () => {
    return (
        <div id="header">
            <h1>Documentor</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )
}