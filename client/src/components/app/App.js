import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
                    
                </div>
            </Router>
        );
    }
}

export default App;
