import React, {Component} from 'react';
import Latest from "../latest/latest";
import Feed from "../feed/feed";
import Trending from "../sidebox/trending";
import Growing from "../sidebox/growing";

import "./middle.scss";


export default () => {
    return (
        <div id="middle">
            <Latest/>
            <Feed/>
            <Growing/>
            <Trending/>
        </div>
    )
}