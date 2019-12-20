import React from 'react';
import Latest from "../../components/latest/latest";
import Feed from "../../components/feed/feed";
import Trending from "../../components/sidebox/trending";
import Growing from "../../components/sidebox/growing";

import "./mainPage.scss";


export default () => {
    return (
        <div id="middle">
            <Latest/>
            <div className="parent">
                <Feed/>
                <div>
                    <Growing/>
                    <Trending/>
                </div>
            </div>
        </div>
    )
}