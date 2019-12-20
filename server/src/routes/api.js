const express = require('express');
const router = express.Router();

const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

router.get("/feed", (req, res) => {
    let data = [1, 2, 3, 4, 5].map((val) => {
        return {
            title: "Test",
            description: "This is a testing post",
            img: `https://picsum.photos/600/${between(300, 500)}`,
            author: "Bob",
            authorIcon: `https://picsum.photos/${between(30, 50)}/${between(30, 50)}`,
            sub: "Sports",
            upvotes: between(0, 999),
        }
    })
    res.send(JSON.stringify(data));
});

module.exports.router = router;
module.exports.name = "api";