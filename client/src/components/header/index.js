import React from 'react';
import { Link } from "react-router-dom";

import "./header.scss";

export default () => {
    return (
        <div id="header">
            <div className="inner">
                <h1>Course Academy</h1>
                <input placeholder="Search..."/>
                <ul>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/846/846449.svg"/>
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/2196/2196491.svg"/>
                        <li className="enabled"><Link to="/courses">Courses</Link></li>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/548/548427.svg"/>
                        <li><Link to="/refferals">Refferals</Link></li>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/561/561127.svg"/>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </ul>
                <div className="profile-section">
                    <div className="notifications">
                        <img src="https://image.flaticon.com/icons/svg/736/736183.svg"/>
                    </div>
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                        <b>Milton Salazar</b>
                    </div>
                </div>
            </div>
        </div>
    )
}