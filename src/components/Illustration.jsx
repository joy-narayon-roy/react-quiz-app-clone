import React from "react";
import "./styles/Illustration.css";

export default function Illustration({ img }) {
  return (
    <div className="illustration">
      <img src={img} alt="Signup" />
    </div>
  );
}
