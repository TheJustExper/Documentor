import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import "./scss/file.scss";

function Sidebar() {
    return (
        <div id="sidebar">
                        <div className="section">
                            <h1>General</h1>
                            <ul>
                                <li>Something</li>
                                <li>Testing</li>
                                <li>Lorem</li>
                                <li>Ipsum thing</li>
                                <li>Config</li>
                            </ul>
                        </div>
                        <div className="section">
                            <h1>Idk what to put</h1>
                            <ul>
                                <li>Something</li>
                                <li>Testing</li>
                                <li>Lorem</li>
                                <li>Ipsum thing</li>
                                <li>Config</li>
                            </ul>
                        </div>
                        <div className="section">
                            <h1>Idk what to put</h1>
                            <ul>
                                <li>Something</li>
                                <li>Testing</li>
                                <li>Lorem</li>
                                <li>Ipsum thing</li>
                                <li>Config</li>
                            </ul>
                        </div>
                    </div>
    )
}

function Article() {
    return (
        <article>
                        <h1>Documentor</h1>
                        <p>A generated document website</p>
                        <br></br>
                        <ul>
                            <li>Easily setup and constructed well</li>
                            <li>A fully customisable website</li>
                            <li>Shows you how to edit and create</li>
                            <li>Code is well commented so easy to understand</li>
                            <li>Bug free unless you find something</li>
                        </ul>
                        <br></br>
                        <h1>Customizing</h1>
                        <p>To customize the website you can use the admin dashboard which allows 
                        for customization of the website. The way the dashboard works is the IP of the server is used as the only <b>Connector</b> which stops intruders from logging in and changing the website. You can add multiple IP's but when created the servers is the only one set.</p>
                        <br></br>
                        <ul>
                            <li>Allows for security against intruders</li>
                            <li>Add multiple IP's</li>
                        </ul>
                        <br></br>
                        <h1>Server</h1>
                        <p>The server servers the website but not statically as this website is customisable on the frontend and saved on the backend meaning we need some sort of connection to a backend to handle the changes and save them.<br></br>Once downloaded</p>
                        <br></br>
                        <div className="codeBlock">
                            <span>$</span> npm run setup <span>(Adds the IP into the config)</span>
                            <br></br>
                            <span>$</span> npm run start <span>(Starts the server)</span>
                            <br></br>
                        </div>
                    </article>
    )
}

class App extends Component {

    render() {
        return (
            <div id="main">
                <Header/>
                <div className="content">
                    <Sidebar/>
                    <Article/>
                </div>
            </div>
        );
    }
}

export default App;
