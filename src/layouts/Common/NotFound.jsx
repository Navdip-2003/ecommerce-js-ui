import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404 PAGE NOT FOUND</h1>
      <p className="text-lg text-gray-500 mb-6">The page you requested does not exist.</p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300 uppercase font-semibold flex items-center gap-2"
      >
        Continue Shopping
        <FontAwesomeIcon icon={faArrowRight} className="text-white" />
      </Link>
    </div>
  );
};

export default NotFound;
