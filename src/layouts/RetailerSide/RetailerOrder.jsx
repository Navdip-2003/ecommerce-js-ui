import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';

function RetailerOrder() {
    const navigate = useNavigate();
    const ordersData  = [
        {
            orderId: "e3d5df3",
            customerName: "Dhyey Gorasiya",
            products: [
                { name: "T-Shirt", quantity: 2, size:"M", color:"blue", category:"mens", image: product2, },
                { name: "Jeans", quantity: 1, size:"M", color:"blue", category:"mens", image: product1, },
            ],
            price: "₹300",
            status: "Delivered",
            paymentStatus: "Pre Paid",
            address: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
        },
        {
            orderId: "k5d4cv1",
            customerName: "Deep Vadodariya",
            products: [
                { name: "T-Shirt", quantity: 2, size:"M", color:"blue", category:"mens", image: product1, },
                { name: "Jeans", quantity: 1, size:"M", color:"blue", category:"mens", image: product3, },
            ],
            price: "₹500",
            status: "Pending",
            paymentStatus: "Cash On Delivery",
            address: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
        },
        {
            orderId: "fd565s4",
            customerName: "Navdip Chothani",
            products: [
                { name: "T-Shirt", quantity: 2, size:"M", color:"blue", category:"mens", image: product2, },
                { name: "Jeans", quantity: 1, size:"M", color:"blue", category:"mens", image: product3, },
            ],
            price: "₹1000",
            status: "Shipped",
            paymentStatus: "Pre Paid",
            address: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
        },
        {
            orderId: "u47d5f5",
            customerName: "Sachin Ramani",
            products: [
                { name: "T-Shirt", quantity: 2, size:"M", color:"blue", category:"mens", image: product2, },
            ],
            price: "₹1000",
            status: "Delivered",
            paymentStatus: "Pre Paid",
            address: "D-64, Greenwood Society, Ahmedabad, Gujarat, 380061",
        },
    ];

    const [orders] = useState(ordersData);

    const handleEditClick = (order) => {
        navigate(`/retailer/order-details/${order.orderId}`, { state: { order } });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Order Management</h1>
            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>#</th>
                            <th style={styles.th}>Order Id</th>
                            <th style={styles.th}>Product Name</th>
                            <th style={styles.th}>Price</th>
                            <th style={styles.th}>Address</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Payment Status</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} style={styles.tr}>
                                <td style={styles.td}>{index+1}</td>
                                <td style={styles.td}>{order.orderId}</td>
                                <td style={styles.td}>{order.products.map((product) => `${product.name} x ${product.quantity}`).join(", ")}</td>
                                <td style={styles.td}>{order.price}</td>
                                <td style={styles.td}>{order.address}</td>
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
                                <td style={styles.td}>{order.paymentStatus}</td>
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
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    statusBadge: {
        padding: "5px 10px",
        borderRadius: "20px",
        color: "#fff",
        fontWeight: "bold",
    },
};

export default RetailerOrder;
