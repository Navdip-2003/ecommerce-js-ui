import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, addToCart } from './Common/cartSlice';
import Cookies from 'js-cookie';
import axios from 'axios';

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  let userData = null;
  try {
    const userDataCookie = Cookies.get('userData'); // Fetch from cookie
    if (userDataCookie) {
      userData = JSON.parse(userDataCookie); // Parse JSON string
    }
  } catch (error) {
    console.error("Failed to parse userData from cookie:", error);
  }

  const addresses = userData.address || [];

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleQuantityChange = (item, type) => {
    if (type === 'decrease' && item.quantity > 1) {
      dispatch(removeFromCart(item.id));
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(addToCart(updatedItem));
    } else if (type === 'increase') {
      dispatch(addToCart(item));
    }
  };


  const handleCheckout = async () => {
    if (!userData) {
      alert("User data is not available. Please log in.");
      return;
    }
  
    const userId = userData.id; // Assuming `user_id` is available in userData
  
    // Helper function to generate a unique order ID
    const generateOrderId = (index) => {
      const timestamp = Date.now(); // Current timestamp in milliseconds
      const randomNum = Math.floor(Math.random() * 10000); // Random 4-digit number
      return `ORD-${timestamp}-${randomNum}-${index}`;
    };
  
    const orders = cartItems.map((item, index) => ({
      order_id: generateOrderId(index), // Generate unique order ID
      user_id: userId,
      prod_id: item.id, // Assuming `id` represents the product ID
      total_amount: item.price * item.quantity,
      qty: item.quantity,
      size: item.size,
      prod_name: item.name
    }));
  
    try {
      const promises = orders.map((order) =>
        axios.post('http://localhost:8080/orders/add', order)
      );
  
      await Promise.all(promises);
  
      alert("Your order has been placed successfully!");
      navigate('/shop'); // Redirect to a "Thank You" page or order summary
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("An error occurred while placing your order. Please try again.");
    }
  };
  


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isCheckoutEnabled = selectedAddress && isCashOnDelivery && isTermsAccepted;

  return (
    <div className="cart-page p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">YOUR CART</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          {/* Cart Items Section */}
          <div className="w-full md:w-3/4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex items-center justify-between mb-6 p-4 border rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1 ml-6">
                  <p className="font-semibold">{item.name}</p>
                  <p>Color: {item.color} | Size: {item.size}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item, 'decrease')}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <p className="text-lg font-semibold">{item.quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(item, 'increase')}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
            <button onClick={() => handleContinueShopping()} className="mt-4 text-blue-500 hover:underline">
              ← Continue Shopping
            </button>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm bg-gray-100 ml-8 mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-4">SUMMARY</h3>
            <div className="mb-2">
              <p>Subtotal: ₹{getTotalPrice()}</p>
              <p>Delivery Charge: ₹49.00</p>
              <p>Handling Charge: ₹15.00</p>
            </div>
            <div className="mt-4 font-bold text-lg">
              <p>Total: ₹{getTotalPrice() + 49 + 15}</p>
            </div>

            {/* Address Selection */}
            <div className="mt-4">
              <label className="block font-bold mb-2">Select Address</label>
              {addresses.map((address, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`address-${index}`}
                    name="address"
                    value={index}
                    onChange={() => setSelectedAddress(address)}
                    className="mr-2"
                  />
                  <label htmlFor={`address-${index}`}>
                    {address.street}, {address.city}, {address.state}, {address.pinCode}
                  </label>
                </div>
              ))}
            </div>

            {/* Cash On Delivery */}
            <div className="mt-4">
              <label className="block font-bold mb-2">Payment Option</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCashOnDelivery}
                  onChange={() => setIsCashOnDelivery(!isCashOnDelivery)}
                  className="mr-2"
                />
                Cash On Delivery
              </label>
            </div>

            {/* Terms & Conditions */}
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isTermsAccepted}
                  onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                  className="mr-2"
                />
                I agree with the Terms & Conditions
              </label>
            </div>

            <button
              className={`w-full py-2 mt-4 rounded ${isCheckoutEnabled
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
              disabled={!isCheckoutEnabled}
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
