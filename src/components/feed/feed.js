import React, { Component, useEffect, useState } from 'react';
import Requests from "../../Requests";
import DropDown from "../dropdown/dropdown";
import Post from "../post/post";
import "./feed.scss";

export default () => {
    /*
        React use state functionality for when a component doesn't need props passing
        but needs a state
    */
    const [ feed, setFeed ] = useState([]);

    useEffect(() => {
        /* Creating a IIFE async function to be called instanly 
           because the useEffect functon can't be type of async */
        (async function getFeed() {
            const data = await Requests.getFeed();
            setFeed(data);
        })();
    }, []);

    // the feed is mapped and the post's are created with the data in the array
    return (
        <div id="feed">
            <DropDown/>
            {feed.length > 0 ? feed.map((post) => {
                return <Post data={post}/>
            }) : <h1>No posts</h1>}
        </div>
    )
}