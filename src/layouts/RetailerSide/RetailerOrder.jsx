import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useFetch from "../../hooks/useFetch"; // Adjust the path to your hook file

function RetailerOrder() {
  const navigate = useNavigate();

  
    const userDataCookie = Cookies.get('userData'); // Fetch from cookie
    const  userData = JSON.parse(userDataCookie); // Parse JSON string
            

  // Replace static data with dynamic fetching
  const { data, loading, error } = useFetch(`/orders/retailer/${userData.id}`);

  const handleEditClick = (order) => {
    navigate(`/retailer/order-details/${order.id}`, { state: { order } });
  };

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.container}>Error: {error.message}</div>;
  }

  const orders = data?.data.orders || [];


  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Order Management</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Order Id</th>
              <th style={styles.th}>Product ID</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{order.order_id}</td>
                <td style={styles.td}>{order.prod_id}</td>
                <td style={styles.td}>{order.total_amount}</td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor:
                        order.status === "Delivered"
                          ? "#28a745"
                          : order.status === "Pending"
                          ? "#ffc107"
                          : "#17a2b8",
                    }}
                  >
                    {order.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleEditClick(order)}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#343a40",
    fontSize: "25px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    overflowX: "auto",
  },
  th: {
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "600",
  },
  td: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  },
  tr: {
    backgroundColor: "#fff",
    transition: "background-color 0.3s",
  },
  button: {
    padding: "7px 15px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  statusBadge: {
    padding: "5px 10px",
    borderRadius: "20px",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default RetailerOrder;
