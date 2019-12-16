import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import Middle from "../middle/middle";

import "../../scss/file.scss"

function App() {
    let [ loggedIn, setLoggedIn ] = useState(false);

    return (
        <div id="main">
            <Header/>
            <Middle/>
        </div>
    );
}

export default App;
