import React, { Component } from "react";
import FeedPost from "../../components/feed/feedPost";
import Growing from "../../components/sidebox/growing";
import Requests from "../../Requests";
import "./postPage.scss";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postData: {
                title: "Test",
                description: "This is a testing post",
                img: `http://iwiz-blog-cms.c.yimg.jp/c/blog-cms/promotionalads/online/600_500.png`,
                author: "Bob",
                authorIcon: `https://cdn.drawception.com/images/avatars/647493-B9E.png`,
                sub: "Sports",
                upvotes: 5,
            }
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        Requests.getPost(id).then((data) => {
            this.setState(state => state.postData = data);
        });
    }

    render() {
        return (
            <div id="postPage">
                <div style={{ width: "680px" }}>
                    <FeedPost data={this.state.postData} postPage={true}/>
                </div>
                <Growing/>
            </div>
        )
    }
}