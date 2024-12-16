import React, { useState } from "react";
import { useLocation, useNavigate  } from "react-router-dom";

function OrderDetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state?.order;

    const [updatedStatus, setUpdatedStatus] = useState(order.status);

    const handleCloseModal = () => {
        navigate("/retailer/order");
    };

    const handleStatusChange = (e) => {
        setUpdatedStatus(e.target.value);
    };

    const handleSaveChanges = () => {
        order.status = updatedStatus;
        handleCloseModal();
    };

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.header}>Order Details</h1>
            <div style={styles.orderDetails}>
                <p><strong>Order ID:</strong> {order.orderId}</p><br/>
                <p><strong>Customer Name:</strong> {order.customerName}</p><br/>
                <p><strong>Address:</strong> {order.address}</p><br/>
                <p><strong>Payment Status:</strong> {order.paymentStatus}</p><br/>
                <label>
                    <strong>Status : </strong>
                    <select
                        style={styles.select}
                        value={updatedStatus}
                        onChange={handleStatusChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </label>
            </div>
            <h2 style={styles.subHeader}>Products</h2>
            <div style={styles.productList}>
                {order.products.map((product, index) => (
                    <div key={index} style={styles.productCard}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={styles.productImage}
                        />
                        <p><strong>Name:</strong> {product.name}</p>
                        <p><strong>Quantity:</strong> {product.quantity}</p>
                        <p><strong>Size:</strong> {product.size}</p>
                        <p><strong>Color:</strong> {product.color}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                    </div>
                ))}
            </div>
            <div style={styles.modalActions}>
                <button style={styles.saveButton} onClick={handleSaveChanges}>
                    Save Changes
                </button>
                <button style={styles.closeButton} onClick={handleCloseModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100%",
    },
    header: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "28px",
        color: "#333",
    },
    orderDetails: {
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    subHeader: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    productList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "15px",
    },
    productCard: {
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    productImage: {
        width: "200px",
        height: "auto",
        marginBottom: "10px",
        justifySelf: "center"
    },
    select: {
        padding: "10px",
        width: "200px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    modalActions: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    closeButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    saveButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
};
export default OrderDetailsPage;
