import React from "react";
import "./loadingPost.scss";

export default () => {
  const between = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="loadingPost" style={{ height: between(100, 200) + "px" }}>
      <div className="sidebar">
        <img alt="arrow" src="https://image.flaticon.com/icons/png/512/626/626013.png" />
        <p>0</p>
        <img alt="arrow" src="https://image.flaticon.com/icons/png/512/626/626013.png" />
      </div>
      <div className="inner">
        <div className="text">
          <div className="img">
            <span className="user-icon"/>
            <span className="loadingBar"/>
          </div>
        </div>
      </div>
    </div>
  );
};
