import React from "react";
import Answers from "./Answers.jsx";
import "./styles/Question.css";
import "./styles/Quiz.css";

export default function Question() {
  return (
    <div className="question">
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}
