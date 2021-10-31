import React from "react";
import Success_img from "../accet/success.png";
import "./styles/Summary.css";

export default function Summary({ score, noq }) {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br /> {score} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        <img src={Success_img} alt="Success" />
      </div>
    </div>
  );
}
