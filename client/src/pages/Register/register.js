import React, { Component } from 'react';
import Request from "../../Requests";
import Input from "../../components/input/input";
import "../../scss/form.scss";

export default class extends Component {
    state = { 
        username: "",
        password: "",
        usernameError: null,
        passwordError: null,
    };

    register = this.register.bind(this);

    register() {
        this.resetErrors();
        const { username, password } = this.state;

        // Ill fix this later on as of now it's default
        if (username.length === 0 || username.length > 20) return this.setState({ usernameError: "Too big or too small" });
        if (password.length === 0 || password.length > 50) return this.setState({ passwordError: "Too big or too small" });

        Request.registerAccount(username, password);
    }

    resetErrors() {
        this.setState({ usernameError: null, passwordError: null });
    }

    handleValue(type, event) {
         this.setState({ [type]: event.target.value });
    }
    
    render() {
        const { usernameError, passwordError } = this.state;
        return (
            <div className="section">
                <div className="inner">
                    <h1>Register section</h1>
                    <Input type="username" placeholder="Username" onChange={(e) => this.handleValue("username", e)} error={usernameError}/>
                    <Input type="password" placeholder="Password" onChange={(e) => this.handleValue("password", e)} error={passwordError}/>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}