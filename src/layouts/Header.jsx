import React, { useState } from 'react';
import { FaPhoneAlt, FaShoppingBag, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  return (
    <header className="font-sans m-0">
      {/* Top Bar */}
      <div className="bg-black text-gray-200 py-2 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-md space-x-2">
            <FaPhoneAlt />
            <span>+91 9023150639</span>
          </div>
          <div className="flex items-center text-md space-x-2">
            <FaMapMarkerAlt />
            <span>Ahemdabad, Gujarat - 380061</span>
          </div>
        </div>
        <div className="text-md text-center mx-auto">Worldwide Express Shipping</div>
        {user ? (
          <button
            onClick={logout}
            className="text-gray-200 hover:text-gray-400 text-md font-bold"
          >
            LOGOUT
          </button>
        ) : (
          <div className="flex space-x-6">
            <Link
              to="/login"
              className="text-gray-200 hover:text-gray-400 text-md font-bold"
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              className="text-gray-200 hover:text-gray-400 text-md font-bold"
            >
              REGISTER
            </Link>
          </div>
        )}
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center p-1 bg-white border-b border-gray-300">
        {/* Logo */}
        <div className="pl-16">
          <img
            src="\src\assets\images\logo-1.png"
            className="w-24 h-16"
            alt="Shivay"
          />
        </div>

        {/* Navigation */}
        <nav className={`flex ${user ? 'justify-center' : 'justify-center'} space-x-10 text-lg font-semibold flex-1`}>
          <Link to="/home" className="text-black hover:text-gray-600 font-bold">
            HOME
          </Link>
          <Link to="/shop" className="text-black hover:text-gray-600 font-bold">
            SHOP
          </Link>
          <Link to="/about-us" className="text-black hover:text-gray-600 font-bold">
            ABOUT US
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-600 font-bold">
            CONTACT
          </Link>
        </nav>

        {/* User Options */}
        {user && (
          <div className="flex items-center space-x-6 pr-10 relative">
            {/* Profile Button with Dropdown */}
            <button
              className="text-black hover:text-gray-600"
              onClick={toggleProfileDropdown}
            >
              <FaUser />
            </button>
            {showProfileDropdown && (
              <div
                className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded w-40"
                style={{ zIndex: 50 }}
              >
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                  My Profile
                </Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200">
                  My Order
                </Link>
              </div>
            )}

            {/* Cart Icon */}
            <Link to="/cart" className="text-black hover:text-gray-600 relative">
              <FaShoppingBag />
              <span className="absolute top-0 right-0 bg-black text-white text-xs font-bold rounded-full px-1 transform translate-x-1/2 -translate-y-1/2">
                3
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
