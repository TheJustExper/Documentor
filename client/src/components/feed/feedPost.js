import React, { Component } from 'react';
import './feedPost.scss';

export default class extends Component {
	getSubData() {
		const { postPage } = this.props;
		const { img, description } = this.props.data;
	
		// If the component is used on the page speficially for showing that post
		// rather than on the front page with all the other posts
		if (postPage) {
			return (
				<div>
					<p>{description}</p>
					<div className="outer" onClick={() => window.location = img}><img alt="postPhoto" className="post-image" src={img}/></div>
				</div>
			)
		} else {
			// If their is a image passed aswell as a description then only return the image
			// as the description is shown in the post itself otherwise if it is shown on the
			// front page the post will be too long
			if (img && description) return (<div className="outer" onClick={() => window.location = img}><img alt="postPhoto" className="post-image" src={img}/></div>)
			if (description) return <p>{description}</p>;
		}
	}

	goToPost(id) {
		// As i'm reusing this class for the "Post" that appears when u click on the front page one
		// you need to not be able to click it again and go to the page that you're already on
		if (window.location.href.includes(`/post?id=${id}`)) return;
		window.location.href = `/post?id=${id}`
	}

	render() {
		const { id, title, upvotes, sub, author, authorIcon } = this.props.data;

		return (
			<div className="post" key={id} onClick={() => this.goToPost(id)}>
				<div className="sidebar">
					<img alt="arrow" src="https://image.flaticon.com/icons/png/512/626/626013.png" />
					<p>{upvotes}</p>
					<img alt="arrow" src="https://image.flaticon.com/icons/png/512/626/626013.png" />
				</div>
				<div className="inner">
					<div className="text">
						<div className="img">
							<img alt="userIcon" className="user-icon" src={authorIcon}/>
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
