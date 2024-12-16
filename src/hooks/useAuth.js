import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// Utility functions for token management
const getToken = () => localStorage.getItem('token');
const setToken = (token) => localStorage.setItem('token', token);
const clearToken = () => localStorage.removeItem('token');

// Base API URL from environment variable
const API_URL = import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8080"; // Fallback to localhost if the env var is not set
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    const token = getToken();

    if (!token) {
      setLoading(false);
      return; // Exit if no token is found
    }

    try {
      console.log("Fetching user data...")
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setUser(response.data.data);  // Assuming `data` contains user info
      const userData = response.data.data;
      Cookies.set('userData', JSON.stringify(userData));
      console.log(token)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch user data');
      console.error('Error fetching user:', err);
      clearToken(); // Clear invalid token
    } finally {
      setLoading(false);
    }
  };

  const login = async (mobileNumber, password) => {
    setError(null); // Reset error state before attempting login
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { mobileNumber, password });
  
      if (response.data.success) {
        const { token, user } = response.data.data;
        setToken(token); // Save token to local storage
        setUser(user); // Set the user data if included in response
        await fetchUser();
        return true;
      }
      return false;
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Invalid mobile number or password!");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
    return false;
  };

  const logout = () => {
    clearToken();
    setUser(null);
    Cookies.remove('userData'); 
    console.log('User logged out');
  };

  return { user, loading, error, login, logout , };
};

export default useAuth;
