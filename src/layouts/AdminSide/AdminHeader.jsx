import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AdminHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page
    window.location.reload();
    logout();
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
          <Link to="/admin/profile" className="text-black hover:text-gray-600"><FaUser /></Link>
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

export default AdminHeader;
