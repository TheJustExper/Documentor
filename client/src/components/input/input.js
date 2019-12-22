import React, { Component } from "react";
import "./input.scss";

export default class extends Component {
    error() {
        const { error } = this.props;

        if (error != null && error.length > 0) {
            return <span style={{ color: "#fc3952" }}>{error}</span>
        }
    }

    render() {
        const { type, placeholder, onChange } = this.props;
        return (
            <div className="outer">
                <label for={type}>{type}: {this.error()}</label>
                <input name={type} className="textField" placeholder={placeholder} onChange={onChange}/>
            </div>
        )
    }
}