import React from "react";
import "./styles/Button.css";

export default function Button({ text, ...rest }) {
  return (
    <div class="button" {...rest}>
      <span>{text}</span>
    </div>
  );
}
