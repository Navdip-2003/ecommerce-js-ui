import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <a href="/">Logo</a>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <a href="/home" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
        <a href="/product" className="text-gray-700 hover:text-blue-600">Product</a>
        <a href="/pages" className="text-gray-700 hover:text-blue-600">Pages</a>
        <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
        <a href="/buy-now" className="text-gray-700 hover:text-blue-600">Buy Now</a>
      </nav>

      {/* Search and Cart Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
          Search
        </button>
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
          Cart
        </button>
      </div>
    </header>
  );
}

export default Header;
