import React, { Component } from 'react';
import Boxes from "../../components/boxes";
import queryString from 'query-string';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: 1,
                name: "Fullstack development for retards",
                startDate: "05 Dec 2018",
                endDate: "07 Jan 2019",
                phase: "Course"
            }
        }
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search);
        if (id) {
           console.log(id);
        }
    }

    render() {
        const { phase, name, startDate, endDate } = this.state.course;

        return (
            <div id="middle">
                <Boxes/>
                <div className="inner">
                    <div className="left">
                        <div className="section">
                            <div className="title">
                                <h1>{name}</h1>
                                <div className="progress">
                                    <p>Progress 32#</p>
                                    <div className="outer">
                                        <div id="bar"></div>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                        <div className="section">
                            <p className="title">Task overview</p>
                            <p>Illustrator - the world's leading vector illustration software can be used to accomplish many different design tasks. This course teaches core concepts and techniques that can be applied to any work flow for print, for the web, or for assets that will find their way into...</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="sidebar"></div>
                    </div>
                </div>
            </div>
        )
    }
}