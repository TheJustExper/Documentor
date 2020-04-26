import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="inner">
                    <div className="wheel">
                        {new Array(50).fill(0).map(() => {
                            return Math.random() > 0.5 ? 
                                <img alt="coin" src="https://csgoempire.com/img/coin-ct.ebf8a58b.png"/> : 
                                <img alt="coin" src="https://csgoempire.com/img/coin-t.5b1061aa.png"/>
                        })}
                    </div>
                    <div className="betButtons">
                        <div className="column">
                            <button className="bet">Place bet</button>
                            <div className="feed">
                                <div className="head">
                                    <p>30 Bets Total</p>
                                    <div className="icon">
                                        <img alt="coin" src="https://image.flaticon.com/icons/png/512/138/138281.png"/>
                                        <p>215.43</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <button className="bet">Place bet</button>
                            <div className="feed">
                                <div className="head">
                                    <p>30 Bets Total</p>
                                    <div className="icon">
                                        <img alt="coin" src="https://image.flaticon.com/icons/png/512/138/138281.png"/>
                                        <p>215.43</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <button className="bet">Place bet</button>
                            <div className="feed">
                                <div className="head">
                                    <p>30 Bets Total</p>
                                    <div className="icon">
                                        <img alt="coin" src="https://image.flaticon.com/icons/png/512/138/138281.png"/>
                                        <p>215.43</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}