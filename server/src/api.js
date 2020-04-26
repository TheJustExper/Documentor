const fs = require("fs");
const express = require('express');
const router = express.Router();
const routes = fs.readdirSync(__dirname + "/routes").map(f => require(`./routes/${f}`));

routes.forEach((route) => {
    switch(route.type) {
        case "GET": router.get(route.name, route.router); break;
        case "POST": router.post(route.name, route.router); break;
        default: throw new Error("Route type is not valid"); break;
    }
});

module.exports.router = router;