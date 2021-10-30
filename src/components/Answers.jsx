import React from "react";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handelChange }) {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Checkbox
          className="answer"
          text={option.title}
          valu={index}
          checked={option.checked}
          onChange={(e) => handelChange(e, index)}
          key={index}
        />
      ))}
    </div>
  );
}
