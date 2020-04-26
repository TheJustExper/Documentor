import React, { Component } from 'react';

import Roulette from "./tabs/roulette/roulette";
import Minesweeper from "./tabs/minesweeper/minesweeper";

import "./Gamble.scss";

export default class extends Component {
    state = {
        tabs: [
            <Roulette/>, 
            <Minesweeper/>
        ],
        selected: 0
    }

    getButtons() {
        return ["Roulette", "Minesweeper"].map((val, index) => {
            return <button onClick={() => this.setTab(index)}>{val}</button>
        });
    }

    setTab = (selected) => this.setState({ selected });

    render() {
        return (
            <div className="gamble">
                <div className="buttons">
                    { this.getButtons() }
                </div>
                { this.state.tabs[this.state.selected] }
            </div>
        )
    }
}