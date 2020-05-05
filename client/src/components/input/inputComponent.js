import React from 'react';
import "./inputComponent.scss";

export default ({ label = "Add label", placeholder = "Enter...", type, style }) => {
    return (
        <div className="outer" style={style}>
            <label htmlFor="text">{label}</label>
            <input name="text" className="inputComponent" type={type} placeholder={placeholder}/>
        </div>
    )
}