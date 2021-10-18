import React from "react";
import Success_img from "../accet/success.png";
import "./styles/Summary.css";

export default function Summary() {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={Success_img} alt="Success" />
      </div>
    </div>
  );
}
