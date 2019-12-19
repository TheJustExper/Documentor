import React, { Component } from 'react';
import './feedPost.scss';

export default class extends Component {
	constructor(props) {
		super(props);
	}

	getSubData() {
		const { img, description } = this.props.data;
		/*
			If their is a image passed aswell as a description then only return the image
			as the description is shown in the post itself otherwise if it is shown on the
			front page the post will be too long
		*/
		if (img && description) return (<div className="outer" onClick={() => window.location = img}><img className="post-image" src={img}/></div>)
		if (description) return <p>{description}</p>;
	}

	render() {
		const { title, upvotes, sub, author, authorIcon } = this.props.data;

		return (
			<div className="post">
				<div className="sidebar">
					<img src="https://image.flaticon.com/icons/png/512/626/626013.png" />
					<p>{upvotes}</p>
					<img src="https://image.flaticon.com/icons/png/512/626/626013.png" />
				</div>
				<div className="inner">
					<div className="text">
						<div className="img">
							<img className="user-icon" src={authorIcon}/>
							<b>r/{sub}</b>
							<p>Posted by <a href={`/u/${author}`}>u/{author}</a> 5 hours ago</p>
						</div>
						<h1>{title}</h1>
					</div>
					{this.getSubData()}
				</div>
			</div>
		);
	}
}
