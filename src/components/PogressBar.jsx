import React from "react";
import "./styles/Button.css";

export default function PogressBar({ next, prev, progress, submit }) {
  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">{`${progress}%`}Cimplete!</div>
        <div className="rangeBody">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button
        className="button next"
        onClick={progress === 100 ? submit : next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>
    </div>
  );
}
