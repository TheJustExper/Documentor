import React, {Component} from 'react';
import Feed from "../feed/feed";
import SideBox from "../sidebox/sidebox";
import "./middle.scss";

export default () => {
    return (
        <div id="middle">
            <h1>Middle</h1>
            <Feed/>
            <SideBox/>
        </div>
    )
}