import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0
        }
    }

    clicked(id) {
        this.setState((state) => state.id = id);
        this.props.clicked(id);
    }

    render() {
        const tabs = ["Admissions", "PRE-COURSE", "COURSE", "OUTCOMES"]

        return (
            <div className="boxes">
                { tabs.map((tab, id) => {
                    return (<div className={this.state.id == id ? "box enabled" : "box"} onClick={() => this.clicked(id)}>
                        <h1>{tab}</h1>
                    </div>)
                    })
                }
            </div>
        )
    }
}