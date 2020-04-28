import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { phase, startDate, endDate } = this.props;
        return (
            <div className="info">
                <div>
                    <b>Phase</b>
                    <p>{phase}</p>
                </div>
                <div>
                    <b>Course start date</b>
                    <p>{startDate}</p>
                </div>
                <div>
                    <b>course end date</b>
                    <p>{endDate}</p>
                </div>
                <div>
                    <b>task status</b>
                    <p style={{ color: "red" }}>Incomplete</p>
                </div>
            </div>
        )
    }
}