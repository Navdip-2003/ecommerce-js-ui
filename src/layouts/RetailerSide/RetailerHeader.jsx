import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function RetailerHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('userType'); // Clear the userType cookie
    navigate('/login'); // Redirect to the login page
    window.location.reload(); // Optional: refresh the page to clear any remaining session data
  };

  return (
    <header className="font-sans m-0">
      {/* Main Header */}
      <div className="flex justify-between items-center p-1 bg-white border-b border-gray-300">
        {/* Logo */}
        <div className="pl-16">
          <img src="\src\assets\images\logo-1.png" className="w-24 h-16" alt="Shivay" />
        </div>

        {/* User Options */}
        <div className="flex items-center space-x-6 pr-10">
          <Link to="/retailer/profile" className="text-black hover:text-gray-600"><FaUser /></Link>
          <button
            onClick={handleLogout} // Attach the logout handler
            className="text-black hover:text-gray-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default RetailerHeader;
