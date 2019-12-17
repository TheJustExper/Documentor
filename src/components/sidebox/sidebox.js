import React, {Component} from 'react';
import "./sidebox.scss";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebox">
                {this.props.children}
            </div>
        )
    }
}