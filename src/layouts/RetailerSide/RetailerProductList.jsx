import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';

function RetailerProductList() {
    const navigate = useNavigate();
    const productsData = [
        {
            productId: "u47d5f5",
            name: "Half Sliv T-Shirt",
            description: "100% Cotton, Slim Fit T-Shirt",
            category: { type: "T-Shirt", size: ["S", "M", "L", "XL"], color: ["Blue", "Black", "Red"], gender: "Kids", fit: "Slim Fit" },
            price: "₹599",
            discountPrice: "₹399",
            stock: "56",
            image: [
                { url: [product2, product1] },
            ],
            status: "Active",
        },
        {
            productId: "fd565s4",
            name: "Casual Shirt",
            description: "100% Cotton, Slim Fit Shirt",
            category: { type: "Shirt", size: ["S", "M", "L", "XL"], color: ["Blue", "Black", "Red"], gender: "Mens", fit: "Slim Fit" },
            price: "₹999",
            discountPrice: "₹699",
            stock: "49",
            image: [
                { url: [product2, product3] },
            ],
            status: "Inactive",
        },
        {
            productId: "k5d4cv1",
            name: "Jeans",
            description: "100% Cotton, Regular Fit Jeans",
            category: { type: "Jeans", size: ["S", "M", "L", "XL"], color: ["Blue", "Black", "Red"], gender: "Womens", fit: "Regular Fit" },
            price: "₹1599",
            discountPrice: "₹999",
            stock: "66",
            image: [
                { url: [product3, product2] },
            ],
            status: "Inactive",
        },
        {
            productId: "e3d5df3",
            name: "Jacket",
            description: "100% Cotton, Slim Fit Jacket",
            category: { type: "Jacket", size: ["S", "M", "L", "XL"], color: ["Blue", "Black", "Red"], gender: "Mens", fit: "Slim Fit" },
            price: "₹2599",
            discountPrice: "₹1699",
            stock: "25",
            image: [
                { url: [product2, product1] },
            ],
            status: "Active",
        },
    ];

    const [product] = useState(productsData);


    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product List</h1>
            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>#</th>
                            <th style={styles.th}>Product Id</th>
                            <th style={styles.th}>Product Name</th>
                            <th style={styles.th}>Price</th>
                            <th style={styles.th}>Category</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr key={index} style={styles.tr}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{product.productId}</td>
                                <td style={styles.td}>{product.name}</td>
                                <td style={styles.td}>{product.discountPrice}</td>
                                <td style={styles.td}>{product.category.gender}</td>
                                <td style={styles.td}>
                                    <span
                                        style={{
                                            ...styles.statusBadge,
                                            backgroundColor:
                                                product.status === "Active"
                                                    ? "#28a745"
                                                    : product.status === "Inactive"
                                                        ? "#ffc107"
                                                        : "#17a2b8",
                                        }}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td style={styles.td}>
                                    <button
                                        style={styles.button}
                                        onClick={() => navigate(`/retailer-product-details/${product.productId}`, { state: { product } })}
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

export default RetailerProductList;
