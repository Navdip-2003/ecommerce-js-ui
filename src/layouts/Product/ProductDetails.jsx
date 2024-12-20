import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Common/cartSlice';

import delivery1 from '../../assets/images/about-us-delivery-1.png';
import delivery2 from '../../assets/images/about-us-delivery-2.png';
import delivery3 from '../../assets/images/about-us-delivery-3.png';

import sizeGuideImage from '../../assets/images/Size_Chart.jpg';
import useFetch from '../../hooks/useFetch';

const aboutUsDelivery = [
  {
    name: "Fast Delivery",
    image: delivery1
  },
  {
    name: "Cash On Delivery",
    image: delivery2
  },
  {
    name: "Easy Return",
    image: delivery3
  }
];

function ProductDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/product/${id}`);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false); // state for success alert
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Product not found or error fetching data.</div>;
  }

  const product = data?.data;

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      dispatch(addToCart({ ...product, selectedSize }));
      setAddedToCart(true); // Set to true when item is added to cart
      setTimeout(() => setAddedToCart(false), 3000); // Hide alert after 3 seconds
    } else {
      alert("Please select a size!");
    }
  };

  return (
    <div className="p-6 max-w- mx-auto">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="ml-12 mr-12 mb-4 rounded-lg" style={{ width: '600px', height: '500px', objectFit: 'cover' }} />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          {product.discountRate > 0 && (
            <span className="text-sm text-green-500 ml-2">({product.discountRate}% OFF)</span>
          )}
          <p className="text-lg mb-2">Price: <span className="line-through text-gray-500">₹{product.actualPrice}</span> ₹{product.price}</p>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Add to Cart</button>
          <h3 className="font-semibold text-lg mt-4">Available Colors:</h3>
          <div className="flex space-x-2 mb-4">
            {product.color && (
              <div className="flex space-x-2 mb-4">
                <span
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: product.color }}
                ></span>
              </div>
            )}
          </div>
          <h3 className="font-semibold text-lg">Size Options:</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {product.size?.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSizeChange(size)}
                className={`cursor-pointer border-2 rounded-lg p-2 flex justify-center items-center text-xl
                  ${selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} 
                  transition duration-200 ease-in-out`}
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                  className="hidden"
                />
                {size}
              </div>
            ))}
          </div>
          <button onClick={togglePopup} className="bg-gray-300 text-black py-2 px-4 rounded">
            Size Guide
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={togglePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={togglePopup}
            >
              ✖
            </button>
            <img
              src={sizeGuideImage}
              alt="Size Guide"
              className="w-full h-auto"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      )}

      {/* Success alert when added to cart */}
      {addedToCart && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
