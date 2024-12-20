import React, { useState, useEffect } from "react";
import { FaEye, FaSearch, FaFilter, FaPlusCircle } from 'react-icons/fa';
import Cookies from "js-cookie";

function PastOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    // Fetch data from API
    const fetchProducts = async () => {
      try {
        // Retrieve userData from cookies
        let userData = null;
        try {
          const userDataCookie = Cookies.get("userData"); // Fetch from cookie
          if (userDataCookie) {
            userData = JSON.parse(userDataCookie); // Parse JSON string
          }
        } catch (err) {
          console.error("Failed to parse userData from cookie:", err);
        }

        const response = await fetch(`http://localhost:8080/orders/users/${userData.id}`);
        const json = await response.json();

        if (json.success && json.data.orders && Array.isArray(json.data.orders)) {
          setOrders(json.data.orders); // Access products array
        } else {
          console.error("Unexpected API response structure:", json);
          setError("Invalid data format received from server.");
        }
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Page Title and Description */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold">Order History</h1>

        <p className="text-gray-600 mt-2">View your past and current orders in the table below.</p>
      </div>


      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-10">
        <table className="table-auto w-full border-collapse text-gray-800">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="px-6 py-3 border text-center">No</th>
              <th className="px-6 py-3 border text-center">Order ID</th>
              <th className="px-6 py-3 border text-center">Product</th>
              <th className="px-6 py-3 border text-center">Amount</th>
              <th className="px-6 py-3 border text-center">Order Date</th>
              <th className="px-6 py-3 border text-center">Status</th>
              <th className="px-6 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50 text-center">
                  <td className="px-6 py-3 border">{index + 1}</td>
                  <td className="px-6 py-3 border">{order.id}</td>
                  <td className="px-6 py-3 border">{order.prod_name}</td>
                  <td className="px-6 py-3 border">₹{order.total_amount}</td>
                  <td className="px-6 py-3 border">{order.order_date}</td>
                  <td className="px-6 py-3 border">
                    <span className={`px-5 py-1 rounded-full text-white 
                      ${order.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 border">
                    <button
                      onClick={() => handleViewClick(order)}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                      <FaEye size={20} />
                    </button>
                  </td>
                </tr>
              ))
            };
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-full">
            <h2 className="text-2xl font-semibold text-center mb-6">Order Details</h2>
            <div className="space-y-4">
              <p><strong>Order ID : </strong> {selectedOrder.id}</p>
              <p><strong>Product ID : </strong>  {selectedOrder.prod_name}</p>
              <p><strong>Total Amount : </strong> ₹{selectedOrder.total_amount}</p>
              <p><strong>Size : </strong> {selectedOrder.size}</p>
              <p><strong>Qty : </strong> {selectedOrder.qty}</p>
              <p><strong>Order Date : </strong> {selectedOrder.order_date}</p>
              <p><strong>Status : </strong>
                <span className={`px-5 py-1 rounded-full text-white 
                  ${selectedOrder.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                  {selectedOrder.status}
                </span>
              </p>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PastOrders;
