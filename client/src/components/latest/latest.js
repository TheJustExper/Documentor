import React, { Component, useState, useEffect } from 'react';
import Requests from "../../Requests";
import "./latest.scss";

export default () => {
    const [ latest, setLatest ] = useState([]);

    useEffect(() => {
        Requests.getLatest().then(setLatest);
    });

    function getLatest() {
        return [1, 2, 3, 4].map(() => {
            return (
                <div className="item">
                    <div className="image"></div>
                    <div className="text">
                        <h1>Random</h1>
                        <p>Lorem ipsum stuff</p>
                    </div>
                </div>
            )
        });
    }

    return (
        <div id="latest">
            {getLatest()}
        </div>
    )
}