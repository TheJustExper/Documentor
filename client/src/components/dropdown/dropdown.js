import React, { useState } from 'react';
import "./dropdown.scss";

export default () => {
    let [ droppedDown, setDroppedDown ] = useState(false);

    return (
        <div className="create-post">
            <div className="top">
                <button className="button-primary--gold" onClick={() => setDroppedDown(!droppedDown)}>Show post dropdown</button>
            </div>
            { droppedDown ? 
               <div style={{ margin: "0px 10px 10px 10px" }}>
                   <input className="title" placeholder="Title"></input>
                   <textarea className="post-area" placeholder="Description" rows="20" cols="50"></textarea>
                </div>
            : ""
            }
        </div>
    )
}