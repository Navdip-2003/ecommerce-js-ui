// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Assuming `user` indicates whether the user is authenticated

  if (!user) {
    // If the user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // Render the child components if the user is authenticated
};

export default PrivateRoute;
