import React, { Component, useEffect, useState } from 'react';
import Requests from "../../Requests";
import DropDown from "../dropdown/dropdown";
import Post from "./feedPost";
import LoadingPost from "./loadingPost";
import "./feed.scss";

/* 
    Maybe at some point comment this code but
    at the moment I can only comment the obvious
    as there is nothing complex going on
*/

export default () => {
    const [ feed, setFeed ] = useState([]);

    useEffect(() => {
        Requests.getRequest("feed").then(setFeed);
    }, []);

    return (
        <div id="feed">
            <DropDown/>
            { feed.length > 0
                ? feed.map((data, index) => <Post data={data} key={index}/>)
                : [1, 2, 3].map(val => {
                    return <LoadingPost/>
                }) }
        </div>
    )
}