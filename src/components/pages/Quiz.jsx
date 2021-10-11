import React from "react";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import PogressBar from "../PogressBar";
import "../styles/Quiz.css";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <PogressBar />
      <MiniPlayer />
    </>
  );
}
