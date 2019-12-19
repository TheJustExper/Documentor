import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import Middle from "../middle/middle";
import Post from "../post/post";

import "../../scss/file.scss";

function App() {
    let [ loggedIn, setLoggedIn ] = useState(false);

    return (
        <Router>
            <div id="main">
                <Header/>
                <Middle/>
            </div>
            <Switch>
                <Route path="/post">
                    <Post/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
