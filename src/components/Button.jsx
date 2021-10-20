import React from "react";
import "./styles/Button.css";

export default function Button({ text, ...rest }) {
  return (
    <button className="button" {...rest}>
      <span>{text}</span>
    </button>
  );
}
