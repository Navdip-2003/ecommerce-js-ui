import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <a href="/">Logo</a>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <a href="/home" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Home</a>
        <a href="/shop" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Shop</a>
        <a href="/product" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Product</a>
        <a href="/pages" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Pages</a>
        <a href="/blog" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Blog</a>
        <a href="/buy-now" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Buy Now</a>
      </nav>

      {/* Conditional Authentication Links */}
      <div className="flex gap-4">
        {user ? (
          <>
            {/* Search and Cart Icons */}
            <button className="text-black">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
            <div className="relative">
              <button className="text-black">
                <FontAwesomeIcon icon={faBagShopping} size="lg" />
              </button>
              {/* Badge for Cart Item Count */}
              <span className="absolute bottom-0 right-0 bg-black text-white text-xs font-bold px-1.5 py-0.5 rounded-full transform translate-x-1/2 translate-y-1/2">
                3
              </span>
            </div>
            {/* Logout Button */}
            <button onClick={logout} className="text-gray-700 hover:text-blue-600 uppercase font-bold">Logout</button>
          </>
        ) : (
          <>
            {/* Login and Register Links */}
            <Link to="/login" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600 uppercase font-bold">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
