import React, { useRef, useState } from "react";
import "./styles/Button.css";

export default function PogressBar({ next, prev, progress, submit }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipRef}>
          {`${progress}%`}Complete!
        </div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>

      <button
        className="button next"
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Answer" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>
    </div>
  );
}
