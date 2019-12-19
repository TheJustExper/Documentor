import React, { Component, useEffect, useState } from 'react';
import Requests from "../../Requests";
import DropDown from "../dropdown/dropdown";
import Post from "./feedPost";
import "./feed.scss";

/* 
    Maybe at some point comment this code but
    at the moment I can only comment the obvious
    as there is nothing complex going on
*/

export default () => {
    const [ feed, setFeed ] = useState([
        {
            title: "Test",
            description: "This is a testing post",
            img: "https://preview.redd.it/p60nkqq70d541.jpg?width=640&height=371&crop=smart&auto=webp&s=14190f8f7a84e5db0cf43bc6baddca2a598da5d6",
            author: "Bob",
            authorIcon: "https://miro.medium.com/max/400/1*B8c1ED3QV_yaa6PAWqDgMw.png",
            sub: "Sports",
            upvotes: 364,
        },
        {
            title: "Test",
            description: "This is a testing post",
            author: "Bob",
            authorIcon: "https://miro.medium.com/max/400/1*B8c1ED3QV_yaa6PAWqDgMw.png",
            sub: "Sports",
            upvotes: 500,
        }
    ]);

    useEffect(() => {
        Requests.getFeed().then(setFeed);
    }, []);

    return (
        <div id="feed">
            <DropDown/>
            { feed.length > 0
                ? feed.map((data, index) => <Post data={data} key={index}/>)
                : <h1>No posts</h1> }
        </div>
    )
}