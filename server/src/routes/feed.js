const between = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    name: "feed",
    router: function(req, res) {
        let data = [ 1, 2, 3, 4, 5 ].map((val) => {
            return {
                title: 'Test',
                description: 'This is a testing post',
                img: `http://iwiz-blog-cms.c.yimg.jp/c/blog-cms/promotionalads/online/600_500.png`,
                author: 'Bob',
                authorIcon: `https://cdn.drawception.com/images/avatars/647493-B9E.png`,
                sub: 'Sports',
                upvotes: between(0, 999)
            };
        });
        res.send(JSON.stringify(data));
    }
}

