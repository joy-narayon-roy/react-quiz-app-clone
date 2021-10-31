import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await res.json();
        setLoading(false);
        setResult(data);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    result,
  };
}
