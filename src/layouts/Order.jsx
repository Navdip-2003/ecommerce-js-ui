import React, { useState } from 'react';
import { FaEye, FaSearch, FaFilter, FaPlusCircle } from 'react-icons/fa';

const orders = [
    {
      orderId: "ORD123456",
      products: [
        { name: "T-Shirt", quantity: 2 },
        { name: "Jeans", quantity: 1 },
      ],
      totalAmount: "1500",
      shippingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
      billingAddress: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
      orderDate: "2024-10-01",
      deliveryDate: "2024-10-05",
      status: "Completed"
    },
    {
      orderId: "ORD123457",
      products: [
        { name: "Shirt", quantity: 1 },
        { name: "Trousers", quantity: 2 },
      ],
      totalAmount: "2000",
      shippingAddress: "B-32, Blueberry Street, Mumbai, Maharashtra, 400001",
      billingAddress: "B-32, Blueberry Street, Mumbai, Maharashtra, 400001",
      orderDate: "2024-10-05",
      deliveryDate: "2024-10-10",
      status: "Pending"
    },
    // Add more orders as needed
  ];

function PastOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const filteredOrders = orders.filter(order => {
    const searchMatch = order.orderId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.products?.some(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const statusMatch = filterStatus === "All" || order.status === filterStatus;
    return searchMatch && statusMatch;
  });

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
              <th className="px-6 py-3 border text-center">Products</th>
              <th className="px-6 py-3 border text-center">Amount</th>
              <th className="px-6 py-3 border text-center">Order Date</th>
              <th className="px-6 py-3 border text-center">Status</th>
              <th className="px-6 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={order.orderId} className="hover:bg-gray-50 text-center">
                  <td className="px-6 py-3 border">{index + 1}</td>
                  <td className="px-6 py-3 border">{order.orderId}</td>
                  <td className="px-6 py-3 border">
                    {order.products.map(p => `${p.name} (x${p.quantity})`).join(', ')}
                  </td>
                  <td className="px-6 py-3 border">₹{order.totalAmount}</td>
                  <td className="px-6 py-3 border">{order.orderDate}</td>
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
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-600">
                  No orders yet, Please make some orders.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-full">
            <h2 className="text-2xl font-semibold text-center mb-6">Order Details</h2>
            <div className="space-y-4">
              <p><strong>Order ID : </strong> {selectedOrder.orderId}</p>
              <p><strong>Products : </strong></p>
              <ul className="list-disc pl-6">
                {selectedOrder.products.map((product, index) => (
                  <li key={index}>{product.name} (x{product.quantity})</li>
                ))}
              </ul>
              <p><strong>Total Amount : </strong> ₹{selectedOrder.totalAmount}</p>
              <p><strong>Shipping Address : </strong> {selectedOrder.shippingAddress}</p>
              <p><strong>Billing Address : </strong> {selectedOrder.billingAddress}</p>
              <p><strong>Order Date : </strong> {selectedOrder.orderDate}</p>
              <p><strong>Delivery Date : </strong> {selectedOrder.deliveryDate}</p>
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
