import React, { Component } from 'react';
import './sidebox.scss';

export default () => {

	/* 
		TODO: Sort this mess out
	*/

	function getCommunities() {
		return [ 1, 2, 3, 4, 5 ].map((val) => {
			return (
				<div key={val} className="community">
					<div className="inner">
						<b>{val}</b>
						<img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png" />
						<p>r/{[ 'Random', 'WCGR', 'Sports', 'Gaming', 'CounterStrike' ][Math.floor(Math.random() * 5)]}</p>
					</div>
				</div>
			);
		})
	}

	return (
		<div id="growing">
			<div className="header">
				<h1>Todays Top Growing Communities</h1>
			</div>
			<div className="communities">
				{getCommunities()}
			</div>
		</div>
	);
};
