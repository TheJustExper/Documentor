import React, { useState, useEffect } from 'react';
import Requests from "../../Requests";
import "./latest.scss";

export default () => {
    const [ latest, setLatest ] = useState([]);

    useEffect(() => {
        Requests.getRequest("latest").then(setLatest);
    }, []);

    function getLatest() {
        return latest.map(({ title, description }, index) => {
            return (
                <div className="item" key={index}>
                    <div className="image"></div>
                    <div className="text">
                        <h1>{title}</h1>
                        <p>{description}</p>
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