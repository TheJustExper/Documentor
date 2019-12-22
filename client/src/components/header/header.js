import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";

export default class extends Component {
    loginSection() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            return <li><Link to="/login">Login</Link></li>
        } else {
            return <li><Link to="/register">Register</Link></li>
        }
    }

    render() {
        return (
            <div id="header">
                <h1>Documentor</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { this.loginSection() }
                </ul>
            </div>
        )
    }
}