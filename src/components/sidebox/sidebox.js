import React, {Component} from 'react';
import "./sidebox.scss";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebox">
                <div className="header">
                    <h1>Todays Top Growing Communities</h1>
                </div>
                <div className="communities">
                    {[1, 2, 3, 4, 5].map((val) => {
                        return (
                            <div className="community">
                                <div className="inner">
                                    <b>{val}</b>
                                    <img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
                                    <p>r/{["Random", "WCGR", "Sports", "Gaming", "CounterStrike"][Math.floor(Math.random() * 5)]}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}