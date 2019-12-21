const fs = require("fs");
const express = require('express');
const router = express.Router();
const routes = fs.readdirSync(__dirname + "/routes").map(f => require(`./routes/${f}`));

routes.forEach((route) => router.get(`/${route.name}`, route.router));

module.exports.router = router;