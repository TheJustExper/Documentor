import React, { Component } from 'react';
import Info from "../../../components/info"
import ProgressBar from "../../../components/progressBar";

export default ({ name, phase, startDate, endDate }) => {
    return (
        <div className="inner">
            <div className="left">
                <div className="section">
                    <div className="title">
                        <h1>{name}</h1>
                        <ProgressBar percent={80}/>
                    </div>
                    <Info phase={phase} startDate={startDate} endDate={endDate}/>
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
    )
}