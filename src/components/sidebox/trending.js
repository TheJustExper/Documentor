import React, { Component } from "react";
import "./sidebox.scss";

export default () => {
  return (
    <div id="trending">
      <h1>TRENDRING COMMUNITIES</h1>
      <div className="communities">
        {[1, 2, 3, 4].map(val => {
          return (
            <div key={val} className="community">
              <div className="inner">
                <img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png"></img>
                <div className="text">
                  <b>
                    r/
                    {
                      ["Random", "WCGR", "Sports", "Gaming", "CounterStrike"][
                        Math.floor(Math.random() * 5)
                      ]
                    }
                  </b>
                  <p>{Math.floor(Math.random() * 9999)} Members</p>
                </div>
                <button>Join</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
