import React, { Component } from 'react';
import Boxes from "../../components/boxes";
import queryString from 'query-string';

import Course from "./tabs/course";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: 1,
                name: "Idk what to put as a title",
                startDate: "05 Dec 2018",
                endDate: "07 Jan 2019",
                phase: "Course"
            },
            tab: ""
        }

        const { name, startDate, phase, endDate } = this.state.course;
        this.tabs = ["", "", <Course name={name} startDate={startDate} endDate={endDate} phase={phase}/>, ""]
        this.clicked = this.clicked.bind(this);
    }

    getTab() {
        return this.state.tab;
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search);
        if (id) {
           console.log(id);
        }
    }

    clicked(id) {
        this.setState((state) => state.tab = this.tabs[id]);
    }

    render() {
        const { phase, name, startDate, endDate } = this.state.course;

        return (
            <div id="middle">
                <Boxes clicked={this.clicked}/>
                { this.getTab() }
            </div>
        )
    }
}