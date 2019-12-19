const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;

const fs = require("fs");
const routes = fs.readdirSync("./src/routes").map(f => require(`./src/routes/${f}`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.map(route => app.use(`/${route.name}`, route.router));

app.listen(PORT, () => console.log("Running on port " + PORT));