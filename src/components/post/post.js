import React, {Component} from 'react';
import "./post.scss";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post">
                <div className="sidebar">
                    <img src="https://image.flaticon.com/icons/png/512/626/626013.png"></img>
                    <p>{Math.floor(Math.random() * 9)}.{Math.floor(Math.random() * 9)}k</p>
                    <img src="https://image.flaticon.com/icons/png/512/626/626013.png"></img>
                </div>
                <div className="inner">
                    <div className="text">
                        <div className="img">
                            <img className="user-icon" src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
                            <b>r/{this.props.sub}</b>
                            <p>Posted by <a href={"/u/" + this.props.author}>u/{this.props.author}</a> 5 hours ago</p>
                        </div>
                        <h1>{this.props.title}</h1>
                    </div>
                    { this.props.img ? this.props.description ? <div className="outer"><img className="post-image" src={this.props.img}></img></div> : "" : this.props.description ? <p>{this.props.description}</p> : "" }
                </div>
            </div>
        )
    }
}