import { getDatabase, ref, set } from "@firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router";
import { usrAuth } from "../../contexts/AuthContext.js";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import PogressBar from "../PogressBar";
import "../styles/Quiz.css";

//Reducer Initial state
const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Reducer start
  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = usrAuth();
  const history = useHistory();
  const { location } = history;
  const { state } = location;
  const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handelAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // Next Question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prvCurrent) => prvCurrent + 1);
    }
  }

  //Previous Question
  function previousQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prvCurrent) => prvCurrent - 1);
    }
  }

  //Submit Quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  //Calculate Progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handelChange={handelAnswerChange}
          />
          <PogressBar
            next={nextQuestion}
            prev={previousQuestion}
            submit={submit}
            progress={percentage}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
}
