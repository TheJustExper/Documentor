// Testing data
const { posts } = require("../testingData.json");

module.exports = {
    name: "/post",
    router: function(req, res) {
        const { id } = req.query;
        if (id && Object.keys(req.query).length == 1) {
            const post = posts.find(post => post.id == id);
            if (post) {
                const data = JSON.stringify(post);
                res.send(data)
            } else {
                res.status(400).send({ error: 400, message: "No post with that id" })
            }
        }
    }
}