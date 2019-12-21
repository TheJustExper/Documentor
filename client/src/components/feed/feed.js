import React, { useEffect, useState } from 'react';
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

    function getFeed() {
        if (feed.length > 0) {
            return feed.map((data, index) => <Post data={data} key={index}/>)
        } else {
            return [1, 2, 3].map(index => {
                return <LoadingPost key={index}/>
            })
        }
    }

    return (
        <div id="feed">
            <DropDown/>
            {getFeed()}
        </div>
    )
}