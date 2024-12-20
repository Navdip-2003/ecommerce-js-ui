import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL =  "http://localhost:8080" || import.meta.env.REACT_APP_API_BASE_URL ; // Fallback to localhost if the env var is not set


const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(`${API_URL}${url}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
