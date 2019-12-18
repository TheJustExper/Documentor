import React, { Component } from 'react';
import './post.scss';

export default class extends Component {
	constructor(props) {
		super(props);
	}

	getSubData() {
		/*
			If their is a image passed aswell as a description then only return the image
			as the description is shown in the post itself otherwise if it is shown on the
			front page the post will be too long
		*/
		if (this.props.img && this.props.description) {
			return (<div className="outer">
				<img className="post-image" src={this.props.img} />
			</div>)
		} else {
			// If theres no image but is a description return the description
			if (this.props.description) {
				return <p>{this.props.description}</p>;
			}
		}
	}

	render() {
		return (
			<div className="post">
				<div className="sidebar">
					<img src="https://image.flaticon.com/icons/png/512/626/626013.png" />
					<p>{Math.floor(Math.random() * 9)}.{Math.floor(Math.random() * 9)}k</p>
					<img src="https://image.flaticon.com/icons/png/512/626/626013.png" />
				</div>
				<div className="inner">
					<div className="text">
						<div className="img">
							<img className="user-icon" src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"/>
							<b>r/{this.props.sub}</b>
							<p>Posted by <a href={`/u/${this.props.author}`}>u/{this.props.author}</a> 5 hours ago</p>
						</div>
						<h1>{this.props.title}</h1>
					</div>
					{this.getSubData()}
				</div>
			</div>
		);
	}
}
