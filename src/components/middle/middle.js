import React, {Component} from 'react';
import Feed from "../feed/feed";
import SideBox from "../sidebox/sidebox";
import "./middle.scss";

export default () => {
    return (
        <div id="middle">
            <h1>Middle</h1>
            <Feed/>
            <SideBox>
                <div className="header">
                    <h1>Todays Top Growing Communities</h1>
                </div>
                <div className="communities">
                    {[1, 2, 3, 4, 5].map((val) => {
                        return (
                            <div key={val} className="community">
                                <div className="inner">
                                    <b>{val}</b>
                                    <img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
                                    <p>r/{["Random", "WCGR", "Sports", "Gaming", "CounterStrike"][Math.floor(Math.random() * 5)]}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </SideBox>

            <div id="trending">
                <h1>TRENDRING COMMUNITIES</h1>
                <div className="communities">
                    {[1, 2, 3, 4].map((val) => {
                        return (
                            <div key={val} className="community">
                                <div className="inner">
                                    <img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
                                    <div className="text">
                                        <b>r/{["Random", "WCGR", "Sports", "Gaming", "CounterStrike"][Math.floor(Math.random() * 5)]}</b>
                                        <p>{Math.floor(Math.random() * 9999)} Members</p>
                                    </div>
                                    <button>Join</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}