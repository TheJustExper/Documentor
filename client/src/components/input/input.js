import React, { Component } from "react";
import "./input.scss";

export default class extends Component {
    render() {
        const { type, placeholder, onChange } = this.props;
        return (
            <div className="outer">
                <label for={type}>{type}</label>
                <input name={type} className="textField" placeholder={placeholder} onChange={onChange}/>
            </div>
        )
    }
}