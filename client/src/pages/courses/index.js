import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    name: "Fullstack development for retards",
                    startDate: "05 Dec 2018",
                    endDate: "07 Jan 2019",
                }
            ]
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(id) {
        window.location.href = "/course/" + id;
    }

    onComponentDidMount() {

    }

    render() {
        return (
            <div id="middle">
                <div className="courses">
                    {this.state.courses.map((course) => {
                        return (
                            <div className="course" onClick={() => this.clicked(course.id)}>
                                <b>{course.name}</b>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}