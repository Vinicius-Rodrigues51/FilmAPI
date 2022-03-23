import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api_key = "f398a63832c36971f74d5733ee6b5625";

  const request = useCallback(async (url) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);

      response = await fetch(url);
      json = await response.json();

      if (response.ok === false) {
        throw new Error(json.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
      console.log(json);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request, api_key };
};

export default useFetch;
