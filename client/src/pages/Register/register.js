import React, { Component } from 'react';
import Request from "../../Requests";
import Input from "../../components/input/input";
import "../../scss/form.scss";

export default class extends Component {
    state = { username: "", password: "" };
    register = this.register.bind(this);

    register() {
        const { username, password } = this.state;
        Request.registerAccount(username, password);
    }

    handleUsername(type, event) {
         this.setState({ [type]: event.target.value });
    }
    
    render() {
        return (
            <div className="section">
                <div className="inner">
                    <h1>Register section</h1>
                    <Input type="username" placeholder="Username" onChange={(e) => this.handleUsername("username", e)}/>
                    <Input type="password" placeholder="Password" onChange={(e) => this.handleUsername("password", e)}/>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}