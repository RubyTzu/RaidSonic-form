import { useState, useEffect } from "react";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const useFetch = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoint)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data...!");
          }
          return res.json();
        })
        .then((data) => {
          setCitiesData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 300);
  }, []);

  return { citiesData, loading, error };
};

export default useFetch;
