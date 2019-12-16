import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

import "../../scss/file.scss"

class App extends Component {
    render() {
        return (
            <div id="main">
                <Header/>
                <div className="content">

                </div>
            </div>
        );
    }
}

export default App;
