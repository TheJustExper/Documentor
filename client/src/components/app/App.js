import React, { Component } from 'react';
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Courses from "../../pages/courses";
import Course from "../../pages/course";

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
                        <Route exact path="/courses"><Courses/></Route>
                        <Route path="/course" render={props => <Course {...props} />}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
