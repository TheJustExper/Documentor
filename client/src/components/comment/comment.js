import React, { useEffect, useState } from 'react';
import "./comment.scss";

export default ({ loggedIn }) => {
    if (loggedIn) {
        return (
            <div className="createComment">
                <textarea className="commentInput">Insert comment here</textarea>
            </div>
        )
    } else {
        return <div className="createComment"><h1>To comment you need to login</h1></div>
    }
}