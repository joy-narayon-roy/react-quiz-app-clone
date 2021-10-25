import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function useQuestions(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // Database Related Work
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + videoId + "/questions");

      const questionQuery = query(questionsRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request fierbase
        const snapshot = await get(questionQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}
