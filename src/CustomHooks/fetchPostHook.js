import { useState, useEffect } from "react";

export function usePostFetch(api, user) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  useEffect(() => {
    setLoading(true);
    fetch(api, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [api]);

  return { data, loading, error };
}
