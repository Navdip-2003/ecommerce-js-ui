import { useState, useEffect } from 'react';
import axios from 'axios';

// Example utility functions for token management
const getToken = () => localStorage.getItem('token');
const setToken = (token) => localStorage.setItem('token', token);
const clearToken = () => localStorage.removeItem('token');

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = getToken();
        if (token) {
          // Replace with your API endpoint to fetch user data
          const response = await axios.get('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      setError(err);
    }
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return { user, loading, error, login, logout };
};

export default useAuth;