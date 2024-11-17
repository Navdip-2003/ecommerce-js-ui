import React, { useState } from 'react';
import { FaPhoneAlt, FaSearch, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
        <div className="flex space-x-6">
          <Link to="/login" className="text-gray-200 hover:text-gray-400 text-md font-bold">LOGIN</Link>
          <Link to="/register" className="text-gray-200 hover:text-gray-400 text-md font-bold">REGISTER</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center p-1 bg-white border-b border-gray-300">
        {/* Logo */}
        <div className="pl-16">
          <img src="\src\assets\images\logo-1.png" className="w-24 h-16" alt="Shivay" />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg font-semibold">
          <Link to="/home" className="text-black hover:text-gray-600 font-bold">HOME</Link>
          <Link to="/retailer-dashboard" className="text-black hover:text-gray-600 font-bold">SHOP</Link>
          <Link to="/about-us" className="text-black hover:text-gray-600 font-bold">ABOUT US</Link>
          <Link to="/contact" className="text-black hover:text-gray-600 font-bold">CONTACT</Link>
        </nav>

        {/* User Options */}
        <div className="flex items-center space-x-6 pr-10">
          {/* Search Input Toggle */}
          {showSearch && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=" px-5 py-1 bg-azure rounded-full border-2 border-orange-500"
              placeholder="Search..."
              style={{ width: '300px', borderRadius: '50px' }}
            />
          )}
          <button
            className="text-black hover:text-gray-600"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch />
          </button>
          <Link to="/profile" className="text-black hover:text-gray-600"><FaUser /></Link>
          <Link to="/" className="text-black hover:text-gray-600 relative">
            <FaShoppingBag />
            {/* Optional Badge for Cart Count */}
            <span className="absolute top-0 right-0 bg-black text-white text-xs font-bold rounded-full px-1 transform translate-x-1/2 -translate-y-1/2">3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
