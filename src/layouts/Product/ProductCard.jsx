import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product }) {
  const navigate = useNavigate();

  // Handler to navigate to the product details page
  const handleCardClick = () => {
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative w-64 h-auto flex-shrink-0 p-4 flex flex-col items-center border rounded-lg shadow-lg m-2 transition-transform duration-300 hover:scale-105 group cursor-pointer"
    >
      {/* Product Image with Overlay Buttons */}
      <div className="relative w-full h-64 mb-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition duration-200 flex items-center shadow-md">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </button>
          <button className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition duration-200 flex items-center shadow-md">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      {/* "Add to Cart" Button */}
      <button className="w-full bg-white text-gray-800 bg-orange-100 text-sm font-semibold py-2 rounded shadow-md border-t transition hover:bg-gray-100 mb-2">
        ADD TO CART
      </button>

      {/* Product Name */}
      <h2 className="text-base font-semibold text-gray-700 mb-1 text-center">{product.name}</h2>

      {/* Price Section */}
      <div className="text-center mb-2">
        <span className="text-lg font-bold text-gray-900 mr-2">₹{product.discountPrice}</span>
      </div>

      {/* Color Selector */}
      <div className="flex justify-center space-x-2">
        <span className="w-4 h-4 bg-gray-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-orange-500 rounded-full inline-block"></span>
      </div>
    </div>
  );
}

export default ProductCard;
