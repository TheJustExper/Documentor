import React, { Component } from 'react';
import Input from "../../components/input";

import "./loginPage.style.scss";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.rememberMe = this.rememberMe.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    rememberMe() {}

    forgotPassword() {}

    render() {
        return (
            <div className="loginPage">
                <h1>Expers Site</h1>
                <div className="loginSection">
                    <div className="inner">
                        <Input style={{ marginBottom: "20px" }} label="Email Address" placeholder="Email"></Input>
                        <Input style={{ marginBottom: "20px" }} label="Password" placeholder="Password" type="password"></Input>
                        <div className="bottom">
                            <div className="rememberBox">
                                <input type="checkbox" id="remember" onClick={this.rememberMe}></input>
                                <p>Remember me</p>
                            </div>
                            <span onClick={this.forgotPassword} className="forgotPassword">Forgot password</span>
                        </div>
                        <div className="buttons">
                            <button className="button login">Login</button>
                            <button className="button signup">Sign up</button>
                        </div>
                        <div className="text">
                            <p>By signup up you agree to Expers Website</p>
                            <p><a href="/terms-and-conditions">Terms And Conditions</a> & <a href="/privacy-policy">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
                <div className="gradient"></div>
            </div>
        )
    }
}