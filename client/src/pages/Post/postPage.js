import React, { Component } from "react";
import FeedPost from "../../components/feed/feedPost";
import Growing from "../../components/sidebox/trending";
import Requests from "../../Requests";
import "./postPage.scss";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postData: {}
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        Requests.getPost(id).then((data) => {
            this.setState(state => state.postData = data);
        });
    }

    showPost() {
        if (Object.keys(this.state.postData).length > 0) { 
            return <FeedPost data={this.state.postData} postPage={true}/> 
        } else {
            return (
                <div className="noPost">
                    <h1>Error no post here</h1>
                    <p>The post that you were looking for is either deleted or was never here</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="postPage">
                <div style={{ width: "680px" }}>
                    {this.showPost()}
                </div>
                <Growing/>
            </div>
        )
    }
}