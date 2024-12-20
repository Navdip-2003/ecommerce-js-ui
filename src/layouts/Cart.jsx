import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart } from './Common/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (item, type) => {
    if (type === 'decrease' && item.quantity > 1) {
      dispatch(removeFromCart(item.id)); // Remove one instance of the item
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(addToCart(updatedItem)); // Add the item back with updated quantity
    } else if (type === 'increase') {
      dispatch(addToCart(item)); // Add one more instance of the item
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
                  {/* Quantity Buttons */}
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
            <button className="mt-4 text-blue-500 hover:underline">
              ← Continue Shopping
            </button>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/4 p-4 border rounded-lg shadow-sm bg-gray-100 mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-4">SUMMARY</h3>
            <div className="mb-2">
              <p>Subtotal: ₹{getTotalPrice()}</p>
              <p>Delivery Charge: ₹49.00</p>
              <p>Handling Charge: ₹15.00</p>
            </div>
            <div className="mt-4 font-bold text-lg">
              <p>Total: ₹{getTotalPrice() + 49 + 15}</p>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                I agree with the Terms & Conditions
              </label>
            </div>
            <button className="bg-gray-400 text-white w-full py-2 mt-4 rounded hover:bg-gray-500">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
