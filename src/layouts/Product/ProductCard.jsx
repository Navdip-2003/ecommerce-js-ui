import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product }) {
  return (
    <div className="relative w-64 h-auto flex-shrink-0 p-4 flex flex-col items-center border rounded-lg shadow-lg m-2 transition-transform duration-300 hover:scale-105 group">
      {/* Product Image with Overlay Buttons */}
      <div className="relative w-full h-64 mb-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition duration-200 flex items-center shadow-md">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          </button>
          <button className="bg-white text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition duration-200 flex items-center shadow-md">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mr-2" />
          </button>
        </div>
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-700 mb-1 text-center">{product.name}</h2>

      {/* Price Section */}
      <div className="text-center">
        <span className="text-xl font-bold text-gray-900 mr-2">${product.discountPrice}</span>
        <span className="text-sm line-through text-gray-500">${product.actualPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard; 