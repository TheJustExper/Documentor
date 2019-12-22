const { posts } = require("../testingData.json");

module.exports = {
    name: "/feed",
    type: "GET",
    router: function(req, res) {
        res.send(JSON.stringify(posts));
    }
}

