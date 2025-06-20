import React from "react";
import "../styles/card.css";
import example from "../assets/example.jpg"

const Card = () => {
  return (
    <div className="card">
      <img src={example} alt="cat image" className="card-image"/>

      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text
          below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>

        <div className="btn-row">
          <div className="btn-group">
            <button className="btn-view">View</button>
            <button className="btn-edit">Edit</button>
          </div>
          <small className="card-time">9 mins</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
