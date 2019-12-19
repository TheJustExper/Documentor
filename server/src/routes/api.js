const express = require('express');
const router = express.Router();

router.get("/feed", (req, res) => {
    console.log("GET request on the feed");
});

module.exports.router = router;
module.exports.name = "api";