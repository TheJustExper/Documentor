import React, { Component } from 'react';
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../pages/home";
import Courses from "../../pages/courses";
import Course from "../../pages/course";
import Login from "../../pages/login";

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
                    <Switch>
                        <Route path="/" exact><Home/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/courses"><Courses/></Route>
                        <Route path="/course" render={props => <Course {...props} />}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
