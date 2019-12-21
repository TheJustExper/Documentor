const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require("./src/api");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/api`, api.router);

app.listen(PORT, () => console.log("Running on port " + PORT));