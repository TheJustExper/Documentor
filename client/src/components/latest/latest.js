import React, { useState, useEffect } from 'react';
import Requests from "../../Requests";
import "./latest.scss";

export default () => {
    const [ latest, setLatest ] = useState([]);

    useEffect(() => {
        Requests.getRequest("latest").then(setLatest);
    });

    function getLatest() {
        return [1, 2, 3, 4].map(index => {
            return (
                <div className="item" key={index}>
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