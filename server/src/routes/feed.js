const { posts } = require("../testingData.json");

module.exports = {
    name: "/feed",
    router: function(req, res) {
        let data = posts;
        res.send(JSON.stringify(data));
    }
}

