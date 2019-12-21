const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    name: "latest",
    router: function(req, res) {
        let data = [1, 2, 3, 4].map(() => {
            return {
                title: "Test",
                description: "This is a testing post",
            }
        })
        res.send(JSON.stringify(data));
    }
}

