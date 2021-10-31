import React from "react";
import Answers from "./Answers.jsx";
import "./styles/Question.css";
import "./styles/Quiz.css";

export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className="question" key={index}>
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
