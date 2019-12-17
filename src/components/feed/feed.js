import React, { Component, useEffect, useState } from 'react';
import DropDown from "../dropdown/dropdown";
import Post from "../post/post";
import "./feed.scss";

export default () => {
    return (
        <div id="feed">
            <DropDown/>
            <Post title="Some random title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." sub="Sports" author="CottenEyeJoe"/>
            <Post title="Test" description="Another test" sub="Random" author="Test" img="https://preview.redd.it/t3yc8qltb4541.jpg?width=640&height=1138&crop=smart&auto=webp&s=06ac21236b3f35769d18e1b169c6c7bf25caba2c"/>
            <Post title="Abubakr vs Randy" description="Another test" sub="WWE" author="Randy Ortan"/>
            <Post title="Some random image" description="Another test" sub="Shitpost" author="Twat" img="https://i.redd.it/nfd4glar36541.jpg"/>
            <Post title="Get rekt" description="Another test" sub="MurderedByWords" author="Barry" img="https://preview.redd.it/4z27399283541.jpg?width=640&height=836&crop=smart&auto=webp&s=fd46cfb758e002629ff4847812637a69e58a95ef"/>
            <Post title="Get rekt" description="Another test" sub="MurderedByWords" author="Barry" img="https://i.redd.it/l3v6ic59d5541.jpg"/>
            <Post title="And his name is John Cena" description="Another test" sub="Test" author="John Cena"/>
            <Post title="Lorem Ipsum" description="Another test" sub="Lol" author="Lorem"/>
        </div>
    )
}