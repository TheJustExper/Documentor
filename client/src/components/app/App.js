import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import MainPage from "../../pages/Main/mainPage";
import PostPage from "../../pages/Post/postPage";

import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";

import Gamble from "../../pages/Gamble/Gamble";

import "../../scss/file.scss";

class App extends Component {
    state = {
        loggedIn: false
    }

    // Add automatic login through cookies
    componentDidMount() {}

    render() {
        return (
            <Router>
                <div id="main">
                    <Header loggedIn={this.state.loggedIn}/>
                    <Switch>
                        <Route exact path="/"><MainPage/></Route>
                        <Route exact path="/login"><Login/></Route>
                        <Route exact path="/register"><Register/></Route>
                        <Route exact path="/gamble"><Gamble/></Route>
                        <Route path="/post" render={props => <PostPage loggedIn={this.state.loggedIn} {...props} />}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
