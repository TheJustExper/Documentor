import React from "react";
import "./sidebox.scss";

export default () => {
  /* 
		TODO: Sort this mess out
  */

  const getSub = () =>
    ["Random", "WCGR", "Sports", "Gaming", "CounterStrike"][
      Math.floor(Math.random() * 5)
    ];

  function getTrendingCommunities() {
    return [1, 2, 3, 4].map(val => {
      return (
        <div key={val} className="community">
          <div className="inner">
            <img alt="backgroundImg" src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
            <div className="text">
              <b>r/{getSub()}</b>
              <p>{Math.floor(Math.random() * 9999)} Members</p>
            </div>
            <button>Join</button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="sidebox trending">
      <h1>TRENDING COMMUNITIES</h1>
      <div className="communities">{getTrendingCommunities()}</div>
    </div>
  );
};
