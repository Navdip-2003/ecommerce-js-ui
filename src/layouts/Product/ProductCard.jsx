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

  // Calculate the discount price
  const discountPrice = product.actualPrice - (product.actualPrice * product.discountRate / 100);

  return (
    <div
      onClick={handleCardClick}
      className="relative w-64 h-auto flex-shrink-0 p-4 flex flex-col items-center border rounded-lg shadow-lg m-2 transition-transform duration-300 hover:scale-105 group cursor-pointer"
    >
      {/* Product Image with Overlay Buttons */}
      <div className="relative w-full h-64 mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />

      </div>

      {/* Product Name */}
      <h2 className="text-base font-semibold text-gray-700 mb-1 text-center">{product.name}</h2>

      {/* Price Section with Discount */}
      <div className="text-center mb-2">
        <span className="text-lg font-bold text-gray-900 mr-2">₹{discountPrice.toFixed(2)}</span>
        {product.discountRate > 0 && (
          <span className="text-sm line-through text-gray-500">₹{product.actualPrice}</span>
        )}
        {product.discountRate > 0 && (
          <span className="text-sm text-green-500 ml-2">({product.discountRate}% OFF)</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
