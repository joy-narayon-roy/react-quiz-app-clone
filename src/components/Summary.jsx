import React, { useMemo } from "react";
import Success_img from "../accet/success.png";
import useFetch from "../hooks/useFetch";
import "./styles/Summary.css";

export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API,
    }
  );

  const image = result ? result.photos[0].src.medium : Success_img;

  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br /> {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className="badge">Loading your Badge...</div>}
      {error && <div className="badge">Error!</div>}
      {!loading && !error && (
        <div className="badge">
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
