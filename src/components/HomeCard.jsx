import React from "react";

import "./HomeCard.css";

const HomeCard = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default HomeCard;
