import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";

export default class extends Component {
    loginSection() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            return (
                <div className="buttons">
                    <button className="button-primary--gold">Login</button>
                </div>
            )
        } else {
            return (
                <div className="buttons">
                    <button className="button-primary--gold">Login</button>
                    <button className="button-primary--gold">Register</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="header">
                <div className="inner">
                    <h1>Documentor</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gamble">Gamble</Link></li>
                    </ul>
                </div>
                <div className="inner">
                    <div className="buttons">
                        { this.loginSection() }
                    </div>
                </div>
            </div>
        )
    }
}