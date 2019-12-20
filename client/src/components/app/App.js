import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import MainPage from "../../pages/Main/mainPage";
import PostPage from "../../pages/Post/postPage";

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
                    <Header/>
                    <Switch>
                        <Route exact path="/"><MainPage/></Route>
                        <Route path="/post/:id" render={props => <PostPage {...props} />}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
